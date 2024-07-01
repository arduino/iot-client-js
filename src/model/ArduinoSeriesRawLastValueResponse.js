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
 * The ArduinoSeriesRawLastValueResponse model module.
 * @module model/ArduinoSeriesRawLastValueResponse
 * @version 2.0.3
 */
class ArduinoSeriesRawLastValueResponse {
    /**
     * Constructs a new <code>ArduinoSeriesRawLastValueResponse</code>.
     * ArduinoSeriesRawLastValueResponse media type (default view)
     * @alias module:model/ArduinoSeriesRawLastValueResponse
     * @param countValues {Number} Total number of values in the array 'values'
     * @param propertyId {String} Property id
     * @param thingId {String} Thing id
     * @param times {Array.<Date>} Timestamp in RFC3339
     * @param values {Array.<Object>} Values can be in Float, String, Bool, Object
     */
    constructor(countValues, propertyId, thingId, times, values) { 
        
        ArduinoSeriesRawLastValueResponse.initialize(this, countValues, propertyId, thingId, times, values);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, countValues, propertyId, thingId, times, values) { 
        obj['count_values'] = countValues;
        obj['property_id'] = propertyId;
        obj['thing_id'] = thingId;
        obj['times'] = times;
        obj['values'] = values;
    }

    /**
     * Constructs a <code>ArduinoSeriesRawLastValueResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArduinoSeriesRawLastValueResponse} obj Optional instance to populate.
     * @return {module:model/ArduinoSeriesRawLastValueResponse} The populated <code>ArduinoSeriesRawLastValueResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArduinoSeriesRawLastValueResponse();

            if (data.hasOwnProperty('count_values')) {
                obj['count_values'] = ApiClient.convertToType(data['count_values'], 'Number');
            }
            if (data.hasOwnProperty('property_id')) {
                obj['property_id'] = ApiClient.convertToType(data['property_id'], 'String');
            }
            if (data.hasOwnProperty('thing_id')) {
                obj['thing_id'] = ApiClient.convertToType(data['thing_id'], 'String');
            }
            if (data.hasOwnProperty('times')) {
                obj['times'] = ApiClient.convertToType(data['times'], ['Date']);
            }
            if (data.hasOwnProperty('values')) {
                obj['values'] = ApiClient.convertToType(data['values'], [Object]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ArduinoSeriesRawLastValueResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ArduinoSeriesRawLastValueResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ArduinoSeriesRawLastValueResponse.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['property_id'] && !(typeof data['property_id'] === 'string' || data['property_id'] instanceof String)) {
            throw new Error("Expected the field `property_id` to be a primitive type in the JSON string but got " + data['property_id']);
        }
        // ensure the json data is a string
        if (data['thing_id'] && !(typeof data['thing_id'] === 'string' || data['thing_id'] instanceof String)) {
            throw new Error("Expected the field `thing_id` to be a primitive type in the JSON string but got " + data['thing_id']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['times'])) {
            throw new Error("Expected the field `times` to be an array in the JSON data but got " + data['times']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['values'])) {
            throw new Error("Expected the field `values` to be an array in the JSON data but got " + data['values']);
        }

        return true;
    }


}

ArduinoSeriesRawLastValueResponse.RequiredProperties = ["count_values", "property_id", "thing_id", "times", "values"];

/**
 * Total number of values in the array 'values'
 * @member {Number} count_values
 */
ArduinoSeriesRawLastValueResponse.prototype['count_values'] = undefined;

/**
 * Property id
 * @member {String} property_id
 */
ArduinoSeriesRawLastValueResponse.prototype['property_id'] = undefined;

/**
 * Thing id
 * @member {String} thing_id
 */
ArduinoSeriesRawLastValueResponse.prototype['thing_id'] = undefined;

/**
 * Timestamp in RFC3339
 * @member {Array.<Date>} times
 */
ArduinoSeriesRawLastValueResponse.prototype['times'] = undefined;

/**
 * Values can be in Float, String, Bool, Object
 * @member {Array.<Object>} values
 */
ArduinoSeriesRawLastValueResponse.prototype['values'] = undefined;






export default ArduinoSeriesRawLastValueResponse;

