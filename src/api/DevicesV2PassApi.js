/**
 * Arduino IoT Cloud API
 *  Provides a set of endpoints to manage Arduino IoT Cloud **Devices**, **Things**, **Properties** and **Timeseries**. This API can be called just with any HTTP Client, or using one of these clients:  * [Javascript NPM package](https://www.npmjs.com/package/@arduino/arduino-iot-client)  * [Python PYPI Package](https://pypi.org/project/arduino-iot-client/)  * [Golang Module](https://github.com/arduino/iot-client-go)
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
import ArduinoDevicev2Pass from '../model/ArduinoDevicev2Pass';
import CheckDevicesV2PassPayload from '../model/CheckDevicesV2PassPayload';
import Devicev2Pass from '../model/Devicev2Pass';
import Error from '../model/Error';

/**
* DevicesV2Pass service.
* @module api/DevicesV2PassApi
* @version 1.4.4
*/
export default class DevicesV2PassApi {

    /**
    * Constructs a new DevicesV2PassApi. 
    * @alias module:api/DevicesV2PassApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * check devices_v2_pass
     * Check if the password matches.
     * @param {String} id The id of the device
     * @param {module:model/CheckDevicesV2PassPayload} checkDevicesV2PassPayload 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    devicesV2PassCheckWithHttpInfo(id, checkDevicesV2PassPayload) {
      let postBody = checkDevicesV2PassPayload;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling devicesV2PassCheck");
      }
      // verify the required parameter 'checkDevicesV2PassPayload' is set
      if (checkDevicesV2PassPayload === undefined || checkDevicesV2PassPayload === null) {
        throw new Error("Missing the required parameter 'checkDevicesV2PassPayload' when calling devicesV2PassCheck");
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
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/v2/devices/{id}/pass', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * check devices_v2_pass
     * Check if the password matches.
     * @param {String} id The id of the device
     * @param {module:model/CheckDevicesV2PassPayload} checkDevicesV2PassPayload 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    devicesV2PassCheck(id, checkDevicesV2PassPayload) {
      return this.devicesV2PassCheckWithHttpInfo(id, checkDevicesV2PassPayload)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * delete devices_v2_pass
     * Removes the password for the device.
     * @param {String} id The id of the device
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    devicesV2PassDeleteWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling devicesV2PassDelete");
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
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/v2/devices/{id}/pass', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * delete devices_v2_pass
     * Removes the password for the device.
     * @param {String} id The id of the device
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    devicesV2PassDelete(id) {
      return this.devicesV2PassDeleteWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * get devices_v2_pass
     * Returns whether the password for this device is set or not. It doesn't return the password.
     * @param {String} id The id of the device
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.suggestedPassword If true, return a suggested password (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ArduinoDevicev2Pass} and HTTP response
     */
    devicesV2PassGetWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling devicesV2PassGet");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'suggested_password': opts['suggestedPassword']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ArduinoDevicev2Pass;
      return this.apiClient.callApi(
        '/v2/devices/{id}/pass', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * get devices_v2_pass
     * Returns whether the password for this device is set or not. It doesn't return the password.
     * @param {String} id The id of the device
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.suggestedPassword If true, return a suggested password (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ArduinoDevicev2Pass}
     */
    devicesV2PassGet(id, opts) {
      return this.devicesV2PassGetWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * set devices_v2_pass
     * Sets the password for the device. It can never be read back.
     * @param {String} id The id of the device
     * @param {module:model/Devicev2Pass} devicev2Pass 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ArduinoDevicev2Pass} and HTTP response
     */
    devicesV2PassSetWithHttpInfo(id, devicev2Pass) {
      let postBody = devicev2Pass;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling devicesV2PassSet");
      }
      // verify the required parameter 'devicev2Pass' is set
      if (devicev2Pass === undefined || devicev2Pass === null) {
        throw new Error("Missing the required parameter 'devicev2Pass' when calling devicesV2PassSet");
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
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = ArduinoDevicev2Pass;
      return this.apiClient.callApi(
        '/v2/devices/{id}/pass', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * set devices_v2_pass
     * Sets the password for the device. It can never be read back.
     * @param {String} id The id of the device
     * @param {module:model/Devicev2Pass} devicev2Pass 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ArduinoDevicev2Pass}
     */
    devicesV2PassSet(id, devicev2Pass) {
      return this.devicesV2PassSetWithHttpInfo(id, devicev2Pass)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
