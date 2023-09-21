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
 * The ArduinoDevicev2Webhook model module.
 * @module model/ArduinoDevicev2Webhook
 * @version 1.5.0
 */
class ArduinoDevicev2Webhook {
    /**
     * Constructs a new <code>ArduinoDevicev2Webhook</code>.
     * DeviceWebhookV2 describes a webhook associated to the device (default view)
     * @alias module:model/ArduinoDevicev2Webhook
     * @param id {String} The uuid of the webhook
     * @param uri {String} The uri of the webhook
     */
    constructor(id, uri) { 
        
        ArduinoDevicev2Webhook.initialize(this, id, uri);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, uri) { 
        obj['id'] = id;
        obj['uri'] = uri;
    }

    /**
     * Constructs a <code>ArduinoDevicev2Webhook</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArduinoDevicev2Webhook} obj Optional instance to populate.
     * @return {module:model/ArduinoDevicev2Webhook} The populated <code>ArduinoDevicev2Webhook</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArduinoDevicev2Webhook();

            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('uri')) {
                obj['uri'] = ApiClient.convertToType(data['uri'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ArduinoDevicev2Webhook</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ArduinoDevicev2Webhook</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ArduinoDevicev2Webhook.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['uri'] && !(typeof data['uri'] === 'string' || data['uri'] instanceof String)) {
            throw new Error("Expected the field `uri` to be a primitive type in the JSON string but got " + data['uri']);
        }

        return true;
    }


}

ArduinoDevicev2Webhook.RequiredProperties = ["id", "uri"];

/**
 * Whether the webhook is active
 * @member {Boolean} active
 * @default true
 */
ArduinoDevicev2Webhook.prototype['active'] = true;

/**
 * The uuid of the webhook
 * @member {String} id
 */
ArduinoDevicev2Webhook.prototype['id'] = undefined;

/**
 * The uri of the webhook
 * @member {String} uri
 */
ArduinoDevicev2Webhook.prototype['uri'] = undefined;






export default ArduinoDevicev2Webhook;

