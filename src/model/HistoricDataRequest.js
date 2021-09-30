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
 * The HistoricDataRequest model module.
 * @module model/HistoricDataRequest
 * @version 1.3.8
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


}

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

