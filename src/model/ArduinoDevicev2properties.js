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
import ArduinoProperty from './ArduinoProperty';

/**
 * The ArduinoDevicev2properties model module.
 * @module model/ArduinoDevicev2properties
 * @version 2.0.1
 */
class ArduinoDevicev2properties {
    /**
     * Constructs a new <code>ArduinoDevicev2properties</code>.
     * ArduinoDevicev2properties media type (default view)
     * @alias module:model/ArduinoDevicev2properties
     * @param dataRetentionDays {Number} How many days the data will be kept
     * @param deviceId {String} The device of the property
     * @param properties {Array.<module:model/ArduinoProperty>} ArduinoPropertyCollection is the media type for an array of ArduinoProperty (default view)
     * @param userId {String} The user id of the owner
     */
    constructor(dataRetentionDays, deviceId, properties, userId) { 
        
        ArduinoDevicev2properties.initialize(this, dataRetentionDays, deviceId, properties, userId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, dataRetentionDays, deviceId, properties, userId) { 
        obj['data_retention_days'] = dataRetentionDays;
        obj['deviceId'] = deviceId;
        obj['properties'] = properties;
        obj['user_id'] = userId;
    }

    /**
     * Constructs a <code>ArduinoDevicev2properties</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArduinoDevicev2properties} obj Optional instance to populate.
     * @return {module:model/ArduinoDevicev2properties} The populated <code>ArduinoDevicev2properties</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArduinoDevicev2properties();

            if (data.hasOwnProperty('data_retention_days')) {
                obj['data_retention_days'] = ApiClient.convertToType(data['data_retention_days'], 'Number');
            }
            if (data.hasOwnProperty('deviceId')) {
                obj['deviceId'] = ApiClient.convertToType(data['deviceId'], 'String');
            }
            if (data.hasOwnProperty('properties')) {
                obj['properties'] = ApiClient.convertToType(data['properties'], [ArduinoProperty]);
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ArduinoDevicev2properties</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ArduinoDevicev2properties</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ArduinoDevicev2properties.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['deviceId'] && !(typeof data['deviceId'] === 'string' || data['deviceId'] instanceof String)) {
            throw new Error("Expected the field `deviceId` to be a primitive type in the JSON string but got " + data['deviceId']);
        }
        if (data['properties']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['properties'])) {
                throw new Error("Expected the field `properties` to be an array in the JSON data but got " + data['properties']);
            }
            // validate the optional field `properties` (array)
            for (const item of data['properties']) {
                ArduinoProperty.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['user_id'] && !(typeof data['user_id'] === 'string' || data['user_id'] instanceof String)) {
            throw new Error("Expected the field `user_id` to be a primitive type in the JSON string but got " + data['user_id']);
        }

        return true;
    }


}

ArduinoDevicev2properties.RequiredProperties = ["data_retention_days", "deviceId", "properties", "user_id"];

/**
 * How many days the data will be kept
 * @member {Number} data_retention_days
 */
ArduinoDevicev2properties.prototype['data_retention_days'] = undefined;

/**
 * The device of the property
 * @member {String} deviceId
 */
ArduinoDevicev2properties.prototype['deviceId'] = undefined;

/**
 * ArduinoPropertyCollection is the media type for an array of ArduinoProperty (default view)
 * @member {Array.<module:model/ArduinoProperty>} properties
 */
ArduinoDevicev2properties.prototype['properties'] = undefined;

/**
 * The user id of the owner
 * @member {String} user_id
 */
ArduinoDevicev2properties.prototype['user_id'] = undefined;






export default ArduinoDevicev2properties;

