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

/**
 * The CreateDevicesV2Payload model module.
 * @module model/CreateDevicesV2Payload
 * @version 1.0.1
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

            if (data.hasOwnProperty('fqbn')) {
                obj['fqbn'] = ApiClient.convertToType(data['fqbn'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('serial')) {
                obj['serial'] = ApiClient.convertToType(data['serial'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The fully qualified board name
 * @member {String} fqbn
 */
CreateDevicesV2Payload.prototype['fqbn'] = undefined;

/**
 * The UUID of the device
 * @member {String} id
 */
CreateDevicesV2Payload.prototype['id'] = undefined;

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
     * value: "mkrwan1310"
     * @const
     */
    "mkrwan1310": "mkrwan1310",

    /**
     * value: "mkrwan1300"
     * @const
     */
    "mkrwan1300": "mkrwan1300",

    /**
     * value: "mkrnb1500"
     * @const
     */
    "mkrnb1500": "mkrnb1500",

    /**
     * value: "lora-device"
     * @const
     */
    "lora-device": "lora-device",

    /**
     * value: "login_and_secretkey_wifi"
     * @const
     */
    "login_and_secretkey_wifi": "login_and_secretkey_wifi"
};



export default CreateDevicesV2Payload;

