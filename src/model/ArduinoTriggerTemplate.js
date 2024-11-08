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

import ApiClient from '../ApiClient';
import ArduinoActionTemplate from './ArduinoActionTemplate';
import ArduinoLinkedDeviceTemplate from './ArduinoLinkedDeviceTemplate';
import ArduinoLinkedPropertyTemplate from './ArduinoLinkedPropertyTemplate';

/**
 * The ArduinoTriggerTemplate model module.
 * @module model/ArduinoTriggerTemplate
 * @version 3.0.0
 */
class ArduinoTriggerTemplate {
    /**
     * Constructs a new <code>ArduinoTriggerTemplate</code>.
     * ArduinoTrigger_template media type (default view)
     * @alias module:model/ArduinoTriggerTemplate
     * @param id {String} The id of the trigger
     * @param name {String} The name of the trigger
     */
    constructor(id, name) { 
        
        ArduinoTriggerTemplate.initialize(this, id, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, name) { 
        obj['id'] = id;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>ArduinoTriggerTemplate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArduinoTriggerTemplate} obj Optional instance to populate.
     * @return {module:model/ArduinoTriggerTemplate} The populated <code>ArduinoTriggerTemplate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArduinoTriggerTemplate();

            if (data.hasOwnProperty('actions')) {
                obj['actions'] = ApiClient.convertToType(data['actions'], [ArduinoActionTemplate]);
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('criteria')) {
                obj['criteria'] = ApiClient.convertToType(data['criteria'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('grace_period_offline')) {
                obj['grace_period_offline'] = ApiClient.convertToType(data['grace_period_offline'], 'Number');
            }
            if (data.hasOwnProperty('grace_period_online')) {
                obj['grace_period_online'] = ApiClient.convertToType(data['grace_period_online'], 'Number');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('linked_devices')) {
                obj['linked_devices'] = ApiClient.convertToType(data['linked_devices'], [ArduinoLinkedDeviceTemplate]);
            }
            if (data.hasOwnProperty('linked_property')) {
                obj['linked_property'] = ArduinoLinkedPropertyTemplate.constructFromObject(data['linked_property']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('organization_id')) {
                obj['organization_id'] = ApiClient.convertToType(data['organization_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ArduinoTriggerTemplate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ArduinoTriggerTemplate</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ArduinoTriggerTemplate.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['actions']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['actions'])) {
                throw new Error("Expected the field `actions` to be an array in the JSON data but got " + data['actions']);
            }
            // validate the optional field `actions` (array)
            for (const item of data['actions']) {
                ArduinoActionTemplate.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['criteria'] && !(typeof data['criteria'] === 'string' || data['criteria'] instanceof String)) {
            throw new Error("Expected the field `criteria` to be a primitive type in the JSON string but got " + data['criteria']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        if (data['linked_devices']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['linked_devices'])) {
                throw new Error("Expected the field `linked_devices` to be an array in the JSON data but got " + data['linked_devices']);
            }
            // validate the optional field `linked_devices` (array)
            for (const item of data['linked_devices']) {
                ArduinoLinkedDeviceTemplate.validateJSON(item);
            };
        }
        // validate the optional field `linked_property`
        if (data['linked_property']) { // data not null
          ArduinoLinkedPropertyTemplate.validateJSON(data['linked_property']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['organization_id'] && !(typeof data['organization_id'] === 'string' || data['organization_id'] instanceof String)) {
            throw new Error("Expected the field `organization_id` to be a primitive type in the JSON string but got " + data['organization_id']);
        }

        return true;
    }


}

ArduinoTriggerTemplate.RequiredProperties = ["id", "name"];

/**
 * A list of actions associated with the trigger
 * @member {Array.<module:model/ArduinoActionTemplate>} actions
 */
ArduinoTriggerTemplate.prototype['actions'] = undefined;

/**
 * Is true if the trigger is enabled
 * @member {Boolean} active
 */
ArduinoTriggerTemplate.prototype['active'] = undefined;

/**
 * The criteria of the trigger, could be INCLUDE or EXCLUDE
 * @member {String} criteria
 */
ArduinoTriggerTemplate.prototype['criteria'] = undefined;

/**
 * The description of the trigger
 * @member {String} description
 */
ArduinoTriggerTemplate.prototype['description'] = undefined;

/**
 * The amount of seconds the trigger will wait before considering a matching device as offline
 * @member {Number} grace_period_offline
 */
ArduinoTriggerTemplate.prototype['grace_period_offline'] = undefined;

/**
 * The amount of seconds the trigger will wait before considering a matching device as online
 * @member {Number} grace_period_online
 */
ArduinoTriggerTemplate.prototype['grace_period_online'] = undefined;

/**
 * The id of the trigger
 * @member {String} id
 */
ArduinoTriggerTemplate.prototype['id'] = undefined;

/**
 * A list of devices the trigger is associated to
 * @member {Array.<module:model/ArduinoLinkedDeviceTemplate>} linked_devices
 */
ArduinoTriggerTemplate.prototype['linked_devices'] = undefined;

/**
 * @member {module:model/ArduinoLinkedPropertyTemplate} linked_property
 */
ArduinoTriggerTemplate.prototype['linked_property'] = undefined;

/**
 * The name of the trigger
 * @member {String} name
 */
ArduinoTriggerTemplate.prototype['name'] = undefined;

/**
 * Id of the organization the trigger belongs to
 * @member {String} organization_id
 */
ArduinoTriggerTemplate.prototype['organization_id'] = undefined;






export default ArduinoTriggerTemplate;

