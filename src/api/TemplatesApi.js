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
import ArduinoTemplate from '../model/ArduinoTemplate';
import Error from '../model/Error';
import Template from '../model/Template';

/**
* Templates service.
* @module api/TemplatesApi
* @version 3.0.0
*/
export default class TemplatesApi {

    /**
    * Constructs a new TemplatesApi. 
    * @alias module:api/TemplatesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * apply templates
     * Apply an existing cloud template and generate all the needed resources
     * @param {module:model/Template} template TemplatePayload describes the needed attribute to apply a template
     * @param {Object} opts Optional parameters
     * @param {String} [xOrganization] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ArduinoTemplate} and HTTP response
     */
    templatesApplyWithHttpInfo(template, opts) {
      opts = opts || {};
      let postBody = template;
      // verify the required parameter 'template' is set
      if (template === undefined || template === null) {
        throw new Error("Missing the required parameter 'template' when calling templatesApply");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'X-Organization': opts['xOrganization']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded'];
      let accepts = ['application/vnd.arduino.template+json', 'application/vnd.goa.error+json'];
      let returnType = ArduinoTemplate;
      return this.apiClient.callApi(
        '/iot/v1/templates', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * apply templates
     * Apply an existing cloud template and generate all the needed resources
     * @param {module:model/Template} template TemplatePayload describes the needed attribute to apply a template
     * @param {Object} opts Optional parameters
     * @param {String} opts.xOrganization 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ArduinoTemplate}
     */
    templatesApply(template, opts) {
      return this.templatesApplyWithHttpInfo(template, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
