/**
 * Arduino IoT Cloud API
 * Provides a set of endpoints to manage Arduino IoT Cloud **Devices**, **Things**, **Properties** and **Timeseries**. This API can be called just with any HTTP Client, or using one of these clients:  * [Javascript NPM package](https://www.npmjs.com/package/@arduino/arduino-iot-client)  * [Python PYPI Package](https://pypi.org/project/arduino-iot-client/)  * [Golang Module](https://github.com/arduino/iot-client-go)
 *
 * The version of the OpenAPI document: 2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ArduinoDevicev2Otaupload from '../model/ArduinoDevicev2Otaupload';
import Devicev2Otabinaryurl from '../model/Devicev2Otabinaryurl';
import Devicev2Otaurlpyalod from '../model/Devicev2Otaurlpyalod';
import Error from '../model/Error';

/**
* DevicesV2Ota service.
* @module api/DevicesV2OtaApi
* @version 3.0.0
*/
export default class DevicesV2OtaApi {

    /**
    * Constructs a new DevicesV2OtaApi. 
    * @alias module:api/DevicesV2OtaApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * send devices_v2_ota
     * Send a binary url to a device
     * @param {String} id The id of the device
     * @param {module:model/Devicev2Otabinaryurl} devicev2Otabinaryurl 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    devicesV2OtaSendWithHttpInfo(id, devicev2Otabinaryurl) {
      let postBody = devicev2Otabinaryurl;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling devicesV2OtaSend");
      }
      // verify the required parameter 'devicev2Otabinaryurl' is set
      if (devicev2Otabinaryurl === undefined || devicev2Otabinaryurl === null) {
        throw new Error("Missing the required parameter 'devicev2Otabinaryurl' when calling devicesV2OtaSend");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/vnd.goa.error+json', 'text/plain'];
      let returnType = null;
      return this.apiClient.callApi(
        '/iot/v2/devices/{id}/ota', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * send devices_v2_ota
     * Send a binary url to a device
     * @param {String} id The id of the device
     * @param {module:model/Devicev2Otabinaryurl} devicev2Otabinaryurl 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    devicesV2OtaSend(id, devicev2Otabinaryurl) {
      return this.devicesV2OtaSendWithHttpInfo(id, devicev2Otabinaryurl)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * upload devices_v2_ota
     * Upload a binary and send it to a device
     * @param {String} id The id of the device
     * @param {File} otaFile OTA file
     * @param {Object} opts Optional parameters
     * @param {Boolean} [async = true)] If false, wait for the full OTA process, until it gets a result from the device
     * @param {Number} [expireInMins = 10)] Binary expire time in minutes, default 10 mins
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ArduinoDevicev2Otaupload} and HTTP response
     */
    devicesV2OtaUploadWithHttpInfo(id, otaFile, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling devicesV2OtaUpload");
      }
      // verify the required parameter 'otaFile' is set
      if (otaFile === undefined || otaFile === null) {
        throw new Error("Missing the required parameter 'otaFile' when calling devicesV2OtaUpload");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'async': opts['async'],
        'expire_in_mins': opts['expireInMins'],
        'ota_file': otaFile
      };

      let authNames = ['oauth2'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/vnd.arduino.devicev2.otaupload+json', 'application/vnd.goa.error+json'];
      let returnType = ArduinoDevicev2Otaupload;
      return this.apiClient.callApi(
        '/iot/v2/devices/{id}/ota', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * upload devices_v2_ota
     * Upload a binary and send it to a device
     * @param {String} id The id of the device
     * @param {File} otaFile OTA file
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.async If false, wait for the full OTA process, until it gets a result from the device (default to true)
     * @param {Number} opts.expireInMins Binary expire time in minutes, default 10 mins (default to 10)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ArduinoDevicev2Otaupload}
     */
    devicesV2OtaUpload(id, otaFile, opts) {
      return this.devicesV2OtaUploadWithHttpInfo(id, otaFile, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * url devices_v2_ota
     * Generate a url for downloading a binary
     * @param {String} id The id of the device
     * @param {module:model/Devicev2Otaurlpyalod} devicev2Otaurlpyalod 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    devicesV2OtaUrlWithHttpInfo(id, devicev2Otaurlpyalod) {
      let postBody = devicev2Otaurlpyalod;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling devicesV2OtaUrl");
      }
      // verify the required parameter 'devicev2Otaurlpyalod' is set
      if (devicev2Otaurlpyalod === undefined || devicev2Otaurlpyalod === null) {
        throw new Error("Missing the required parameter 'devicev2Otaurlpyalod' when calling devicesV2OtaUrl");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/vnd.goa.error+json', 'text/plain'];
      let returnType = null;
      return this.apiClient.callApi(
        '/iot/v2/devices/{id}/ota/url', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * url devices_v2_ota
     * Generate a url for downloading a binary
     * @param {String} id The id of the device
     * @param {module:model/Devicev2Otaurlpyalod} devicev2Otaurlpyalod 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    devicesV2OtaUrl(id, devicev2Otaurlpyalod) {
      return this.devicesV2OtaUrlWithHttpInfo(id, devicev2Otaurlpyalod)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
