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
import ArduinoDevicev2propertyvalue from './ArduinoDevicev2propertyvalue';
import ArduinoDevicev2propertyvaluesLastEvaluatedKey from './ArduinoDevicev2propertyvaluesLastEvaluatedKey';

/**
 * The ArduinoDevicev2propertyvalues model module.
 * @module model/ArduinoDevicev2propertyvalues
 * @version 2.0.1
 */
class ArduinoDevicev2propertyvalues {
    /**
     * Constructs a new <code>ArduinoDevicev2propertyvalues</code>.
     * ArduinoDevicev2propertyvalues media type (default view)
     * @alias module:model/ArduinoDevicev2propertyvalues
     * @param id {String} 
     * @param lastEvaluatedKey {module:model/ArduinoDevicev2propertyvaluesLastEvaluatedKey} 
     * @param name {String} 
     * @param values {Array.<module:model/ArduinoDevicev2propertyvalue>} ArduinoDevicev2propertyvalueCollection is the media type for an array of ArduinoDevicev2propertyvalue (default view)
     */
    constructor(id, lastEvaluatedKey, name, values) { 
        
        ArduinoDevicev2propertyvalues.initialize(this, id, lastEvaluatedKey, name, values);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, lastEvaluatedKey, name, values) { 
        obj['id'] = id;
        obj['last_evaluated_key'] = lastEvaluatedKey;
        obj['name'] = name;
        obj['values'] = values;
    }

    /**
     * Constructs a <code>ArduinoDevicev2propertyvalues</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArduinoDevicev2propertyvalues} obj Optional instance to populate.
     * @return {module:model/ArduinoDevicev2propertyvalues} The populated <code>ArduinoDevicev2propertyvalues</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArduinoDevicev2propertyvalues();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('last_evaluated_key')) {
                obj['last_evaluated_key'] = ArduinoDevicev2propertyvaluesLastEvaluatedKey.constructFromObject(data['last_evaluated_key']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('values')) {
                obj['values'] = ApiClient.convertToType(data['values'], [ArduinoDevicev2propertyvalue]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ArduinoDevicev2propertyvalues</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ArduinoDevicev2propertyvalues</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ArduinoDevicev2propertyvalues.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // validate the optional field `last_evaluated_key`
        if (data['last_evaluated_key']) { // data not null
          ArduinoDevicev2propertyvaluesLastEvaluatedKey.validateJSON(data['last_evaluated_key']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        if (data['values']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['values'])) {
                throw new Error("Expected the field `values` to be an array in the JSON data but got " + data['values']);
            }
            // validate the optional field `values` (array)
            for (const item of data['values']) {
                ArduinoDevicev2propertyvalue.validateJSON(item);
            };
        }

        return true;
    }


}

ArduinoDevicev2propertyvalues.RequiredProperties = ["id", "last_evaluated_key", "name", "values"];

/**
 * @member {String} id
 */
ArduinoDevicev2propertyvalues.prototype['id'] = undefined;

/**
 * @member {module:model/ArduinoDevicev2propertyvaluesLastEvaluatedKey} last_evaluated_key
 */
ArduinoDevicev2propertyvalues.prototype['last_evaluated_key'] = undefined;

/**
 * @member {String} name
 */
ArduinoDevicev2propertyvalues.prototype['name'] = undefined;

/**
 * ArduinoDevicev2propertyvalueCollection is the media type for an array of ArduinoDevicev2propertyvalue (default view)
 * @member {Array.<module:model/ArduinoDevicev2propertyvalue>} values
 */
ArduinoDevicev2propertyvalues.prototype['values'] = undefined;






export default ArduinoDevicev2propertyvalues;

