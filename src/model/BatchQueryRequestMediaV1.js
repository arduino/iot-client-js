/**
 * Iot API
 * Collection of all public API endpoints.
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
 * @version 1.0.0
 */
class BatchQueryRequestMediaV1 {
    /**
     * Constructs a new <code>BatchQueryRequestMediaV1</code>.
     * @alias module:model/BatchQueryRequestMediaV1
     * @param from {Date} From timestamp
     * @param q {String} Query
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


}

/**
 * From timestamp
 * @member {Date} from
 */
BatchQueryRequestMediaV1.prototype['from'] = undefined;

/**
 * Resolution in seconds
 * @member {Number} interval
 */
BatchQueryRequestMediaV1.prototype['interval'] = undefined;

/**
 * Query
 * @member {String} q
 */
BatchQueryRequestMediaV1.prototype['q'] = undefined;

/**
 * Max of values
 * @member {Number} series_limit
 */
BatchQueryRequestMediaV1.prototype['series_limit'] = undefined;

/**
 * To timestamp
 * @member {Date} to
 */
BatchQueryRequestMediaV1.prototype['to'] = undefined;






export default BatchQueryRequestMediaV1;

