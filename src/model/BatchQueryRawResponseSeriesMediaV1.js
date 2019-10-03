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
 * The BatchQueryRawResponseSeriesMediaV1 model module.
 * @module model/BatchQueryRawResponseSeriesMediaV1
 * @version 1.0.0-beta1
 */
class BatchQueryRawResponseSeriesMediaV1 {
    /**
     * Constructs a new <code>BatchQueryRawResponseSeriesMediaV1</code>.
     * @alias module:model/BatchQueryRawResponseSeriesMediaV1
     * @param metric {String} Metric name
     */
    constructor(metric) { 
        
        BatchQueryRawResponseSeriesMediaV1.initialize(this, metric);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, metric) { 
        obj['metric'] = metric;
    }

    /**
     * Constructs a <code>BatchQueryRawResponseSeriesMediaV1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BatchQueryRawResponseSeriesMediaV1} obj Optional instance to populate.
     * @return {module:model/BatchQueryRawResponseSeriesMediaV1} The populated <code>BatchQueryRawResponseSeriesMediaV1</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BatchQueryRawResponseSeriesMediaV1();

            if (data.hasOwnProperty('metric')) {
                obj['metric'] = ApiClient.convertToType(data['metric'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Metric name
 * @member {String} metric
 */
BatchQueryRawResponseSeriesMediaV1.prototype['metric'] = undefined;






export default BatchQueryRawResponseSeriesMediaV1;

