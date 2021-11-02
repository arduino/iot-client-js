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
 * The ArduinoSeriesResponse model module.
 * @module model/ArduinoSeriesResponse
 * @version 1.3.9
 */
class ArduinoSeriesResponse {
    /**
     * Constructs a new <code>ArduinoSeriesResponse</code>.
     * ArduinoSeriesResponse media type (default view)
     * @alias module:model/ArduinoSeriesResponse
     * @param countValues {Number} Total number of values in the array 'values'
     * @param fromDate {Date} From date
     * @param interval {Number} Resolution in seconds
     * @param query {String} Query of for the data
     * @param respVersion {Number} Response version
     * @param status {String} Status of the response
     * @param times {Array.<Date>} Timestamp in RFC3339
     * @param toDate {Date} To date
     * @param values {Array.<Number>} Values in Float
     */
    constructor(countValues, fromDate, interval, query, respVersion, status, times, toDate, values) { 
        
        ArduinoSeriesResponse.initialize(this, countValues, fromDate, interval, query, respVersion, status, times, toDate, values);
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
     * Constructs a <code>ArduinoSeriesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArduinoSeriesResponse} obj Optional instance to populate.
     * @return {module:model/ArduinoSeriesResponse} The populated <code>ArduinoSeriesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArduinoSeriesResponse();

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
                obj['values'] = ApiClient.convertToType(data['values'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * Total number of values in the array 'values'
 * @member {Number} count_values
 */
ArduinoSeriesResponse.prototype['count_values'] = undefined;

/**
 * From date
 * @member {Date} from_date
 */
ArduinoSeriesResponse.prototype['from_date'] = undefined;

/**
 * Resolution in seconds
 * @member {Number} interval
 */
ArduinoSeriesResponse.prototype['interval'] = undefined;

/**
 * If the response is different than 'ok'
 * @member {String} message
 * @default ''
 */
ArduinoSeriesResponse.prototype['message'] = '';

/**
 * Query of for the data
 * @member {String} query
 */
ArduinoSeriesResponse.prototype['query'] = undefined;

/**
 * Response version
 * @member {Number} resp_version
 */
ArduinoSeriesResponse.prototype['resp_version'] = undefined;

/**
 * Max of values
 * @member {Number} series_limit
 */
ArduinoSeriesResponse.prototype['series_limit'] = undefined;

/**
 * Status of the response
 * @member {String} status
 */
ArduinoSeriesResponse.prototype['status'] = undefined;

/**
 * Timestamp in RFC3339
 * @member {Array.<Date>} times
 */
ArduinoSeriesResponse.prototype['times'] = undefined;

/**
 * To date
 * @member {Date} to_date
 */
ArduinoSeriesResponse.prototype['to_date'] = undefined;

/**
 * Values in Float
 * @member {Array.<Number>} values
 */
ArduinoSeriesResponse.prototype['values'] = undefined;






export default ArduinoSeriesResponse;

