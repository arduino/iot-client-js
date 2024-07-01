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
 * The ArduinoSeriesSampledResponse model module.
 * @module model/ArduinoSeriesSampledResponse
 * @version 2.0.3
 */
class ArduinoSeriesSampledResponse {
    /**
     * Constructs a new <code>ArduinoSeriesSampledResponse</code>.
     * ArduinoSeriesSampledResponse media type (default view)
     * @alias module:model/ArduinoSeriesSampledResponse
     * @param countValues {Number} Total number of values in the array 'values'
     * @param fromDate {Date} From date
     * @param interval {Number} Resolution in seconds
     * @param query {String} Query of for the data
     * @param respVersion {Number} Response version
     * @param status {String} Status of the response
     * @param times {Array.<Date>} Timestamp in RFC3339
     * @param toDate {Date} To date
     * @param values {Array.<Object>} Values in Float
     */
    constructor(countValues, fromDate, interval, query, respVersion, status, times, toDate, values) { 
        
        ArduinoSeriesSampledResponse.initialize(this, countValues, fromDate, interval, query, respVersion, status, times, toDate, values);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, countValues, fromDate, interval, query, respVersion, status, times, toDate, values) { 
        obj['count_values'] = countValues;
        obj['from_date'] = fromDate;
        obj['interval'] = interval;
        obj['query'] = query;
        obj['resp_version'] = respVersion;
        obj['status'] = status;
        obj['times'] = times;
        obj['to_date'] = toDate;
        obj['values'] = values;
    }

    /**
     * Constructs a <code>ArduinoSeriesSampledResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArduinoSeriesSampledResponse} obj Optional instance to populate.
     * @return {module:model/ArduinoSeriesSampledResponse} The populated <code>ArduinoSeriesSampledResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArduinoSeriesSampledResponse();

            if (data.hasOwnProperty('count_values')) {
                obj['count_values'] = ApiClient.convertToType(data['count_values'], 'Number');
            }
            if (data.hasOwnProperty('from_date')) {
                obj['from_date'] = ApiClient.convertToType(data['from_date'], 'Date');
            }
            if (data.hasOwnProperty('interval')) {
                obj['interval'] = ApiClient.convertToType(data['interval'], 'Number');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('query')) {
                obj['query'] = ApiClient.convertToType(data['query'], 'String');
            }
            if (data.hasOwnProperty('resp_version')) {
                obj['resp_version'] = ApiClient.convertToType(data['resp_version'], 'Number');
            }
            if (data.hasOwnProperty('series_limit')) {
                obj['series_limit'] = ApiClient.convertToType(data['series_limit'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('times')) {
                obj['times'] = ApiClient.convertToType(data['times'], ['Date']);
            }
            if (data.hasOwnProperty('to_date')) {
                obj['to_date'] = ApiClient.convertToType(data['to_date'], 'Date');
            }
            if (data.hasOwnProperty('values')) {
                obj['values'] = ApiClient.convertToType(data['values'], [Object]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ArduinoSeriesSampledResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ArduinoSeriesSampledResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ArduinoSeriesSampledResponse.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }
        // ensure the json data is a string
        if (data['query'] && !(typeof data['query'] === 'string' || data['query'] instanceof String)) {
            throw new Error("Expected the field `query` to be a primitive type in the JSON string but got " + data['query']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
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

ArduinoSeriesSampledResponse.RequiredProperties = ["count_values", "from_date", "interval", "query", "resp_version", "status", "times", "to_date", "values"];

/**
 * Total number of values in the array 'values'
 * @member {Number} count_values
 */
ArduinoSeriesSampledResponse.prototype['count_values'] = undefined;

/**
 * From date
 * @member {Date} from_date
 */
ArduinoSeriesSampledResponse.prototype['from_date'] = undefined;

/**
 * Resolution in seconds
 * @member {Number} interval
 */
ArduinoSeriesSampledResponse.prototype['interval'] = undefined;

/**
 * If the response is different than 'ok'
 * @member {String} message
 * @default ''
 */
ArduinoSeriesSampledResponse.prototype['message'] = '';

/**
 * Query of for the data
 * @member {String} query
 */
ArduinoSeriesSampledResponse.prototype['query'] = undefined;

/**
 * Response version
 * @member {Number} resp_version
 */
ArduinoSeriesSampledResponse.prototype['resp_version'] = undefined;

/**
 * Maximum number of values returned after data aggregation, if any
 * @member {Number} series_limit
 */
ArduinoSeriesSampledResponse.prototype['series_limit'] = undefined;

/**
 * Status of the response
 * @member {String} status
 */
ArduinoSeriesSampledResponse.prototype['status'] = undefined;

/**
 * Timestamp in RFC3339
 * @member {Array.<Date>} times
 */
ArduinoSeriesSampledResponse.prototype['times'] = undefined;

/**
 * To date
 * @member {Date} to_date
 */
ArduinoSeriesSampledResponse.prototype['to_date'] = undefined;

/**
 * Values in Float
 * @member {Array.<Object>} values
 */
ArduinoSeriesSampledResponse.prototype['values'] = undefined;






export default ArduinoSeriesSampledResponse;

