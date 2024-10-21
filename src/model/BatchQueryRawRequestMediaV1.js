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
 * The BatchQueryRawRequestMediaV1 model module.
 * @module model/BatchQueryRawRequestMediaV1
 * @version 2.0.6
 */
class BatchQueryRawRequestMediaV1 {
    /**
     * Constructs a new <code>BatchQueryRawRequestMediaV1</code>.
     * @alias module:model/BatchQueryRawRequestMediaV1
     * @param q {String} Data selection query (e.g. property.2a99729d-2556-4220-a139-023348a1e6b5 or thing.95717675-4786-4ffc-afcc-799777755391)
     */
    constructor(q) { 
        
        BatchQueryRawRequestMediaV1.initialize(this, q);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, q) { 
        obj['q'] = q;
        obj['sort'] = 'DESC';
    }

    /**
     * Constructs a <code>BatchQueryRawRequestMediaV1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BatchQueryRawRequestMediaV1} obj Optional instance to populate.
     * @return {module:model/BatchQueryRawRequestMediaV1} The populated <code>BatchQueryRawRequestMediaV1</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BatchQueryRawRequestMediaV1();

            if (data.hasOwnProperty('from')) {
                obj['from'] = ApiClient.convertToType(data['from'], 'Date');
            }
            if (data.hasOwnProperty('q')) {
                obj['q'] = ApiClient.convertToType(data['q'], 'String');
            }
            if (data.hasOwnProperty('series_limit')) {
                obj['series_limit'] = ApiClient.convertToType(data['series_limit'], 'Number');
            }
            if (data.hasOwnProperty('sort')) {
                obj['sort'] = ApiClient.convertToType(data['sort'], 'String');
            }
            if (data.hasOwnProperty('to')) {
                obj['to'] = ApiClient.convertToType(data['to'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BatchQueryRawRequestMediaV1</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BatchQueryRawRequestMediaV1</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of BatchQueryRawRequestMediaV1.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['q'] && !(typeof data['q'] === 'string' || data['q'] instanceof String)) {
            throw new Error("Expected the field `q` to be a primitive type in the JSON string but got " + data['q']);
        }
        // ensure the json data is a string
        if (data['sort'] && !(typeof data['sort'] === 'string' || data['sort'] instanceof String)) {
            throw new Error("Expected the field `sort` to be a primitive type in the JSON string but got " + data['sort']);
        }

        return true;
    }


}

BatchQueryRawRequestMediaV1.RequiredProperties = ["q"];

/**
 * From timestamp
 * @member {Date} from
 */
BatchQueryRawRequestMediaV1.prototype['from'] = undefined;

/**
 * Data selection query (e.g. property.2a99729d-2556-4220-a139-023348a1e6b5 or thing.95717675-4786-4ffc-afcc-799777755391)
 * @member {String} q
 */
BatchQueryRawRequestMediaV1.prototype['q'] = undefined;

/**
 * Maximum number of values returned, if any (default/limit: 1000, 10000 in case of thing query)
 * @member {Number} series_limit
 */
BatchQueryRawRequestMediaV1.prototype['series_limit'] = undefined;

/**
 * Sorting
 * @member {module:model/BatchQueryRawRequestMediaV1.SortEnum} sort
 * @default 'DESC'
 */
BatchQueryRawRequestMediaV1.prototype['sort'] = 'DESC';

/**
 * To timestamp
 * @member {Date} to
 */
BatchQueryRawRequestMediaV1.prototype['to'] = undefined;





/**
 * Allowed values for the <code>sort</code> property.
 * @enum {String}
 * @readonly
 */
BatchQueryRawRequestMediaV1['SortEnum'] = {

    /**
     * value: "ASC"
     * @const
     */
    "ASC": "ASC",

    /**
     * value: "DESC"
     * @const
     */
    "DESC": "DESC"
};



export default BatchQueryRawRequestMediaV1;

