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
import ArduinoDevicev2Cert from '../model/ArduinoDevicev2Cert';
import CreateDevicesV2CertsPayload from '../model/CreateDevicesV2CertsPayload';
import Devicev2Cert from '../model/Devicev2Cert';
import Error from '../model/Error';

/**
* DevicesV2Certs service.
* @module api/DevicesV2CertsApi
* @version 2.0.6
*/
export default class DevicesV2CertsApi {

    /**
    * Constructs a new DevicesV2CertsApi. 
    * @alias module:api/DevicesV2CertsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * create devices_v2_certs
     * Creates a new cert associated to a device. The csr is signed and saved in database. The CommonName will be replaced with the device id.
     * @param {String} id The id of the device
     * @param {module:model/CreateDevicesV2CertsPayload} createDevicesV2CertsPayload 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ArduinoDevicev2Cert} and HTTP response
     */
    devicesV2CertsCreateWithHttpInfo(id, createDevicesV2CertsPayload) {
      let postBody = createDevicesV2CertsPayload;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling devicesV2CertsCreate");
      }
      // verify the required parameter 'createDevicesV2CertsPayload' is set
      if (createDevicesV2CertsPayload === undefined || createDevicesV2CertsPayload === null) {
        throw new Error("Missing the required parameter 'createDevicesV2CertsPayload' when calling devicesV2CertsCreate");
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
      let accepts = ['application/vnd.arduino.devicev2.cert+json', 'application/vnd.goa.error+json'];
      let returnType = ArduinoDevicev2Cert;
      return this.apiClient.callApi(
        '/v2/devices/{id}/certs', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * create devices_v2_certs
     * Creates a new cert associated to a device. The csr is signed and saved in database. The CommonName will be replaced with the device id.
     * @param {String} id The id of the device
     * @param {module:model/CreateDevicesV2CertsPayload} createDevicesV2CertsPayload 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ArduinoDevicev2Cert}
     */
    devicesV2CertsCreate(id, createDevicesV2CertsPayload) {
      return this.devicesV2CertsCreateWithHttpInfo(id, createDevicesV2CertsPayload)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * delete devices_v2_certs
     * Removes a cert associated to a device
     * @param {String} cid The id of the cert
     * @param {String} id The id of the device
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    devicesV2CertsDeleteWithHttpInfo(cid, id) {
      let postBody = null;
      // verify the required parameter 'cid' is set
      if (cid === undefined || cid === null) {
        throw new Error("Missing the required parameter 'cid' when calling devicesV2CertsDelete");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling devicesV2CertsDelete");
      }

      let pathParams = {
        'cid': cid,
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
      let accepts = ['application/vnd.goa.error+json', 'text/plain'];
      let returnType = null;
      return this.apiClient.callApi(
        '/v2/devices/{id}/certs/{cid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * delete devices_v2_certs
     * Removes a cert associated to a device
     * @param {String} cid The id of the cert
     * @param {String} id The id of the device
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    devicesV2CertsDelete(cid, id) {
      return this.devicesV2CertsDeleteWithHttpInfo(cid, id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * list devices_v2_certs
     * Returns the list of certs associated to the device
     * @param {String} id The id of the device
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ArduinoDevicev2Cert>} and HTTP response
     */
    devicesV2CertsListWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling devicesV2CertsList");
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
      let accepts = ['application/vnd.arduino.devicev2.cert+json; type=collection', 'application/vnd.goa.error+json'];
      let returnType = [ArduinoDevicev2Cert];
      return this.apiClient.callApi(
        '/v2/devices/{id}/certs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * list devices_v2_certs
     * Returns the list of certs associated to the device
     * @param {String} id The id of the device
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ArduinoDevicev2Cert>}
     */
    devicesV2CertsList(id) {
      return this.devicesV2CertsListWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * show devices_v2_certs
     * Returns the cert requested by the user
     * @param {String} cid The id of the cert
     * @param {String} id The id of the device
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ArduinoDevicev2Cert} and HTTP response
     */
    devicesV2CertsShowWithHttpInfo(cid, id) {
      let postBody = null;
      // verify the required parameter 'cid' is set
      if (cid === undefined || cid === null) {
        throw new Error("Missing the required parameter 'cid' when calling devicesV2CertsShow");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling devicesV2CertsShow");
      }

      let pathParams = {
        'cid': cid,
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
      let accepts = ['application/vnd.arduino.devicev2.cert+json', 'application/vnd.goa.error+json'];
      let returnType = ArduinoDevicev2Cert;
      return this.apiClient.callApi(
        '/v2/devices/{id}/certs/{cid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * show devices_v2_certs
     * Returns the cert requested by the user
     * @param {String} cid The id of the cert
     * @param {String} id The id of the device
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ArduinoDevicev2Cert}
     */
    devicesV2CertsShow(cid, id) {
      return this.devicesV2CertsShowWithHttpInfo(cid, id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * update devices_v2_certs
     * Updates a cert associated to a device. The csr is signed and saved in database. The CommonName will be replaced with the device id.
     * @param {String} cid The id of the cert
     * @param {String} id The id of the device
     * @param {module:model/Devicev2Cert} devicev2Cert 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ArduinoDevicev2Cert} and HTTP response
     */
    devicesV2CertsUpdateWithHttpInfo(cid, id, devicev2Cert) {
      let postBody = devicev2Cert;
      // verify the required parameter 'cid' is set
      if (cid === undefined || cid === null) {
        throw new Error("Missing the required parameter 'cid' when calling devicesV2CertsUpdate");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling devicesV2CertsUpdate");
      }
      // verify the required parameter 'devicev2Cert' is set
      if (devicev2Cert === undefined || devicev2Cert === null) {
        throw new Error("Missing the required parameter 'devicev2Cert' when calling devicesV2CertsUpdate");
      }

      let pathParams = {
        'cid': cid,
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
      let accepts = ['application/vnd.arduino.devicev2.cert+json', 'application/vnd.goa.error+json'];
      let returnType = ArduinoDevicev2Cert;
      return this.apiClient.callApi(
        '/v2/devices/{id}/certs/{cid}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * update devices_v2_certs
     * Updates a cert associated to a device. The csr is signed and saved in database. The CommonName will be replaced with the device id.
     * @param {String} cid The id of the cert
     * @param {String} id The id of the device
     * @param {module:model/Devicev2Cert} devicev2Cert 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ArduinoDevicev2Cert}
     */
    devicesV2CertsUpdate(cid, id, devicev2Cert) {
      return this.devicesV2CertsUpdateWithHttpInfo(cid, id, devicev2Cert)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
