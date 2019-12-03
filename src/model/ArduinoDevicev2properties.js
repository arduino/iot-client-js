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
import ArduinoProperty from './ArduinoProperty';

/**
 * The ArduinoDevicev2properties model module.
 * @module model/ArduinoDevicev2properties
 * @version 1.1.0
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


}

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

