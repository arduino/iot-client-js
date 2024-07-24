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
 * The ArduinoDevicev2propertyvaluesLastEvaluatedKey model module.
 * @module model/ArduinoDevicev2propertyvaluesLastEvaluatedKey
 * @version 2.0.5
 */
class ArduinoDevicev2propertyvaluesLastEvaluatedKey {
    /**
     * Constructs a new <code>ArduinoDevicev2propertyvaluesLastEvaluatedKey</code>.
     * @alias module:model/ArduinoDevicev2propertyvaluesLastEvaluatedKey
     */
    constructor() { 
        
        ArduinoDevicev2propertyvaluesLastEvaluatedKey.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ArduinoDevicev2propertyvaluesLastEvaluatedKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArduinoDevicev2propertyvaluesLastEvaluatedKey} obj Optional instance to populate.
     * @return {module:model/ArduinoDevicev2propertyvaluesLastEvaluatedKey} The populated <code>ArduinoDevicev2propertyvaluesLastEvaluatedKey</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArduinoDevicev2propertyvaluesLastEvaluatedKey();

            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ArduinoDevicev2propertyvaluesLastEvaluatedKey</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ArduinoDevicev2propertyvaluesLastEvaluatedKey</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}



/**
 * @member {Date} created_at
 */
ArduinoDevicev2propertyvaluesLastEvaluatedKey.prototype['created_at'] = undefined;

/**
 * @member {String} id
 */
ArduinoDevicev2propertyvaluesLastEvaluatedKey.prototype['id'] = undefined;

/**
 * @member {String} name
 */
ArduinoDevicev2propertyvaluesLastEvaluatedKey.prototype['name'] = undefined;






export default ArduinoDevicev2propertyvaluesLastEvaluatedKey;

