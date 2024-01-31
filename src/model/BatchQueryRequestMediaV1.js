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
 * The BatchQueryRequestMediaV1 model module.
 * @module model/BatchQueryRequestMediaV1
 * @version 2.0.1
 */
class BatchQueryRequestMediaV1 {
    /**
     * Constructs a new <code>BatchQueryRequestMediaV1</code>.
     * @alias module:model/BatchQueryRequestMediaV1
     * @param from {Date} From timestamp
     * @param q {String} Data selection query (e.g. property.2a99729d-2556-4220-a139-023348a1e6b5)
     * @param to {Date} To timestamp
     */
    constructor(from, q, to) { 
        
        BatchQueryRequestMediaV1.initialize(this, from, q, to);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, from, q, to) { 
        obj['from'] = from;
        obj['q'] = q;
        obj['to'] = to;
    }

    /**
     * Constructs a <code>BatchQueryRequestMediaV1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BatchQueryRequestMediaV1} obj Optional instance to populate.
     * @return {module:model/BatchQueryRequestMediaV1} The populated <code>BatchQueryRequestMediaV1</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BatchQueryRequestMediaV1();

            if (data.hasOwnProperty('aggregation')) {
                obj['aggregation'] = ApiClient.convertToType(data['aggregation'], 'String');
            }
            if (data.hasOwnProperty('from')) {
                obj['from'] = ApiClient.convertToType(data['from'], 'Date');
            }
            if (data.hasOwnProperty('interval')) {
                obj['interval'] = ApiClient.convertToType(data['interval'], 'Number');
            }
            if (data.hasOwnProperty('q')) {
                obj['q'] = ApiClient.convertToType(data['q'], 'String');
            }
            if (data.hasOwnProperty('series_limit')) {
                obj['series_limit'] = ApiClient.convertToType(data['series_limit'], 'Number');
            }
            if (data.hasOwnProperty('to')) {
                obj['to'] = ApiClient.convertToType(data['to'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BatchQueryRequestMediaV1</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BatchQueryRequestMediaV1</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of BatchQueryRequestMediaV1.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['aggregation'] && !(typeof data['aggregation'] === 'string' || data['aggregation'] instanceof String)) {
            throw new Error("Expected the field `aggregation` to be a primitive type in the JSON string but got " + data['aggregation']);
        }
        // ensure the json data is a string
        if (data['q'] && !(typeof data['q'] === 'string' || data['q'] instanceof String)) {
            throw new Error("Expected the field `q` to be a primitive type in the JSON string but got " + data['q']);
        }

        return true;
    }


}

BatchQueryRequestMediaV1.RequiredProperties = ["from", "q", "to"];

/**
 * Aggregation statistic function. For numeric values, AVG statistic is used by default. PCT_X compute the Xth approximate percentile (e.g. PCT_95 is the 95th approximate percentile). For boolean, BOOL_OR statistic is used as default.
 * @member {module:model/BatchQueryRequestMediaV1.AggregationEnum} aggregation
 */
BatchQueryRequestMediaV1.prototype['aggregation'] = undefined;

/**
 * From timestamp
 * @member {Date} from
 */
BatchQueryRequestMediaV1.prototype['from'] = undefined;

/**
 * Resolution in seconds (max allowed: 86400)
 * @member {Number} interval
 */
BatchQueryRequestMediaV1.prototype['interval'] = undefined;

/**
 * Data selection query (e.g. property.2a99729d-2556-4220-a139-023348a1e6b5)
 * @member {String} q
 */
BatchQueryRequestMediaV1.prototype['q'] = undefined;

/**
 * Maximum number of values returned after data aggregation, if any (default: 300, limit: 1000)
 * @member {Number} series_limit
 */
BatchQueryRequestMediaV1.prototype['series_limit'] = undefined;

/**
 * To timestamp
 * @member {Date} to
 */
BatchQueryRequestMediaV1.prototype['to'] = undefined;





/**
 * Allowed values for the <code>aggregation</code> property.
 * @enum {String}
 * @readonly
 */
BatchQueryRequestMediaV1['AggregationEnum'] = {

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



export default BatchQueryRequestMediaV1;

