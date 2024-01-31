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
 * The BatchQueryRawResponseSeriesMediaV1 model module.
 * @module model/BatchQueryRawResponseSeriesMediaV1
 * @version 2.0.1
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

    /**
     * Validates the JSON data with respect to <code>BatchQueryRawResponseSeriesMediaV1</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BatchQueryRawResponseSeriesMediaV1</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of BatchQueryRawResponseSeriesMediaV1.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['metric'] && !(typeof data['metric'] === 'string' || data['metric'] instanceof String)) {
            throw new Error("Expected the field `metric` to be a primitive type in the JSON string but got " + data['metric']);
        }

        return true;
    }


}

BatchQueryRawResponseSeriesMediaV1.RequiredProperties = ["metric"];

/**
 * Metric name
 * @member {String} metric
 */
BatchQueryRawResponseSeriesMediaV1.prototype['metric'] = undefined;






export default BatchQueryRawResponseSeriesMediaV1;

