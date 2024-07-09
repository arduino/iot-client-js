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
import ArduinoDevicev2SimpleProperties from './ArduinoDevicev2SimpleProperties';
import ArduinoDevicev2Webhook from './ArduinoDevicev2Webhook';
import ArduinoThing from './ArduinoThing';

/**
 * The ArduinoDevicev2 model module.
 * @module model/ArduinoDevicev2
 * @version 2.0.4
 */
class ArduinoDevicev2 {
    /**
     * Constructs a new <code>ArduinoDevicev2</code>.
     * ArduinoDevicev2 media type (default view)
     * @alias module:model/ArduinoDevicev2
     * @param href {String} The api reference of this device
     * @param id {String} The arn of the device
     * @param label {String} The label of the device
     * @param name {String} The friendly name of the device
     * @param serial {String} The serial uuid of the device
     * @param type {String} The type of the device
     * @param userId {String} The id of the user
     */
    constructor(href, id, label, name, serial, type, userId) { 
        
        ArduinoDevicev2.initialize(this, href, id, label, name, serial, type, userId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, href, id, label, name, serial, type, userId) { 
        obj['href'] = href;
        obj['id'] = id;
        obj['label'] = label;
        obj['name'] = name;
        obj['serial'] = serial;
        obj['type'] = type;
        obj['user_id'] = userId;
    }

    /**
     * Constructs a <code>ArduinoDevicev2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArduinoDevicev2} obj Optional instance to populate.
     * @return {module:model/ArduinoDevicev2} The populated <code>ArduinoDevicev2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArduinoDevicev2();

            if (data.hasOwnProperty('connection_type')) {
                obj['connection_type'] = ApiClient.convertToType(data['connection_type'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('device_status')) {
                obj['device_status'] = ApiClient.convertToType(data['device_status'], 'String');
            }
            if (data.hasOwnProperty('events')) {
                obj['events'] = ApiClient.convertToType(data['events'], [ArduinoDevicev2SimpleProperties]);
            }
            if (data.hasOwnProperty('fqbn')) {
                obj['fqbn'] = ApiClient.convertToType(data['fqbn'], 'String');
            }
            if (data.hasOwnProperty('href')) {
                obj['href'] = ApiClient.convertToType(data['href'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
            if (data.hasOwnProperty('last_activity_at')) {
                obj['last_activity_at'] = ApiClient.convertToType(data['last_activity_at'], 'Date');
            }
            if (data.hasOwnProperty('latest_wifi_fw_version')) {
                obj['latest_wifi_fw_version'] = ApiClient.convertToType(data['latest_wifi_fw_version'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], {'String': Object});
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('no_sketch')) {
                obj['no_sketch'] = ApiClient.convertToType(data['no_sketch'], 'Boolean');
            }
            if (data.hasOwnProperty('organization_id')) {
                obj['organization_id'] = ApiClient.convertToType(data['organization_id'], 'String');
            }
            if (data.hasOwnProperty('ota_available')) {
                obj['ota_available'] = ApiClient.convertToType(data['ota_available'], 'Boolean');
            }
            if (data.hasOwnProperty('ota_compatible')) {
                obj['ota_compatible'] = ApiClient.convertToType(data['ota_compatible'], 'Boolean');
            }
            if (data.hasOwnProperty('required_wifi_fw_version')) {
                obj['required_wifi_fw_version'] = ApiClient.convertToType(data['required_wifi_fw_version'], 'String');
            }
            if (data.hasOwnProperty('serial')) {
                obj['serial'] = ApiClient.convertToType(data['serial'], 'String');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], {'String': Object});
            }
            if (data.hasOwnProperty('thing')) {
                obj['thing'] = ArduinoThing.constructFromObject(data['thing']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'String');
            }
            if (data.hasOwnProperty('webhooks')) {
                obj['webhooks'] = ApiClient.convertToType(data['webhooks'], [ArduinoDevicev2Webhook]);
            }
            if (data.hasOwnProperty('wifi_fw_version')) {
                obj['wifi_fw_version'] = ApiClient.convertToType(data['wifi_fw_version'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ArduinoDevicev2</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ArduinoDevicev2</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ArduinoDevicev2.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['connection_type'] && !(typeof data['connection_type'] === 'string' || data['connection_type'] instanceof String)) {
            throw new Error("Expected the field `connection_type` to be a primitive type in the JSON string but got " + data['connection_type']);
        }
        // ensure the json data is a string
        if (data['device_status'] && !(typeof data['device_status'] === 'string' || data['device_status'] instanceof String)) {
            throw new Error("Expected the field `device_status` to be a primitive type in the JSON string but got " + data['device_status']);
        }
        if (data['events']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['events'])) {
                throw new Error("Expected the field `events` to be an array in the JSON data but got " + data['events']);
            }
            // validate the optional field `events` (array)
            for (const item of data['events']) {
                ArduinoDevicev2SimpleProperties.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['fqbn'] && !(typeof data['fqbn'] === 'string' || data['fqbn'] instanceof String)) {
            throw new Error("Expected the field `fqbn` to be a primitive type in the JSON string but got " + data['fqbn']);
        }
        // ensure the json data is a string
        if (data['href'] && !(typeof data['href'] === 'string' || data['href'] instanceof String)) {
            throw new Error("Expected the field `href` to be a primitive type in the JSON string but got " + data['href']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['label'] && !(typeof data['label'] === 'string' || data['label'] instanceof String)) {
            throw new Error("Expected the field `label` to be a primitive type in the JSON string but got " + data['label']);
        }
        // ensure the json data is a string
        if (data['latest_wifi_fw_version'] && !(typeof data['latest_wifi_fw_version'] === 'string' || data['latest_wifi_fw_version'] instanceof String)) {
            throw new Error("Expected the field `latest_wifi_fw_version` to be a primitive type in the JSON string but got " + data['latest_wifi_fw_version']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['organization_id'] && !(typeof data['organization_id'] === 'string' || data['organization_id'] instanceof String)) {
            throw new Error("Expected the field `organization_id` to be a primitive type in the JSON string but got " + data['organization_id']);
        }
        // ensure the json data is a string
        if (data['required_wifi_fw_version'] && !(typeof data['required_wifi_fw_version'] === 'string' || data['required_wifi_fw_version'] instanceof String)) {
            throw new Error("Expected the field `required_wifi_fw_version` to be a primitive type in the JSON string but got " + data['required_wifi_fw_version']);
        }
        // ensure the json data is a string
        if (data['serial'] && !(typeof data['serial'] === 'string' || data['serial'] instanceof String)) {
            throw new Error("Expected the field `serial` to be a primitive type in the JSON string but got " + data['serial']);
        }
        // validate the optional field `thing`
        if (data['thing']) { // data not null
          ArduinoThing.validateJSON(data['thing']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['user_id'] && !(typeof data['user_id'] === 'string' || data['user_id'] instanceof String)) {
            throw new Error("Expected the field `user_id` to be a primitive type in the JSON string but got " + data['user_id']);
        }
        if (data['webhooks']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['webhooks'])) {
                throw new Error("Expected the field `webhooks` to be an array in the JSON data but got " + data['webhooks']);
            }
            // validate the optional field `webhooks` (array)
            for (const item of data['webhooks']) {
                ArduinoDevicev2Webhook.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['wifi_fw_version'] && !(typeof data['wifi_fw_version'] === 'string' || data['wifi_fw_version'] instanceof String)) {
            throw new Error("Expected the field `wifi_fw_version` to be a primitive type in the JSON string but got " + data['wifi_fw_version']);
        }

        return true;
    }


}

ArduinoDevicev2.RequiredProperties = ["href", "id", "label", "name", "serial", "type", "user_id"];

/**
 * The type of the connections selected by the user when multiple connections are available
 * @member {module:model/ArduinoDevicev2.ConnectionTypeEnum} connection_type
 */
ArduinoDevicev2.prototype['connection_type'] = undefined;

/**
 * Creation date of the device
 * @member {Date} created_at
 */
ArduinoDevicev2.prototype['created_at'] = undefined;

/**
 * The connection status of the device
 * @member {module:model/ArduinoDevicev2.DeviceStatusEnum} device_status
 */
ArduinoDevicev2.prototype['device_status'] = undefined;

/**
 * ArduinoDevicev2SimplePropertiesCollection is the media type for an array of ArduinoDevicev2SimpleProperties (default view)
 * @member {Array.<module:model/ArduinoDevicev2SimpleProperties>} events
 */
ArduinoDevicev2.prototype['events'] = undefined;

/**
 * The fully qualified board name
 * @member {String} fqbn
 */
ArduinoDevicev2.prototype['fqbn'] = undefined;

/**
 * The api reference of this device
 * @member {String} href
 */
ArduinoDevicev2.prototype['href'] = undefined;

/**
 * The arn of the device
 * @member {String} id
 */
ArduinoDevicev2.prototype['id'] = undefined;

/**
 * The label of the device
 * @member {String} label
 */
ArduinoDevicev2.prototype['label'] = undefined;

/**
 * Last activity date
 * @member {Date} last_activity_at
 */
ArduinoDevicev2.prototype['last_activity_at'] = undefined;

/**
 * The latest version of the NINA/WIFI101 firmware available for this device
 * @member {String} latest_wifi_fw_version
 */
ArduinoDevicev2.prototype['latest_wifi_fw_version'] = undefined;

/**
 * The metadata of the device
 * @member {Object.<String, Object>} metadata
 */
ArduinoDevicev2.prototype['metadata'] = undefined;

/**
 * The friendly name of the device
 * @member {String} name
 */
ArduinoDevicev2.prototype['name'] = undefined;

/**
 * True if the device type can not have an associated sketch
 * @member {Boolean} no_sketch
 */
ArduinoDevicev2.prototype['no_sketch'] = undefined;

/**
 * Id of the organization the device belongs to
 * @member {String} organization_id
 */
ArduinoDevicev2.prototype['organization_id'] = undefined;

/**
 * True if the device type is ready to receive OTA updated
 * @member {Boolean} ota_available
 */
ArduinoDevicev2.prototype['ota_available'] = undefined;

/**
 * True if the device type is OTA compatible
 * @member {Boolean} ota_compatible
 */
ArduinoDevicev2.prototype['ota_compatible'] = undefined;

/**
 * The required version of the NINA/WIFI101 firmware needed by IoT Cloud
 * @member {String} required_wifi_fw_version
 */
ArduinoDevicev2.prototype['required_wifi_fw_version'] = undefined;

/**
 * The serial uuid of the device
 * @member {String} serial
 */
ArduinoDevicev2.prototype['serial'] = undefined;

/**
 * Tags belonging to the device
 * @member {Object.<String, Object>} tags
 */
ArduinoDevicev2.prototype['tags'] = undefined;

/**
 * @member {module:model/ArduinoThing} thing
 */
ArduinoDevicev2.prototype['thing'] = undefined;

/**
 * The type of the device
 * @member {String} type
 */
ArduinoDevicev2.prototype['type'] = undefined;

/**
 * The id of the user
 * @member {String} user_id
 */
ArduinoDevicev2.prototype['user_id'] = undefined;

/**
 * ArduinoDevicev2WebhookCollection is the media type for an array of ArduinoDevicev2Webhook (default view)
 * @member {Array.<module:model/ArduinoDevicev2Webhook>} webhooks
 */
ArduinoDevicev2.prototype['webhooks'] = undefined;

/**
 * The version of the NINA/WIFI101 firmware running on the device
 * @member {String} wifi_fw_version
 */
ArduinoDevicev2.prototype['wifi_fw_version'] = undefined;





/**
 * Allowed values for the <code>connection_type</code> property.
 * @enum {String}
 * @readonly
 */
ArduinoDevicev2['ConnectionTypeEnum'] = {

    /**
     * value: "wifi"
     * @const
     */
    "wifi": "wifi",

    /**
     * value: "eth"
     * @const
     */
    "eth": "eth",

    /**
     * value: "wifiandsecret"
     * @const
     */
    "wifiandsecret": "wifiandsecret",

    /**
     * value: "gsm"
     * @const
     */
    "gsm": "gsm",

    /**
     * value: "nb"
     * @const
     */
    "nb": "nb",

    /**
     * value: "lora"
     * @const
     */
    "lora": "lora",

    /**
     * value: "catm1"
     * @const
     */
    "catm1": "catm1",

    /**
     * value: "cellular"
     * @const
     */
    "cellular": "cellular"
};


/**
 * Allowed values for the <code>device_status</code> property.
 * @enum {String}
 * @readonly
 */
ArduinoDevicev2['DeviceStatusEnum'] = {

    /**
     * value: "ONLINE"
     * @const
     */
    "ONLINE": "ONLINE",

    /**
     * value: "OFFLINE"
     * @const
     */
    "OFFLINE": "OFFLINE",

    /**
     * value: "UNKNOWN"
     * @const
     */
    "UNKNOWN": "UNKNOWN"
};



export default ArduinoDevicev2;

