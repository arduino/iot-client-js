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
 * The ArduinoSeriesResponse model module.
 * @module model/ArduinoSeriesResponse
 * @version 3.0.0
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
        obj['message'] = '';
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

            if (data.hasOwnProperty('aggregation')) {
                obj['aggregation'] = ApiClient.convertToType(data['aggregation'], 'String');
            }
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
            if (data.hasOwnProperty('property_id')) {
                obj['property_id'] = ApiClient.convertToType(data['property_id'], 'String');
            }
            if (data.hasOwnProperty('property_name')) {
                obj['property_name'] = ApiClient.convertToType(data['property_name'], 'String');
            }
            if (data.hasOwnProperty('property_type')) {
                obj['property_type'] = ApiClient.convertToType(data['property_type'], 'String');
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
            if (data.hasOwnProperty('thing_id')) {
                obj['thing_id'] = ApiClient.convertToType(data['thing_id'], 'String');
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

    /**
     * Validates the JSON data with respect to <code>ArduinoSeriesResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ArduinoSeriesResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ArduinoSeriesResponse.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['aggregation'] && !(typeof data['aggregation'] === 'string' || data['aggregation'] instanceof String)) {
            throw new Error("Expected the field `aggregation` to be a primitive type in the JSON string but got " + data['aggregation']);
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }
        // ensure the json data is a string
        if (data['property_id'] && !(typeof data['property_id'] === 'string' || data['property_id'] instanceof String)) {
            throw new Error("Expected the field `property_id` to be a primitive type in the JSON string but got " + data['property_id']);
        }
        // ensure the json data is a string
        if (data['property_name'] && !(typeof data['property_name'] === 'string' || data['property_name'] instanceof String)) {
            throw new Error("Expected the field `property_name` to be a primitive type in the JSON string but got " + data['property_name']);
        }
        // ensure the json data is a string
        if (data['property_type'] && !(typeof data['property_type'] === 'string' || data['property_type'] instanceof String)) {
            throw new Error("Expected the field `property_type` to be a primitive type in the JSON string but got " + data['property_type']);
        }
        // ensure the json data is a string
        if (data['query'] && !(typeof data['query'] === 'string' || data['query'] instanceof String)) {
            throw new Error("Expected the field `query` to be a primitive type in the JSON string but got " + data['query']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
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

ArduinoSeriesResponse.RequiredProperties = ["count_values", "from_date", "interval", "query", "resp_version", "status", "times", "to_date", "values"];

/**
 * Aggregation statistic function. For numeric values, AVG statistic is used by default. PCT_X compute the Xth approximate percentile (e.g. PCT_95 is the 95th approximate percentile). For boolean, BOOL_OR statistic is used as default.
 * @member {module:model/ArduinoSeriesResponse.AggregationEnum} aggregation
 */
ArduinoSeriesResponse.prototype['aggregation'] = undefined;

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
 * Property id
 * @member {String} property_id
 */
ArduinoSeriesResponse.prototype['property_id'] = undefined;

/**
 * Property name
 * @member {String} property_name
 */
ArduinoSeriesResponse.prototype['property_name'] = undefined;

/**
 * Property type
 * @member {String} property_type
 */
ArduinoSeriesResponse.prototype['property_type'] = undefined;

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
 * Maximum number of values returned after data aggregation, if any
 * @member {Number} series_limit
 */
ArduinoSeriesResponse.prototype['series_limit'] = undefined;

/**
 * Status of the response
 * @member {String} status
 */
ArduinoSeriesResponse.prototype['status'] = undefined;

/**
 * Thing id
 * @member {String} thing_id
 */
ArduinoSeriesResponse.prototype['thing_id'] = undefined;

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





/**
 * Allowed values for the <code>aggregation</code> property.
 * @enum {String}
 * @readonly
 */
ArduinoSeriesResponse['AggregationEnum'] = {

    /**
     * value: "AVG"
     * @const
     */
    "AVG": "AVG",

    /**
     * value: "MIN"
     * @const
     */
    "MIN": "MIN",

    /**
     * value: "MAX"
     * @const
     */
    "MAX": "MAX",

    /**
     * value: "SUM"
     * @const
     */
    "SUM": "SUM",

    /**
     * value: "COUNT"
     * @const
     */
    "COUNT": "COUNT",

    /**
     * value: "PCT_99"
     * @const
     */
    "PCT_99": "PCT_99",

    /**
     * value: "PCT_95"
     * @const
     */
    "PCT_95": "PCT_95",

    /**
     * value: "PCT_90"
     * @const
     */
    "PCT_90": "PCT_90",

    /**
     * value: "PCT_75"
     * @const
     */
    "PCT_75": "PCT_75",

    /**
     * value: "PCT_50"
     * @const
     */
    "PCT_50": "PCT_50",

    /**
     * value: "PCT_15"
     * @const
     */
    "PCT_15": "PCT_15",

    /**
     * value: "PCT_5"
     * @const
     */
    "PCT_5": "PCT_5",

    /**
     * value: "BOOL_OR"
     * @const
     */
    "BOOL_OR": "BOOL_OR",

    /**
     * value: "BOOL_AND"
     * @const
     */
    "BOOL_AND": "BOOL_AND"
};



export default ArduinoSeriesResponse;

