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
 * The BatchQueryRawLastValueRequestMediaV1 model module.
 * @module model/BatchQueryRawLastValueRequestMediaV1
 * @version 2.0.1
 */
class BatchQueryRawLastValueRequestMediaV1 {
    /**
     * Constructs a new <code>BatchQueryRawLastValueRequestMediaV1</code>.
     * @alias module:model/BatchQueryRawLastValueRequestMediaV1
     * @param propertyId {String} Property id
     * @param thingId {String} Thing id
     */
    constructor(propertyId, thingId) { 
        
        BatchQueryRawLastValueRequestMediaV1.initialize(this, propertyId, thingId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, propertyId, thingId) { 
        obj['property_id'] = propertyId;
        obj['thing_id'] = thingId;
    }

    /**
     * Constructs a <code>BatchQueryRawLastValueRequestMediaV1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BatchQueryRawLastValueRequestMediaV1} obj Optional instance to populate.
     * @return {module:model/BatchQueryRawLastValueRequestMediaV1} The populated <code>BatchQueryRawLastValueRequestMediaV1</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BatchQueryRawLastValueRequestMediaV1();

            if (data.hasOwnProperty('property_id')) {
                obj['property_id'] = ApiClient.convertToType(data['property_id'], 'String');
            }
            if (data.hasOwnProperty('thing_id')) {
                obj['thing_id'] = ApiClient.convertToType(data['thing_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BatchQueryRawLastValueRequestMediaV1</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BatchQueryRawLastValueRequestMediaV1</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of BatchQueryRawLastValueRequestMediaV1.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['property_id'] && !(typeof data['property_id'] === 'string' || data['property_id'] instanceof String)) {
            throw new Error("Expected the field `property_id` to be a primitive type in the JSON string but got " + data['property_id']);
        }
        // ensure the json data is a string
        if (data['thing_id'] && !(typeof data['thing_id'] === 'string' || data['thing_id'] instanceof String)) {
            throw new Error("Expected the field `thing_id` to be a primitive type in the JSON string but got " + data['thing_id']);
        }

        return true;
    }


}

BatchQueryRawLastValueRequestMediaV1.RequiredProperties = ["property_id", "thing_id"];

/**
 * Property id
 * @member {String} property_id
 */
BatchQueryRawLastValueRequestMediaV1.prototype['property_id'] = undefined;

/**
 * Thing id
 * @member {String} thing_id
 */
BatchQueryRawLastValueRequestMediaV1.prototype['thing_id'] = undefined;






export default BatchQueryRawLastValueRequestMediaV1;

