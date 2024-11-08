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
import ArduinoCredentialsv1 from '../model/ArduinoCredentialsv1';
import Error from '../model/Error';

/**
* NetworkCredentialsV1 service.
* @module api/NetworkCredentialsV1Api
* @version 3.0.0
*/
export default class NetworkCredentialsV1Api {

    /**
    * Constructs a new NetworkCredentialsV1Api. 
    * @alias module:api/NetworkCredentialsV1Api
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * show network_credentials_v1
     * Show required network credentials depending on device type
     * @param {module:model/String} type Device type
     * @param {Object} opts Optional parameters
     * @param {module:model/String} [connection] Connection used by the device
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ArduinoCredentialsv1>} and HTTP response
     */
    networkCredentialsV1ShowWithHttpInfo(type, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling networkCredentialsV1Show");
      }

      let pathParams = {
        'type': type
      };
      let queryParams = {
        'connection': opts['connection']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/vnd.arduino.credentialsv1+json; type=collection', 'application/vnd.goa.error+json'];
      let returnType = [ArduinoCredentialsv1];
      return this.apiClient.callApi(
        '/iot/v1/network_credentials/{type}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * show network_credentials_v1
     * Show required network credentials depending on device type
     * @param {module:model/String} type Device type
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.connection Connection used by the device
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ArduinoCredentialsv1>}
     */
    networkCredentialsV1Show(type, opts) {
      return this.networkCredentialsV1ShowWithHttpInfo(type, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * showByDevice network_credentials_v1
     * Show available connection types depending on device type
     * @param {module:model/String} type Device type
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    networkCredentialsV1ShowByDeviceWithHttpInfo(type) {
      let postBody = null;
      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling networkCredentialsV1ShowByDevice");
      }

      let pathParams = {
        'type': type
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json', 'application/vnd.goa.error+json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/iot/v1/network_credentials/{type}/connections', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * showByDevice network_credentials_v1
     * Show available connection types depending on device type
     * @param {module:model/String} type Device type
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    networkCredentialsV1ShowByDevice(type) {
      return this.networkCredentialsV1ShowByDeviceWithHttpInfo(type)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
