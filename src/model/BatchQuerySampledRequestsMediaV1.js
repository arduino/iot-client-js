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
import BatchQuerySampledRequestMediaV1 from './BatchQuerySampledRequestMediaV1';

/**
 * The BatchQuerySampledRequestsMediaV1 model module.
 * @module model/BatchQuerySampledRequestsMediaV1
 * @version 2.0.6
 */
class BatchQuerySampledRequestsMediaV1 {
    /**
     * Constructs a new <code>BatchQuerySampledRequestsMediaV1</code>.
     * @alias module:model/BatchQuerySampledRequestsMediaV1
     * @param requests {Array.<module:model/BatchQuerySampledRequestMediaV1>} Requests
     * @param respVersion {Number} Response version
     */
    constructor(requests, respVersion) { 
        
        BatchQuerySampledRequestsMediaV1.initialize(this, requests, respVersion);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, requests, respVersion) { 
        obj['requests'] = requests;
        obj['resp_version'] = respVersion;
    }

    /**
     * Constructs a <code>BatchQuerySampledRequestsMediaV1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BatchQuerySampledRequestsMediaV1} obj Optional instance to populate.
     * @return {module:model/BatchQuerySampledRequestsMediaV1} The populated <code>BatchQuerySampledRequestsMediaV1</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BatchQuerySampledRequestsMediaV1();

            if (data.hasOwnProperty('requests')) {
                obj['requests'] = ApiClient.convertToType(data['requests'], [BatchQuerySampledRequestMediaV1]);
            }
            if (data.hasOwnProperty('resp_version')) {
                obj['resp_version'] = ApiClient.convertToType(data['resp_version'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BatchQuerySampledRequestsMediaV1</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BatchQuerySampledRequestsMediaV1</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of BatchQuerySampledRequestsMediaV1.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['requests']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['requests'])) {
                throw new Error("Expected the field `requests` to be an array in the JSON data but got " + data['requests']);
            }
            // validate the optional field `requests` (array)
            for (const item of data['requests']) {
                BatchQuerySampledRequestMediaV1.validateJSON(item);
            };
        }

        return true;
    }


}

BatchQuerySampledRequestsMediaV1.RequiredProperties = ["requests", "resp_version"];

/**
 * Requests
 * @member {Array.<module:model/BatchQuerySampledRequestMediaV1>} requests
 */
BatchQuerySampledRequestsMediaV1.prototype['requests'] = undefined;

/**
 * Response version
 * @member {Number} resp_version
 */
BatchQuerySampledRequestsMediaV1.prototype['resp_version'] = undefined;






export default BatchQuerySampledRequestsMediaV1;

