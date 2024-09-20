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

import ApiClient from '../ApiClient';

/**
 * The ArduinoPropertytype model module.
 * @module model/ArduinoPropertytype
 * @version 2.0.6
 */
class ArduinoPropertytype {
    /**
     * Constructs a new <code>ArduinoPropertytype</code>.
     * ArduinoPropertytype media type (default view)
     * @alias module:model/ArduinoPropertytype
     * @param declaration {String} The c++ type we are using for this variable type
     * @param deprecated {Boolean} Tell if this type is deprecated
     * @param name {String} The friendly name of the property type
     * @param rw {Boolean} Tell if the type allow a R/W permission
     * @param type {String} The api reference of this type
     */
    constructor(declaration, deprecated, name, rw, type) { 
        
        ArduinoPropertytype.initialize(this, declaration, deprecated, name, rw, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, declaration, deprecated, name, rw, type) { 
        obj['declaration'] = declaration;
        obj['deprecated'] = deprecated;
        obj['name'] = name;
        obj['rw'] = rw;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>ArduinoPropertytype</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArduinoPropertytype} obj Optional instance to populate.
     * @return {module:model/ArduinoPropertytype} The populated <code>ArduinoPropertytype</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArduinoPropertytype();

            if (data.hasOwnProperty('assistants')) {
                obj['assistants'] = ApiClient.convertToType(data['assistants'], ['String']);
            }
            if (data.hasOwnProperty('declaration')) {
                obj['declaration'] = ApiClient.convertToType(data['declaration'], 'String');
            }
            if (data.hasOwnProperty('deprecated')) {
                obj['deprecated'] = ApiClient.convertToType(data['deprecated'], 'Boolean');
            }
            if (data.hasOwnProperty('example')) {
                obj['example'] = ApiClient.convertToType(data['example'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('rw')) {
                obj['rw'] = ApiClient.convertToType(data['rw'], 'Boolean');
            }
            if (data.hasOwnProperty('supersededBy')) {
                obj['supersededBy'] = ApiClient.convertToType(data['supersededBy'], 'String');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('units')) {
                obj['units'] = ApiClient.convertToType(data['units'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ArduinoPropertytype</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ArduinoPropertytype</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ArduinoPropertytype.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['assistants'])) {
            throw new Error("Expected the field `assistants` to be an array in the JSON data but got " + data['assistants']);
        }
        // ensure the json data is a string
        if (data['declaration'] && !(typeof data['declaration'] === 'string' || data['declaration'] instanceof String)) {
            throw new Error("Expected the field `declaration` to be a primitive type in the JSON string but got " + data['declaration']);
        }
        // ensure the json data is a string
        if (data['example'] && !(typeof data['example'] === 'string' || data['example'] instanceof String)) {
            throw new Error("Expected the field `example` to be a primitive type in the JSON string but got " + data['example']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['supersededBy'] && !(typeof data['supersededBy'] === 'string' || data['supersededBy'] instanceof String)) {
            throw new Error("Expected the field `supersededBy` to be a primitive type in the JSON string but got " + data['supersededBy']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['tags'])) {
            throw new Error("Expected the field `tags` to be an array in the JSON data but got " + data['tags']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['units'])) {
            throw new Error("Expected the field `units` to be an array in the JSON data but got " + data['units']);
        }

        return true;
    }


}

ArduinoPropertytype.RequiredProperties = ["declaration", "deprecated", "name", "rw", "type"];

/**
 * The voice assistants available for this type
 * @member {Array.<String>} assistants
 */
ArduinoPropertytype.prototype['assistants'] = undefined;

/**
 * The c++ type we are using for this variable type
 * @member {String} declaration
 */
ArduinoPropertytype.prototype['declaration'] = undefined;

/**
 * Tell if this type is deprecated
 * @member {Boolean} deprecated
 */
ArduinoPropertytype.prototype['deprecated'] = undefined;

/**
 * Example of use
 * @member {String} example
 */
ArduinoPropertytype.prototype['example'] = undefined;

/**
 * The friendly name of the property type
 * @member {String} name
 */
ArduinoPropertytype.prototype['name'] = undefined;

/**
 * Tell if the type allow a R/W permission
 * @member {Boolean} rw
 */
ArduinoPropertytype.prototype['rw'] = undefined;

/**
 * The type of property to use if it's deprecated
 * @member {String} supersededBy
 */
ArduinoPropertytype.prototype['supersededBy'] = undefined;

/**
 * The tags related to the type
 * @member {Array.<String>} tags
 */
ArduinoPropertytype.prototype['tags'] = undefined;

/**
 * The api reference of this type
 * @member {String} type
 */
ArduinoPropertytype.prototype['type'] = undefined;

/**
 * The measure units available for this type
 * @member {Array.<String>} units
 */
ArduinoPropertytype.prototype['units'] = undefined;






export default ArduinoPropertytype;

