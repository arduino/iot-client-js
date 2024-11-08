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

/**
 * The ArduinoTemplateproperty model module.
 * @module model/ArduinoTemplateproperty
 * @version 3.0.0
 */
class ArduinoTemplateproperty {
    /**
     * Constructs a new <code>ArduinoTemplateproperty</code>.
     * ArduinoTemplateproperty media type (default view)
     * @alias module:model/ArduinoTemplateproperty
     * @param name {String} The friendly name of the property
     * @param permission {String} The permission of the property
     * @param type {String} The type of the property
     * @param updateStrategy {String} The update strategy for the property value
     */
    constructor(name, permission, type, updateStrategy) { 
        
        ArduinoTemplateproperty.initialize(this, name, permission, type, updateStrategy);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, permission, type, updateStrategy) { 
        obj['name'] = name;
        obj['permission'] = permission;
        obj['type'] = type;
        obj['update_strategy'] = updateStrategy;
    }

    /**
     * Constructs a <code>ArduinoTemplateproperty</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArduinoTemplateproperty} obj Optional instance to populate.
     * @return {module:model/ArduinoTemplateproperty} The populated <code>ArduinoTemplateproperty</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArduinoTemplateproperty();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('permission')) {
                obj['permission'] = ApiClient.convertToType(data['permission'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('update_parameter')) {
                obj['update_parameter'] = ApiClient.convertToType(data['update_parameter'], 'Number');
            }
            if (data.hasOwnProperty('update_strategy')) {
                obj['update_strategy'] = ApiClient.convertToType(data['update_strategy'], 'String');
            }
            if (data.hasOwnProperty('variable_name')) {
                obj['variable_name'] = ApiClient.convertToType(data['variable_name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ArduinoTemplateproperty</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ArduinoTemplateproperty</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ArduinoTemplateproperty.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['permission'] && !(typeof data['permission'] === 'string' || data['permission'] instanceof String)) {
            throw new Error("Expected the field `permission` to be a primitive type in the JSON string but got " + data['permission']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['update_strategy'] && !(typeof data['update_strategy'] === 'string' || data['update_strategy'] instanceof String)) {
            throw new Error("Expected the field `update_strategy` to be a primitive type in the JSON string but got " + data['update_strategy']);
        }
        // ensure the json data is a string
        if (data['variable_name'] && !(typeof data['variable_name'] === 'string' || data['variable_name'] instanceof String)) {
            throw new Error("Expected the field `variable_name` to be a primitive type in the JSON string but got " + data['variable_name']);
        }

        return true;
    }


}

ArduinoTemplateproperty.RequiredProperties = ["name", "permission", "type", "update_strategy"];

/**
 * The friendly id of the property
 * @member {String} id
 */
ArduinoTemplateproperty.prototype['id'] = undefined;

/**
 * The friendly name of the property
 * @member {String} name
 */
ArduinoTemplateproperty.prototype['name'] = undefined;

/**
 * The permission of the property
 * @member {String} permission
 */
ArduinoTemplateproperty.prototype['permission'] = undefined;

/**
 * The type of the property
 * @member {String} type
 */
ArduinoTemplateproperty.prototype['type'] = undefined;

/**
 * The update frequency in seconds, or the amount of the property has to change in order to trigger an update
 * @member {Number} update_parameter
 */
ArduinoTemplateproperty.prototype['update_parameter'] = undefined;

/**
 * The update strategy for the property value
 * @member {String} update_strategy
 */
ArduinoTemplateproperty.prototype['update_strategy'] = undefined;

/**
 * The sketch variable name of the property
 * @member {String} variable_name
 */
ArduinoTemplateproperty.prototype['variable_name'] = undefined;






export default ArduinoTemplateproperty;

