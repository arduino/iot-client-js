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
import ArduinoAction from '../model/ArduinoAction';
import ArduinoTrigger from '../model/ArduinoTrigger';
import ArduinoTriggerTemplate from '../model/ArduinoTriggerTemplate';
import ArduinoTriggerWithLinkedEntities from '../model/ArduinoTriggerWithLinkedEntities';
import CreateAction from '../model/CreateAction';
import Error from '../model/Error';
import Trigger from '../model/Trigger';
import UpdateAction from '../model/UpdateAction';

/**
* TriggersV1 service.
* @module api/TriggersV1Api
* @version 3.0.0
*/
export default class TriggersV1Api {

    /**
    * Constructs a new TriggersV1Api. 
    * @alias module:api/TriggersV1Api
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * create actions_v1
     * Creates a new action
     * @param {module:model/CreateAction} createAction 
     * @param {Object} opts Optional parameters
     * @param {String} [xOrganization] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ArduinoAction} and HTTP response
     */
    actionsV1CreateWithHttpInfo(createAction, opts) {
      opts = opts || {};
      let postBody = createAction;
      // verify the required parameter 'createAction' is set
      if (createAction === undefined || createAction === null) {
        throw new Error("Missing the required parameter 'createAction' when calling actionsV1Create");
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
      let contentTypes = ['application/json'];
      let accepts = ['application/vnd.arduino.action+json', 'application/vnd.goa.error+json'];
      let returnType = ArduinoAction;
      return this.apiClient.callApi(
        '/iot/v1/actions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * create actions_v1
     * Creates a new action
     * @param {module:model/CreateAction} createAction 
     * @param {Object} opts Optional parameters
     * @param {String} opts.xOrganization 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ArduinoAction}
     */
    actionsV1Create(createAction, opts) {
      return this.actionsV1CreateWithHttpInfo(createAction, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * delete actions_v1
     * Removes an action
     * @param {String} id The id of the action
     * @param {Object} opts Optional parameters
     * @param {String} [xOrganization] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    actionsV1DeleteWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling actionsV1Delete");
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
        '/iot/v1/actions/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * delete actions_v1
     * Removes an action
     * @param {String} id The id of the action
     * @param {Object} opts Optional parameters
     * @param {String} opts.xOrganization 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    actionsV1Delete(id, opts) {
      return this.actionsV1DeleteWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * list actions_v1
     * Returns the list of actions
     * @param {Object} opts Optional parameters
     * @param {String} [xOrganization] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ArduinoAction>} and HTTP response
     */
    actionsV1ListWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

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
      let contentTypes = [];
      let accepts = ['application/vnd.arduino.action+json; type=collection', 'application/vnd.goa.error+json'];
      let returnType = [ArduinoAction];
      return this.apiClient.callApi(
        '/iot/v1/actions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * list actions_v1
     * Returns the list of actions
     * @param {Object} opts Optional parameters
     * @param {String} opts.xOrganization 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ArduinoAction>}
     */
    actionsV1List(opts) {
      return this.actionsV1ListWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * show actions_v1
     * Returns an action
     * @param {String} id The id of the action
     * @param {Object} opts Optional parameters
     * @param {String} [xOrganization] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ArduinoAction} and HTTP response
     */
    actionsV1ShowWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling actionsV1Show");
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
      let accepts = ['application/vnd.arduino.action+json', 'application/vnd.goa.error+json'];
      let returnType = ArduinoAction;
      return this.apiClient.callApi(
        '/iot/v1/actions/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * show actions_v1
     * Returns an action
     * @param {String} id The id of the action
     * @param {Object} opts Optional parameters
     * @param {String} opts.xOrganization 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ArduinoAction}
     */
    actionsV1Show(id, opts) {
      return this.actionsV1ShowWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * update actions_v1
     * Updates an action
     * @param {String} id The id of the action
     * @param {module:model/UpdateAction} updateAction 
     * @param {Object} opts Optional parameters
     * @param {String} [xOrganization] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ArduinoAction} and HTTP response
     */
    actionsV1UpdateWithHttpInfo(id, updateAction, opts) {
      opts = opts || {};
      let postBody = updateAction;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling actionsV1Update");
      }
      // verify the required parameter 'updateAction' is set
      if (updateAction === undefined || updateAction === null) {
        throw new Error("Missing the required parameter 'updateAction' when calling actionsV1Update");
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
      let contentTypes = ['application/json'];
      let accepts = ['application/vnd.arduino.action+json', 'application/vnd.goa.error+json'];
      let returnType = ArduinoAction;
      return this.apiClient.callApi(
        '/iot/v1/actions/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * update actions_v1
     * Updates an action
     * @param {String} id The id of the action
     * @param {module:model/UpdateAction} updateAction 
     * @param {Object} opts Optional parameters
     * @param {String} opts.xOrganization 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ArduinoAction}
     */
    actionsV1Update(id, updateAction, opts) {
      return this.actionsV1UpdateWithHttpInfo(id, updateAction, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * create triggers_v1
     * Creates a new trigger
     * @param {module:model/Trigger} trigger 
     * @param {Object} opts Optional parameters
     * @param {String} [xOrganization] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ArduinoTrigger} and HTTP response
     */
    triggersV1CreateWithHttpInfo(trigger, opts) {
      opts = opts || {};
      let postBody = trigger;
      // verify the required parameter 'trigger' is set
      if (trigger === undefined || trigger === null) {
        throw new Error("Missing the required parameter 'trigger' when calling triggersV1Create");
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
      let contentTypes = ['application/json'];
      let accepts = ['application/vnd.arduino.trigger+json', 'application/vnd.goa.error+json'];
      let returnType = ArduinoTrigger;
      return this.apiClient.callApi(
        '/iot/v1/triggers', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * create triggers_v1
     * Creates a new trigger
     * @param {module:model/Trigger} trigger 
     * @param {Object} opts Optional parameters
     * @param {String} opts.xOrganization 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ArduinoTrigger}
     */
    triggersV1Create(trigger, opts) {
      return this.triggersV1CreateWithHttpInfo(trigger, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * delete triggers_v1
     * Removes a trigger
     * @param {String} id The id of the trigger
     * @param {Object} opts Optional parameters
     * @param {Boolean} [force = false)] If true, hard delete the trigger
     * @param {String} [xOrganization] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    triggersV1DeleteWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling triggersV1Delete");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'force': opts['force']
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
        '/iot/v1/triggers/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * delete triggers_v1
     * Removes a trigger
     * @param {String} id The id of the trigger
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.force If true, hard delete the trigger (default to false)
     * @param {String} opts.xOrganization 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    triggersV1Delete(id, opts) {
      return this.triggersV1DeleteWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * list triggers_v1
     * Returns the list of triggers
     * @param {Object} opts Optional parameters
     * @param {String} [deviceId] The id of the device associated with the triggers (mutually exclusive with 'property_id')
     * @param {String} [propertyId] The id of the property associated with the triggers (mutually exclusive with 'device_id')
     * @param {Boolean} [showDeleted = false)] If true, shows the soft deleted triggers
     * @param {module:model/String} [sourceType] The source type of the trigger, could be PROPERTY, DEVICE_INCLUDE or DEVICE_EXCLUDE
     * @param {String} [xOrganization] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ArduinoTrigger>} and HTTP response
     */
    triggersV1ListWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'device_id': opts['deviceId'],
        'property_id': opts['propertyId'],
        'show_deleted': opts['showDeleted'],
        'source_type': opts['sourceType']
      };
      let headerParams = {
        'X-Organization': opts['xOrganization']
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/vnd.arduino.trigger+json; type=collection', 'application/vnd.goa.error+json'];
      let returnType = [ArduinoTrigger];
      return this.apiClient.callApi(
        '/iot/v1/triggers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * list triggers_v1
     * Returns the list of triggers
     * @param {Object} opts Optional parameters
     * @param {String} opts.deviceId The id of the device associated with the triggers (mutually exclusive with 'property_id')
     * @param {String} opts.propertyId The id of the property associated with the triggers (mutually exclusive with 'device_id')
     * @param {Boolean} opts.showDeleted If true, shows the soft deleted triggers (default to false)
     * @param {module:model/String} opts.sourceType The source type of the trigger, could be PROPERTY, DEVICE_INCLUDE or DEVICE_EXCLUDE
     * @param {String} opts.xOrganization 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ArduinoTrigger>}
     */
    triggersV1List(opts) {
      return this.triggersV1ListWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * patch triggers_v1
     * Patch a trigger
     * @param {String} id The id of the trigger
     * @param {module:model/Trigger} trigger 
     * @param {Object} opts Optional parameters
     * @param {String} [xOrganization] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ArduinoTrigger} and HTTP response
     */
    triggersV1PatchWithHttpInfo(id, trigger, opts) {
      opts = opts || {};
      let postBody = trigger;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling triggersV1Patch");
      }
      // verify the required parameter 'trigger' is set
      if (trigger === undefined || trigger === null) {
        throw new Error("Missing the required parameter 'trigger' when calling triggersV1Patch");
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
      let contentTypes = ['application/json'];
      let accepts = ['application/vnd.arduino.trigger+json', 'application/vnd.goa.error+json'];
      let returnType = ArduinoTrigger;
      return this.apiClient.callApi(
        '/iot/v1/triggers/{id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * patch triggers_v1
     * Patch a trigger
     * @param {String} id The id of the trigger
     * @param {module:model/Trigger} trigger 
     * @param {Object} opts Optional parameters
     * @param {String} opts.xOrganization 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ArduinoTrigger}
     */
    triggersV1Patch(id, trigger, opts) {
      return this.triggersV1PatchWithHttpInfo(id, trigger, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * show triggers_v1
     * Returns a trigger
     * @param {String} id The id of the trigger
     * @param {Object} opts Optional parameters
     * @param {String} [xOrganization] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ArduinoTriggerWithLinkedEntities} and HTTP response
     */
    triggersV1ShowWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling triggersV1Show");
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
      let accepts = ['application/vnd.arduino.trigger_with_linked_entities+json', 'application/vnd.goa.error+json'];
      let returnType = ArduinoTriggerWithLinkedEntities;
      return this.apiClient.callApi(
        '/iot/v1/triggers/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * show triggers_v1
     * Returns a trigger
     * @param {String} id The id of the trigger
     * @param {Object} opts Optional parameters
     * @param {String} opts.xOrganization 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ArduinoTriggerWithLinkedEntities}
     */
    triggersV1Show(id, opts) {
      return this.triggersV1ShowWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * template triggers_v1
     * Extract template from the given trigger
     * @param {String} id The id of the trigger
     * @param {Object} opts Optional parameters
     * @param {String} [xOrganization] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ArduinoTriggerTemplate} and HTTP response
     */
    triggersV1TemplateWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling triggersV1Template");
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
      let accepts = ['application/vnd.arduino.trigger_template+json', 'application/vnd.goa.error+json'];
      let returnType = ArduinoTriggerTemplate;
      return this.apiClient.callApi(
        '/iot/v1/triggers/{id}/template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * template triggers_v1
     * Extract template from the given trigger
     * @param {String} id The id of the trigger
     * @param {Object} opts Optional parameters
     * @param {String} opts.xOrganization 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ArduinoTriggerTemplate}
     */
    triggersV1Template(id, opts) {
      return this.triggersV1TemplateWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * update triggers_v1
     * Updates a trigger
     * @param {String} id The id of the trigger
     * @param {module:model/Trigger} trigger 
     * @param {Object} opts Optional parameters
     * @param {String} [xOrganization] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ArduinoTrigger} and HTTP response
     */
    triggersV1UpdateWithHttpInfo(id, trigger, opts) {
      opts = opts || {};
      let postBody = trigger;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling triggersV1Update");
      }
      // verify the required parameter 'trigger' is set
      if (trigger === undefined || trigger === null) {
        throw new Error("Missing the required parameter 'trigger' when calling triggersV1Update");
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
      let contentTypes = ['application/json'];
      let accepts = ['application/vnd.arduino.trigger+json', 'application/vnd.goa.error+json'];
      let returnType = ArduinoTrigger;
      return this.apiClient.callApi(
        '/iot/v1/triggers/{id}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * update triggers_v1
     * Updates a trigger
     * @param {String} id The id of the trigger
     * @param {module:model/Trigger} trigger 
     * @param {Object} opts Optional parameters
     * @param {String} opts.xOrganization 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ArduinoTrigger}
     */
    triggersV1Update(id, trigger, opts) {
      return this.triggersV1UpdateWithHttpInfo(id, trigger, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
