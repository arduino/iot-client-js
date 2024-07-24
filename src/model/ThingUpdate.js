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
import Property from './Property';

/**
 * The ThingUpdate model module.
 * @module model/ThingUpdate
 * @version 2.0.5
 */
class ThingUpdate {
    /**
     * Constructs a new <code>ThingUpdate</code>.
     * Payload to update an existing thing
     * @alias module:model/ThingUpdate
     */
    constructor() { 
        
        ThingUpdate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ThingUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ThingUpdate} obj Optional instance to populate.
     * @return {module:model/ThingUpdate} The populated <code>ThingUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ThingUpdate();

            if (data.hasOwnProperty('assistant')) {
                obj['assistant'] = ApiClient.convertToType(data['assistant'], 'String');
            }
            if (data.hasOwnProperty('device_id')) {
                obj['device_id'] = ApiClient.convertToType(data['device_id'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('properties')) {
                obj['properties'] = ApiClient.convertToType(data['properties'], [Property]);
            }
            if (data.hasOwnProperty('timezone')) {
                obj['timezone'] = ApiClient.convertToType(data['timezone'], 'String');
            }
            if (data.hasOwnProperty('webhook_active')) {
                obj['webhook_active'] = ApiClient.convertToType(data['webhook_active'], 'Boolean');
            }
            if (data.hasOwnProperty('webhook_uri')) {
                obj['webhook_uri'] = ApiClient.convertToType(data['webhook_uri'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ThingUpdate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ThingUpdate</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['assistant'] && !(typeof data['assistant'] === 'string' || data['assistant'] instanceof String)) {
            throw new Error("Expected the field `assistant` to be a primitive type in the JSON string but got " + data['assistant']);
        }
        // ensure the json data is a string
        if (data['device_id'] && !(typeof data['device_id'] === 'string' || data['device_id'] instanceof String)) {
            throw new Error("Expected the field `device_id` to be a primitive type in the JSON string but got " + data['device_id']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        if (data['properties']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['properties'])) {
                throw new Error("Expected the field `properties` to be an array in the JSON data but got " + data['properties']);
            }
            // validate the optional field `properties` (array)
            for (const item of data['properties']) {
                Property.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['timezone'] && !(typeof data['timezone'] === 'string' || data['timezone'] instanceof String)) {
            throw new Error("Expected the field `timezone` to be a primitive type in the JSON string but got " + data['timezone']);
        }
        // ensure the json data is a string
        if (data['webhook_uri'] && !(typeof data['webhook_uri'] === 'string' || data['webhook_uri'] instanceof String)) {
            throw new Error("Expected the field `webhook_uri` to be a primitive type in the JSON string but got " + data['webhook_uri']);
        }

        return true;
    }


}



/**
 * The kind of voice assistant the thing is connected to, it can be ALEXA | GOOGLE | NONE
 * @member {module:model/ThingUpdate.AssistantEnum} assistant
 */
ThingUpdate.prototype['assistant'] = undefined;

/**
 * The arn of the associated device
 * @member {String} device_id
 */
ThingUpdate.prototype['device_id'] = undefined;

/**
 * The id of the thing
 * @member {String} id
 */
ThingUpdate.prototype['id'] = undefined;

/**
 * The friendly name of the thing
 * @member {String} name
 */
ThingUpdate.prototype['name'] = undefined;

/**
 * The properties of the thing
 * @member {Array.<module:model/Property>} properties
 */
ThingUpdate.prototype['properties'] = undefined;

/**
 * A time zone name. Check /v2/timezones for a list of valid names.
 * @member {String} timezone
 */
ThingUpdate.prototype['timezone'] = undefined;

/**
 * Webhook uri
 * @member {Boolean} webhook_active
 */
ThingUpdate.prototype['webhook_active'] = undefined;

/**
 * Webhook uri
 * @member {String} webhook_uri
 */
ThingUpdate.prototype['webhook_uri'] = undefined;





/**
 * Allowed values for the <code>assistant</code> property.
 * @enum {String}
 * @readonly
 */
ThingUpdate['AssistantEnum'] = {

    /**
     * value: "ALEXA"
     * @const
     */
    "ALEXA": "ALEXA",

    /**
     * value: "GOOGLE"
     * @const
     */
    "GOOGLE": "GOOGLE",

    /**
     * value: "NONE"
     * @const
     */
    "NONE": "NONE"
};



export default ThingUpdate;

