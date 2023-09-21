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
import ArduinoDevicev2 from '../model/ArduinoDevicev2';
import ArduinoDevicev2EventProperties from '../model/ArduinoDevicev2EventProperties';
import ArduinoDevicev2properties from '../model/ArduinoDevicev2properties';
import ArduinoDevicev2propertyvalues from '../model/ArduinoDevicev2propertyvalues';
import CreateDevicesV2Payload from '../model/CreateDevicesV2Payload';
import Devicev2 from '../model/Devicev2';
import Error from '../model/Error';
import PropertiesValues from '../model/PropertiesValues';

/**
* DevicesV2 service.
* @module api/DevicesV2Api
* @version 1.5.0
*/
export default class DevicesV2Api {

    /**
    * Constructs a new DevicesV2Api. 
    * @alias module:api/DevicesV2Api
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * create devices_v2
     * Creates a new device associated to the user.
     * @param {module:model/CreateDevicesV2Payload} createDevicesV2Payload DeviceV2 describes a device.
     * @param {Object} opts Optional parameters
     * @param {String} [xOrganization] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ArduinoDevicev2} and HTTP response
     */
    devicesV2CreateWithHttpInfo(createDevicesV2Payload, opts) {
      opts = opts || {};
      let postBody = createDevicesV2Payload;
      // verify the required parameter 'createDevicesV2Payload' is set
      if (createDevicesV2Payload === undefined || createDevicesV2Payload === null) {
        throw new Error("Missing the required parameter 'createDevicesV2Payload' when calling devicesV2Create");
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

      let authNames = ['oauth2'];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded'];
      let accepts = ['application/vnd.arduino.devicev2+json', 'application/vnd.goa.error+json'];
      let returnType = ArduinoDevicev2;
      return this.apiClient.callApi(
        '/v2/devices', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * create devices_v2
     * Creates a new device associated to the user.
     * @param {module:model/CreateDevicesV2Payload} createDevicesV2Payload DeviceV2 describes a device.
     * @param {Object} opts Optional parameters
     * @param {String} opts.xOrganization 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ArduinoDevicev2}
     */
    devicesV2Create(createDevicesV2Payload, opts) {
      return this.devicesV2CreateWithHttpInfo(createDevicesV2Payload, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * delete devices_v2
     * Removes a device associated to the user
     * @param {String} id The id of the device
     * @param {Object} opts Optional parameters
     * @param {String} [xOrganization] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    devicesV2DeleteWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling devicesV2Delete");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
        'X-Organization': opts['xOrganization']
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/vnd.goa.error+json', 'text/plain'];
      let returnType = null;
      return this.apiClient.callApi(
        '/v2/devices/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * delete devices_v2
     * Removes a device associated to the user
     * @param {String} id The id of the device
     * @param {Object} opts Optional parameters
     * @param {String} opts.xOrganization 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    devicesV2Delete(id, opts) {
      return this.devicesV2DeleteWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * getEvents devices_v2
     * GET device events
     * @param {String} id The id of the device
     * @param {Object} opts Optional parameters
     * @param {Number} [limit] The number of events to select
     * @param {String} [start] The time at which to start selecting events
     * @param {String} [xOrganization] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ArduinoDevicev2EventProperties} and HTTP response
     */
    devicesV2GetEventsWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling devicesV2GetEvents");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'limit': opts['limit'],
        'start': opts['start']
      };
      let headerParams = {
        'X-Organization': opts['xOrganization']
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/vnd.arduino.devicev2.event.properties+json', 'application/vnd.goa.error+json'];
      let returnType = ArduinoDevicev2EventProperties;
      return this.apiClient.callApi(
        '/v2/devices/{id}/events', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * getEvents devices_v2
     * GET device events
     * @param {String} id The id of the device
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit The number of events to select
     * @param {String} opts.start The time at which to start selecting events
     * @param {String} opts.xOrganization 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ArduinoDevicev2EventProperties}
     */
    devicesV2GetEvents(id, opts) {
      return this.devicesV2GetEventsWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * getProperties devices_v2
     * GET device properties
     * @param {String} id The id of the device
     * @param {Object} opts Optional parameters
     * @param {Boolean} [showDeleted = false)] If true, shows the soft deleted properties
     * @param {String} [xOrganization] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ArduinoDevicev2properties} and HTTP response
     */
    devicesV2GetPropertiesWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling devicesV2GetProperties");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'show_deleted': opts['showDeleted']
      };
      let headerParams = {
        'X-Organization': opts['xOrganization']
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/vnd.arduino.devicev2properties+json', 'application/vnd.goa.error+json'];
      let returnType = ArduinoDevicev2properties;
      return this.apiClient.callApi(
        '/v2/devices/{id}/properties', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * getProperties devices_v2
     * GET device properties
     * @param {String} id The id of the device
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.showDeleted If true, shows the soft deleted properties (default to false)
     * @param {String} opts.xOrganization 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ArduinoDevicev2properties}
     */
    devicesV2GetProperties(id, opts) {
      return this.devicesV2GetPropertiesWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * list devices_v2
     * Returns the list of devices associated to the user
     * @param {Object} opts Optional parameters
     * @param {Boolean} [acrossUserIds = false)] If true, returns all the devices
     * @param {String} [serial] Filter by device serial number
     * @param {Array.<String>} [tags] Filter by tags
     * @param {String} [xOrganization] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ArduinoDevicev2>} and HTTP response
     */
    devicesV2ListWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'across_user_ids': opts['acrossUserIds'],
        'serial': opts['serial'],
        'tags': this.apiClient.buildCollectionParam(opts['tags'], 'multi')
      };
      let headerParams = {
        'X-Organization': opts['xOrganization']
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/vnd.arduino.devicev2+json; type=collection', 'application/vnd.goa.error+json'];
      let returnType = [ArduinoDevicev2];
      return this.apiClient.callApi(
        '/v2/devices', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * list devices_v2
     * Returns the list of devices associated to the user
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.acrossUserIds If true, returns all the devices (default to false)
     * @param {String} opts.serial Filter by device serial number
     * @param {Array.<String>} opts.tags Filter by tags
     * @param {String} opts.xOrganization 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ArduinoDevicev2>}
     */
    devicesV2List(opts) {
      return this.devicesV2ListWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * show devices_v2
     * Returns the device requested by the user
     * @param {String} id The id of the device
     * @param {Object} opts Optional parameters
     * @param {String} [xOrganization] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ArduinoDevicev2} and HTTP response
     */
    devicesV2ShowWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling devicesV2Show");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
        'X-Organization': opts['xOrganization']
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/vnd.arduino.devicev2+json', 'application/vnd.goa.error+json'];
      let returnType = ArduinoDevicev2;
      return this.apiClient.callApi(
        '/v2/devices/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * show devices_v2
     * Returns the device requested by the user
     * @param {String} id The id of the device
     * @param {Object} opts Optional parameters
     * @param {String} opts.xOrganization 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ArduinoDevicev2}
     */
    devicesV2Show(id, opts) {
      return this.devicesV2ShowWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * timeseries devices_v2
     * GET device properties values in a range of time
     * @param {String} id The id of the device
     * @param {String} pid The id of the property
     * @param {Object} opts Optional parameters
     * @param {Number} [limit] The number of properties to select
     * @param {String} [start] The time at which to start selecting properties
     * @param {String} [xOrganization] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ArduinoDevicev2propertyvalues} and HTTP response
     */
    devicesV2TimeseriesWithHttpInfo(id, pid, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling devicesV2Timeseries");
      }
      // verify the required parameter 'pid' is set
      if (pid === undefined || pid === null) {
        throw new Error("Missing the required parameter 'pid' when calling devicesV2Timeseries");
      }

      let pathParams = {
        'id': id,
        'pid': pid
      };
      let queryParams = {
        'limit': opts['limit'],
        'start': opts['start']
      };
      let headerParams = {
        'X-Organization': opts['xOrganization']
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/vnd.arduino.devicev2propertyvalues+json', 'application/vnd.goa.error+json'];
      let returnType = ArduinoDevicev2propertyvalues;
      return this.apiClient.callApi(
        '/v2/devices/{id}/properties/{pid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * timeseries devices_v2
     * GET device properties values in a range of time
     * @param {String} id The id of the device
     * @param {String} pid The id of the property
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit The number of properties to select
     * @param {String} opts.start The time at which to start selecting properties
     * @param {String} opts.xOrganization 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ArduinoDevicev2propertyvalues}
     */
    devicesV2Timeseries(id, pid, opts) {
      return this.devicesV2TimeseriesWithHttpInfo(id, pid, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * update devices_v2
     * Updates a device associated to the user
     * @param {String} id The id of the device
     * @param {module:model/Devicev2} devicev2 DeviceV2 describes a device.
     * @param {Object} opts Optional parameters
     * @param {String} [xOrganization] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ArduinoDevicev2} and HTTP response
     */
    devicesV2UpdateWithHttpInfo(id, devicev2, opts) {
      opts = opts || {};
      let postBody = devicev2;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling devicesV2Update");
      }
      // verify the required parameter 'devicev2' is set
      if (devicev2 === undefined || devicev2 === null) {
        throw new Error("Missing the required parameter 'devicev2' when calling devicesV2Update");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
        'X-Organization': opts['xOrganization']
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded'];
      let accepts = ['application/vnd.arduino.devicev2+json', 'application/vnd.goa.error+json'];
      let returnType = ArduinoDevicev2;
      return this.apiClient.callApi(
        '/v2/devices/{id}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * update devices_v2
     * Updates a device associated to the user
     * @param {String} id The id of the device
     * @param {module:model/Devicev2} devicev2 DeviceV2 describes a device.
     * @param {Object} opts Optional parameters
     * @param {String} opts.xOrganization 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ArduinoDevicev2}
     */
    devicesV2Update(id, devicev2, opts) {
      return this.devicesV2UpdateWithHttpInfo(id, devicev2, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * updateProperties devices_v2
     * Update device properties last values
     * @param {String} id The id of the device
     * @param {module:model/PropertiesValues} propertiesValues 
     * @param {Object} opts Optional parameters
     * @param {String} [xOrganization] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    devicesV2UpdatePropertiesWithHttpInfo(id, propertiesValues, opts) {
      opts = opts || {};
      let postBody = propertiesValues;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling devicesV2UpdateProperties");
      }
      // verify the required parameter 'propertiesValues' is set
      if (propertiesValues === undefined || propertiesValues === null) {
        throw new Error("Missing the required parameter 'propertiesValues' when calling devicesV2UpdateProperties");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
        'X-Organization': opts['xOrganization']
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded'];
      let accepts = ['application/vnd.goa.error+json', 'text/plain'];
      let returnType = null;
      return this.apiClient.callApi(
        '/v2/devices/{id}/properties', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * updateProperties devices_v2
     * Update device properties last values
     * @param {String} id The id of the device
     * @param {module:model/PropertiesValues} propertiesValues 
     * @param {Object} opts Optional parameters
     * @param {String} opts.xOrganization 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    devicesV2UpdateProperties(id, propertiesValues, opts) {
      return this.devicesV2UpdatePropertiesWithHttpInfo(id, propertiesValues, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
