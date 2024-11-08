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
 * The HistoricDataRequest model module.
 * @module model/HistoricDataRequest
 * @version 3.0.0
 */
class HistoricDataRequest {
    /**
     * Constructs a new <code>HistoricDataRequest</code>.
     * @alias module:model/HistoricDataRequest
     * @param from {Date} Get data starting from this date
     * @param properties {Array.<String>} IDs of properties
     * @param to {Date} Get data up to this date
     */
    constructor(from, properties, to) { 
        
        HistoricDataRequest.initialize(this, from, properties, to);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, from, properties, to) { 
        obj['from'] = from;
        obj['properties'] = properties;
        obj['to'] = to;
    }

    /**
     * Constructs a <code>HistoricDataRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HistoricDataRequest} obj Optional instance to populate.
     * @return {module:model/HistoricDataRequest} The populated <code>HistoricDataRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HistoricDataRequest();

            if (data.hasOwnProperty('from')) {
                obj['from'] = ApiClient.convertToType(data['from'], 'Date');
            }
            if (data.hasOwnProperty('properties')) {
                obj['properties'] = ApiClient.convertToType(data['properties'], ['String']);
            }
            if (data.hasOwnProperty('to')) {
                obj['to'] = ApiClient.convertToType(data['to'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>HistoricDataRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>HistoricDataRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of HistoricDataRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['properties'])) {
            throw new Error("Expected the field `properties` to be an array in the JSON data but got " + data['properties']);
        }

        return true;
    }


}

HistoricDataRequest.RequiredProperties = ["from", "properties", "to"];

/**
 * Get data starting from this date
 * @member {Date} from
 */
HistoricDataRequest.prototype['from'] = undefined;

/**
 * IDs of properties
 * @member {Array.<String>} properties
 */
HistoricDataRequest.prototype['properties'] = undefined;

/**
 * Get data up to this date
 * @member {Date} to
 */
HistoricDataRequest.prototype['to'] = undefined;






export default HistoricDataRequest;

