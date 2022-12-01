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
import ArduinoTags from '../model/ArduinoTags';
import Error from '../model/Error';
import Tag from '../model/Tag';

/**
* DevicesV2Tags service.
* @module api/DevicesV2TagsApi
* @version 1.4.3
*/
export default class DevicesV2TagsApi {

    /**
    * Constructs a new DevicesV2TagsApi. 
    * @alias module:api/DevicesV2TagsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * delete devices_v2_tags
     * Delete a tag associated to the device given its key.
     * @param {String} id The id of the device
     * @param {String} key The key of the tag
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    devicesV2TagsDeleteWithHttpInfo(id, key) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling devicesV2TagsDelete");
      }
      // verify the required parameter 'key' is set
      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling devicesV2TagsDelete");
      }

      let pathParams = {
        'id': id,
        'key': key
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
        '/v2/devices/{id}/tags/{key}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * delete devices_v2_tags
     * Delete a tag associated to the device given its key.
     * @param {String} id The id of the device
     * @param {String} key The key of the tag
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    devicesV2TagsDelete(id, key) {
      return this.devicesV2TagsDeleteWithHttpInfo(id, key)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * list devices_v2_tags
     * List tags associated to the device.
     * @param {String} id The id of the device
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ArduinoTags} and HTTP response
     */
    devicesV2TagsListWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling devicesV2TagsList");
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
      let returnType = ArduinoTags;
      return this.apiClient.callApi(
        '/v2/devices/{id}/tags', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * list devices_v2_tags
     * List tags associated to the device.
     * @param {String} id The id of the device
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ArduinoTags}
     */
    devicesV2TagsList(id) {
      return this.devicesV2TagsListWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * upsert devices_v2_tags
     * Creates or updates a tag associated to the device.
     * @param {String} id The id of the device
     * @param {module:model/Tag} tag 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    devicesV2TagsUpsertWithHttpInfo(id, tag) {
      let postBody = tag;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling devicesV2TagsUpsert");
      }
      // verify the required parameter 'tag' is set
      if (tag === undefined || tag === null) {
        throw new Error("Missing the required parameter 'tag' when calling devicesV2TagsUpsert");
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
        '/v2/devices/{id}/tags', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * upsert devices_v2_tags
     * Creates or updates a tag associated to the device.
     * @param {String} id The id of the device
     * @param {module:model/Tag} tag 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    devicesV2TagsUpsert(id, tag) {
      return this.devicesV2TagsUpsertWithHttpInfo(id, tag)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
