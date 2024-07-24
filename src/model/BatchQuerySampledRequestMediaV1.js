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
 * The BatchQuerySampledRequestMediaV1 model module.
 * @module model/BatchQuerySampledRequestMediaV1
 * @version 2.0.5
 */
class BatchQuerySampledRequestMediaV1 {
    /**
     * Constructs a new <code>BatchQuerySampledRequestMediaV1</code>.
     * @alias module:model/BatchQuerySampledRequestMediaV1
     * @param q {String} Data selection query (e.g. property.2a99729d-2556-4220-a139-023348a1e6b5)
     */
    constructor(q) { 
        
        BatchQuerySampledRequestMediaV1.initialize(this, q);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, q) { 
        obj['q'] = q;
    }

    /**
     * Constructs a <code>BatchQuerySampledRequestMediaV1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BatchQuerySampledRequestMediaV1} obj Optional instance to populate.
     * @return {module:model/BatchQuerySampledRequestMediaV1} The populated <code>BatchQuerySampledRequestMediaV1</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BatchQuerySampledRequestMediaV1();

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
     * Validates the JSON data with respect to <code>BatchQuerySampledRequestMediaV1</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BatchQuerySampledRequestMediaV1</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of BatchQuerySampledRequestMediaV1.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['q'] && !(typeof data['q'] === 'string' || data['q'] instanceof String)) {
            throw new Error("Expected the field `q` to be a primitive type in the JSON string but got " + data['q']);
        }

        return true;
    }


}

BatchQuerySampledRequestMediaV1.RequiredProperties = ["q"];

/**
 * From timestamp (default: now UTC - 24h)
 * @member {Date} from
 */
BatchQuerySampledRequestMediaV1.prototype['from'] = undefined;

/**
 * Resolution in seconds (allowed min:60, max:86400)
 * @member {Number} interval
 * @default 300
 */
BatchQuerySampledRequestMediaV1.prototype['interval'] = 300;

/**
 * Data selection query (e.g. property.2a99729d-2556-4220-a139-023348a1e6b5)
 * @member {String} q
 */
BatchQuerySampledRequestMediaV1.prototype['q'] = undefined;

/**
 * Maximum number of values returned after data aggregation, if any (default: 300, limit: 1000)
 * @member {Number} series_limit
 */
BatchQuerySampledRequestMediaV1.prototype['series_limit'] = undefined;

/**
 * To timestamp (default: now UTC)
 * @member {Date} to
 */
BatchQuerySampledRequestMediaV1.prototype['to'] = undefined;






export default BatchQuerySampledRequestMediaV1;

