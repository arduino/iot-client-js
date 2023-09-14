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
 * The ArduinoProperty model module.
 * @module model/ArduinoProperty
 * @version 1.4.5
 */
class ArduinoProperty {
    /**
     * Constructs a new <code>ArduinoProperty</code>.
     * ArduinoProperty media type (default view)
     * @alias module:model/ArduinoProperty
     * @param href {String} The api reference of this property
     * @param id {String} The id of the property
     * @param name {String} The friendly name of the property
     * @param permission {String} The permission of the property
     * @param thingId {String} The id of the thing
     * @param type {String} The type of the property
     * @param updateStrategy {String} The update strategy for the property value
     */
    constructor(href, id, name, permission, thingId, type, updateStrategy) { 
        
        ArduinoProperty.initialize(this, href, id, name, permission, thingId, type, updateStrategy);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, href, id, name, permission, thingId, type, updateStrategy) { 
        obj['href'] = href;
        obj['id'] = id;
        obj['name'] = name;
        obj['permission'] = permission;
        obj['thing_id'] = thingId;
        obj['type'] = type;
        obj['update_strategy'] = updateStrategy;
    }

    /**
     * Constructs a <code>ArduinoProperty</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArduinoProperty} obj Optional instance to populate.
     * @return {module:model/ArduinoProperty} The populated <code>ArduinoProperty</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArduinoProperty();

            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('deleted_at')) {
                obj['deleted_at'] = ApiClient.convertToType(data['deleted_at'], 'Date');
            }
            if (data.hasOwnProperty('href')) {
                obj['href'] = ApiClient.convertToType(data['href'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('last_value')) {
                obj['last_value'] = ApiClient.convertToType(data['last_value'], Object);
            }
            if (data.hasOwnProperty('max_value')) {
                obj['max_value'] = ApiClient.convertToType(data['max_value'], 'Number');
            }
            if (data.hasOwnProperty('min_value')) {
                obj['min_value'] = ApiClient.convertToType(data['min_value'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('permission')) {
                obj['permission'] = ApiClient.convertToType(data['permission'], 'String');
            }
            if (data.hasOwnProperty('persist')) {
                obj['persist'] = ApiClient.convertToType(data['persist'], 'Boolean');
            }
            if (data.hasOwnProperty('sync_id')) {
                obj['sync_id'] = ApiClient.convertToType(data['sync_id'], 'String');
            }
            if (data.hasOwnProperty('tag')) {
                obj['tag'] = ApiClient.convertToType(data['tag'], 'Number');
            }
            if (data.hasOwnProperty('thing_id')) {
                obj['thing_id'] = ApiClient.convertToType(data['thing_id'], 'String');
            }
            if (data.hasOwnProperty('thing_name')) {
                obj['thing_name'] = ApiClient.convertToType(data['thing_name'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('update_parameter')) {
                obj['update_parameter'] = ApiClient.convertToType(data['update_parameter'], 'Number');
            }
            if (data.hasOwnProperty('update_strategy')) {
                obj['update_strategy'] = ApiClient.convertToType(data['update_strategy'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('value_updated_at')) {
                obj['value_updated_at'] = ApiClient.convertToType(data['value_updated_at'], 'Date');
            }
            if (data.hasOwnProperty('variable_name')) {
                obj['variable_name'] = ApiClient.convertToType(data['variable_name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Creation date of the property
 * @member {Date} created_at
 */
ArduinoProperty.prototype['created_at'] = undefined;

/**
 * Delete date of the property
 * @member {Date} deleted_at
 */
ArduinoProperty.prototype['deleted_at'] = undefined;

/**
 * The api reference of this property
 * @member {String} href
 */
ArduinoProperty.prototype['href'] = undefined;

/**
 * The id of the property
 * @member {String} id
 */
ArduinoProperty.prototype['id'] = undefined;

/**
 * Last value of this property
 * @member {Object} last_value
 */
ArduinoProperty.prototype['last_value'] = undefined;

/**
 * Maximum value of this property
 * @member {Number} max_value
 */
ArduinoProperty.prototype['max_value'] = undefined;

/**
 * Minimum value of this property
 * @member {Number} min_value
 */
ArduinoProperty.prototype['min_value'] = undefined;

/**
 * The friendly name of the property
 * @member {String} name
 */
ArduinoProperty.prototype['name'] = undefined;

/**
 * The permission of the property
 * @member {String} permission
 */
ArduinoProperty.prototype['permission'] = undefined;

/**
 * If true, data will persist into a timeseries database
 * @member {Boolean} persist
 */
ArduinoProperty.prototype['persist'] = undefined;

/**
 * The id of the sync pool
 * @member {String} sync_id
 */
ArduinoProperty.prototype['sync_id'] = undefined;

/**
 * The integer id of the property
 * @member {Number} tag
 */
ArduinoProperty.prototype['tag'] = undefined;

/**
 * The id of the thing
 * @member {String} thing_id
 */
ArduinoProperty.prototype['thing_id'] = undefined;

/**
 * The name of the associated thing
 * @member {String} thing_name
 */
ArduinoProperty.prototype['thing_name'] = undefined;

/**
 * The type of the property
 * @member {String} type
 */
ArduinoProperty.prototype['type'] = undefined;

/**
 * The update frequency in seconds, or the amount of the property has to change in order to trigger an update
 * @member {Number} update_parameter
 */
ArduinoProperty.prototype['update_parameter'] = undefined;

/**
 * The update strategy for the property value
 * @member {String} update_strategy
 */
ArduinoProperty.prototype['update_strategy'] = undefined;

/**
 * Update date of the property
 * @member {Date} updated_at
 */
ArduinoProperty.prototype['updated_at'] = undefined;

/**
 * Last update timestamp of this property
 * @member {Date} value_updated_at
 */
ArduinoProperty.prototype['value_updated_at'] = undefined;

/**
 * The sketch variable name of the property
 * @member {String} variable_name
 */
ArduinoProperty.prototype['variable_name'] = undefined;






export default ArduinoProperty;

