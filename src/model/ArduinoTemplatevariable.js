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
import ArduinoTimezone from './ArduinoTimezone';

/**
 * The ArduinoTemplatevariable model module.
 * @module model/ArduinoTemplatevariable
 * @version 3.0.0
 */
class ArduinoTemplatevariable {
    /**
     * Constructs a new <code>ArduinoTemplatevariable</code>.
     * ArduinoTemplatevariable media type (default view)
     * @alias module:model/ArduinoTemplatevariable
     * @param name {String} The name of the variable
     * @param permission {String} The permission of the linked variable
     * @param thingId {String} The name of the related thing
     * @param type {String} The type of the variable
     * @param variableId {String} The name of the variable in the code
     */
    constructor(name, permission, thingId, type, variableId) { 
        
        ArduinoTemplatevariable.initialize(this, name, permission, thingId, type, variableId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, permission, thingId, type, variableId) { 
        obj['name'] = name;
        obj['permission'] = permission;
        obj['thing_id'] = thingId;
        obj['type'] = type;
        obj['variable_id'] = variableId;
    }

    /**
     * Constructs a <code>ArduinoTemplatevariable</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArduinoTemplatevariable} obj Optional instance to populate.
     * @return {module:model/ArduinoTemplatevariable} The populated <code>ArduinoTemplatevariable</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArduinoTemplatevariable();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('permission')) {
                obj['permission'] = ApiClient.convertToType(data['permission'], 'String');
            }
            if (data.hasOwnProperty('thing_id')) {
                obj['thing_id'] = ApiClient.convertToType(data['thing_id'], 'String');
            }
            if (data.hasOwnProperty('thing_timezone')) {
                obj['thing_timezone'] = ArduinoTimezone.constructFromObject(data['thing_timezone']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('variable_id')) {
                obj['variable_id'] = ApiClient.convertToType(data['variable_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ArduinoTemplatevariable</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ArduinoTemplatevariable</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ArduinoTemplatevariable.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
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
        if (data['thing_id'] && !(typeof data['thing_id'] === 'string' || data['thing_id'] instanceof String)) {
            throw new Error("Expected the field `thing_id` to be a primitive type in the JSON string but got " + data['thing_id']);
        }
        // validate the optional field `thing_timezone`
        if (data['thing_timezone']) { // data not null
          ArduinoTimezone.validateJSON(data['thing_timezone']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['variable_id'] && !(typeof data['variable_id'] === 'string' || data['variable_id'] instanceof String)) {
            throw new Error("Expected the field `variable_id` to be a primitive type in the JSON string but got " + data['variable_id']);
        }

        return true;
    }


}

ArduinoTemplatevariable.RequiredProperties = ["name", "permission", "thing_id", "type", "variable_id"];

/**
 * The name of the variable
 * @member {String} name
 */
ArduinoTemplatevariable.prototype['name'] = undefined;

/**
 * The permission of the linked variable
 * @member {String} permission
 */
ArduinoTemplatevariable.prototype['permission'] = undefined;

/**
 * The name of the related thing
 * @member {String} thing_id
 */
ArduinoTemplatevariable.prototype['thing_id'] = undefined;

/**
 * @member {module:model/ArduinoTimezone} thing_timezone
 */
ArduinoTemplatevariable.prototype['thing_timezone'] = undefined;

/**
 * The type of the variable
 * @member {String} type
 */
ArduinoTemplatevariable.prototype['type'] = undefined;

/**
 * The name of the variable in the code
 * @member {String} variable_id
 */
ArduinoTemplatevariable.prototype['variable_id'] = undefined;






export default ArduinoTemplatevariable;

