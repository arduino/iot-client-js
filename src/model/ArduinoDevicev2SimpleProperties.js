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
 * The ArduinoDevicev2SimpleProperties model module.
 * @module model/ArduinoDevicev2SimpleProperties
 * @version 2.0.0
 */
class ArduinoDevicev2SimpleProperties {
    /**
     * Constructs a new <code>ArduinoDevicev2SimpleProperties</code>.
     * ArduinoDevicev2SimpleProperties media type (default view)
     * @alias module:model/ArduinoDevicev2SimpleProperties
     * @param name {String} The name of the property
     * @param updatedAt {Date} Update date of the property
     * @param value {Object} Value of the property
     */
    constructor(name, updatedAt, value) { 
        
        ArduinoDevicev2SimpleProperties.initialize(this, name, updatedAt, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, updatedAt, value) { 
        obj['name'] = name;
        obj['updated_at'] = updatedAt;
        obj['value'] = value;
    }

    /**
     * Constructs a <code>ArduinoDevicev2SimpleProperties</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArduinoDevicev2SimpleProperties} obj Optional instance to populate.
     * @return {module:model/ArduinoDevicev2SimpleProperties} The populated <code>ArduinoDevicev2SimpleProperties</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArduinoDevicev2SimpleProperties();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ArduinoDevicev2SimpleProperties</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ArduinoDevicev2SimpleProperties</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ArduinoDevicev2SimpleProperties.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}

ArduinoDevicev2SimpleProperties.RequiredProperties = ["name", "updated_at", "value"];

/**
 * The name of the property
 * @member {String} name
 */
ArduinoDevicev2SimpleProperties.prototype['name'] = undefined;

/**
 * Update date of the property
 * @member {Date} updated_at
 */
ArduinoDevicev2SimpleProperties.prototype['updated_at'] = undefined;

/**
 * Value of the property
 * @member {Object} value
 */
ArduinoDevicev2SimpleProperties.prototype['value'] = undefined;






export default ArduinoDevicev2SimpleProperties;

