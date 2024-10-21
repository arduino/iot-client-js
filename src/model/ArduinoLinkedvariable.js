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
 * The ArduinoLinkedvariable model module.
 * @module model/ArduinoLinkedvariable
 * @version 2.0.6
 */
class ArduinoLinkedvariable {
    /**
     * Constructs a new <code>ArduinoLinkedvariable</code>.
     * ArduinoLinkedvariable media type (default view)
     * @alias module:model/ArduinoLinkedvariable
     * @param id {String} The id of the linked variable
     * @param name {String} The name of the variable
     * @param permission {String} The permission of the linked variable
     * @param thingId {String} The id of the related thing
     * @param thingName {String} The name of the related thing
     * @param type {String} The type of the variable
     * @param variableName {String} The name of the variable in the code
     */
    constructor(id, name, permission, thingId, thingName, type, variableName) { 
        
        ArduinoLinkedvariable.initialize(this, id, name, permission, thingId, thingName, type, variableName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, name, permission, thingId, thingName, type, variableName) { 
        obj['id'] = id;
        obj['name'] = name;
        obj['permission'] = permission;
        obj['thing_id'] = thingId;
        obj['thing_name'] = thingName;
        obj['type'] = type;
        obj['variable_name'] = variableName;
    }

    /**
     * Constructs a <code>ArduinoLinkedvariable</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArduinoLinkedvariable} obj Optional instance to populate.
     * @return {module:model/ArduinoLinkedvariable} The populated <code>ArduinoLinkedvariable</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArduinoLinkedvariable();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('last_value')) {
                obj['last_value'] = ApiClient.convertToType(data['last_value'], Object);
            }
            if (data.hasOwnProperty('last_value_updated_at')) {
                obj['last_value_updated_at'] = ApiClient.convertToType(data['last_value_updated_at'], 'Date');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('permission')) {
                obj['permission'] = ApiClient.convertToType(data['permission'], 'String');
            }
            if (data.hasOwnProperty('thing_id')) {
                obj['thing_id'] = ApiClient.convertToType(data['thing_id'], 'String');
            }
            if (data.hasOwnProperty('thing_name')) {
                obj['thing_name'] = ApiClient.convertToType(data['thing_name'], 'String');
            }
            if (data.hasOwnProperty('thing_timezone')) {
                obj['thing_timezone'] = ArduinoTimezone.constructFromObject(data['thing_timezone']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('variable_name')) {
                obj['variable_name'] = ApiClient.convertToType(data['variable_name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ArduinoLinkedvariable</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ArduinoLinkedvariable</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ArduinoLinkedvariable.RequiredProperties) {
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
        if (data['thing_id'] && !(typeof data['thing_id'] === 'string' || data['thing_id'] instanceof String)) {
            throw new Error("Expected the field `thing_id` to be a primitive type in the JSON string but got " + data['thing_id']);
        }
        // ensure the json data is a string
        if (data['thing_name'] && !(typeof data['thing_name'] === 'string' || data['thing_name'] instanceof String)) {
            throw new Error("Expected the field `thing_name` to be a primitive type in the JSON string but got " + data['thing_name']);
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
        if (data['variable_name'] && !(typeof data['variable_name'] === 'string' || data['variable_name'] instanceof String)) {
            throw new Error("Expected the field `variable_name` to be a primitive type in the JSON string but got " + data['variable_name']);
        }

        return true;
    }


}

ArduinoLinkedvariable.RequiredProperties = ["id", "name", "permission", "thing_id", "thing_name", "type", "variable_name"];

/**
 * The id of the linked variable
 * @member {String} id
 */
ArduinoLinkedvariable.prototype['id'] = undefined;

/**
 * Last value of the linked property
 * @member {Object} last_value
 */
ArduinoLinkedvariable.prototype['last_value'] = undefined;

/**
 * Update date of the last value
 * @member {Date} last_value_updated_at
 */
ArduinoLinkedvariable.prototype['last_value_updated_at'] = undefined;

/**
 * The name of the variable
 * @member {String} name
 */
ArduinoLinkedvariable.prototype['name'] = undefined;

/**
 * The permission of the linked variable
 * @member {String} permission
 */
ArduinoLinkedvariable.prototype['permission'] = undefined;

/**
 * The id of the related thing
 * @member {String} thing_id
 */
ArduinoLinkedvariable.prototype['thing_id'] = undefined;

/**
 * The name of the related thing
 * @member {String} thing_name
 */
ArduinoLinkedvariable.prototype['thing_name'] = undefined;

/**
 * @member {module:model/ArduinoTimezone} thing_timezone
 */
ArduinoLinkedvariable.prototype['thing_timezone'] = undefined;

/**
 * The type of the variable
 * @member {String} type
 */
ArduinoLinkedvariable.prototype['type'] = undefined;

/**
 * The name of the variable in the code
 * @member {String} variable_name
 */
ArduinoLinkedvariable.prototype['variable_name'] = undefined;






export default ArduinoLinkedvariable;

