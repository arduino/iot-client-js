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
 * The CreateDevicesV2Payload model module.
 * @module model/CreateDevicesV2Payload
 * @version 3.0.0
 */
class CreateDevicesV2Payload {
    /**
     * Constructs a new <code>CreateDevicesV2Payload</code>.
     * DeviceV2 describes a device.
     * @alias module:model/CreateDevicesV2Payload
     * @param type {module:model/CreateDevicesV2Payload.TypeEnum} The type of the device
     */
    constructor(type) { 
        
        CreateDevicesV2Payload.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
        obj['soft_deleted'] = false;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>CreateDevicesV2Payload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateDevicesV2Payload} obj Optional instance to populate.
     * @return {module:model/CreateDevicesV2Payload} The populated <code>CreateDevicesV2Payload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateDevicesV2Payload();

            if (data.hasOwnProperty('connection_type')) {
                obj['connection_type'] = ApiClient.convertToType(data['connection_type'], 'String');
            }
            if (data.hasOwnProperty('fqbn')) {
                obj['fqbn'] = ApiClient.convertToType(data['fqbn'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('serial')) {
                obj['serial'] = ApiClient.convertToType(data['serial'], 'String');
            }
            if (data.hasOwnProperty('soft_deleted')) {
                obj['soft_deleted'] = ApiClient.convertToType(data['soft_deleted'], 'Boolean');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'String');
            }
            if (data.hasOwnProperty('wifi_fw_version')) {
                obj['wifi_fw_version'] = ApiClient.convertToType(data['wifi_fw_version'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateDevicesV2Payload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateDevicesV2Payload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateDevicesV2Payload.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['connection_type'] && !(typeof data['connection_type'] === 'string' || data['connection_type'] instanceof String)) {
            throw new Error("Expected the field `connection_type` to be a primitive type in the JSON string but got " + data['connection_type']);
        }
        // ensure the json data is a string
        if (data['fqbn'] && !(typeof data['fqbn'] === 'string' || data['fqbn'] instanceof String)) {
            throw new Error("Expected the field `fqbn` to be a primitive type in the JSON string but got " + data['fqbn']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['serial'] && !(typeof data['serial'] === 'string' || data['serial'] instanceof String)) {
            throw new Error("Expected the field `serial` to be a primitive type in the JSON string but got " + data['serial']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['user_id'] && !(typeof data['user_id'] === 'string' || data['user_id'] instanceof String)) {
            throw new Error("Expected the field `user_id` to be a primitive type in the JSON string but got " + data['user_id']);
        }
        // ensure the json data is a string
        if (data['wifi_fw_version'] && !(typeof data['wifi_fw_version'] === 'string' || data['wifi_fw_version'] instanceof String)) {
            throw new Error("Expected the field `wifi_fw_version` to be a primitive type in the JSON string but got " + data['wifi_fw_version']);
        }

        return true;
    }


}

CreateDevicesV2Payload.RequiredProperties = ["type"];

/**
 * The type of the connections selected by the user when multiple connections are available
 * @member {module:model/CreateDevicesV2Payload.ConnectionTypeEnum} connection_type
 */
CreateDevicesV2Payload.prototype['connection_type'] = undefined;

/**
 * The fully qualified board name
 * @member {String} fqbn
 */
CreateDevicesV2Payload.prototype['fqbn'] = undefined;

/**
 * The friendly name of the device
 * @member {String} name
 */
CreateDevicesV2Payload.prototype['name'] = undefined;

/**
 * The serial uuid of the device
 * @member {String} serial
 */
CreateDevicesV2Payload.prototype['serial'] = undefined;

/**
 * If false, restore the thing from the soft deletion
 * @member {Boolean} soft_deleted
 * @default false
 */
CreateDevicesV2Payload.prototype['soft_deleted'] = false;

/**
 * The type of the device
 * @member {module:model/CreateDevicesV2Payload.TypeEnum} type
 */
CreateDevicesV2Payload.prototype['type'] = undefined;

/**
 * The user_id associated to the device. If absent it will be inferred from the authentication header
 * @member {String} user_id
 */
CreateDevicesV2Payload.prototype['user_id'] = undefined;

/**
 * The version of the NINA/WIFI101 firmware running on the device
 * @member {String} wifi_fw_version
 */
CreateDevicesV2Payload.prototype['wifi_fw_version'] = undefined;





/**
 * Allowed values for the <code>connection_type</code> property.
 * @enum {String}
 * @readonly
 */
CreateDevicesV2Payload['ConnectionTypeEnum'] = {

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
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
CreateDevicesV2Payload['TypeEnum'] = {

    /**
     * value: "mkrwifi1010"
     * @const
     */
    "mkrwifi1010": "mkrwifi1010",

    /**
     * value: "mkr1000"
     * @const
     */
    "mkr1000": "mkr1000",

    /**
     * value: "nano_33_iot"
     * @const
     */
    "nano_33_iot": "nano_33_iot",

    /**
     * value: "mkrgsm1400"
     * @const
     */
    "mkrgsm1400": "mkrgsm1400",

    /**
     * value: "mkrnb1500"
     * @const
     */
    "mkrnb1500": "mkrnb1500",

    /**
     * value: "login_and_secretkey_wifi"
     * @const
     */
    "login_and_secretkey_wifi": "login_and_secretkey_wifi",

    /**
     * value: "envie_m7"
     * @const
     */
    "envie_m7": "envie_m7",

    /**
     * value: "nanorp2040connect"
     * @const
     */
    "nanorp2040connect": "nanorp2040connect",

    /**
     * value: "nicla_vision"
     * @const
     */
    "nicla_vision": "nicla_vision",

    /**
     * value: "phone"
     * @const
     */
    "phone": "phone",

    /**
     * value: "portenta_x8"
     * @const
     */
    "portenta_x8": "portenta_x8",

    /**
     * value: "opta"
     * @const
     */
    "opta": "opta",

    /**
     * value: "giga"
     * @const
     */
    "giga": "giga",

    /**
     * value: "generic_device_secretkey"
     * @const
     */
    "generic_device_secretkey": "generic_device_secretkey",

    /**
     * value: "portenta_c33"
     * @const
     */
    "portenta_c33": "portenta_c33",

    /**
     * value: "unor4wifi"
     * @const
     */
    "unor4wifi": "unor4wifi",

    /**
     * value: "nano_nora"
     * @const
     */
    "nano_nora": "nano_nora"
};



export default CreateDevicesV2Payload;

