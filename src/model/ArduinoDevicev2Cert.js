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
import ArduinoCompressedv2 from './ArduinoCompressedv2';

/**
 * The ArduinoDevicev2Cert model module.
 * @module model/ArduinoDevicev2Cert
 * @version 3.0.0
 */
class ArduinoDevicev2Cert {
    /**
     * Constructs a new <code>ArduinoDevicev2Cert</code>.
     * DeviceCertV2 describes a certificate associated to the device (default view)
     * @alias module:model/ArduinoDevicev2Cert
     * @param compressed {module:model/ArduinoCompressedv2} 
     * @param der {String} The certificate in DER format
     * @param deviceId {String} The unique identifier of the device
     * @param enabled {Boolean} Whether the certificate is enabled
     * @param href {String} The api reference of this cert
     * @param id {String} The unique identifier of the key
     * @param pem {String} The certificate in pem format
     */
    constructor(compressed, der, deviceId, enabled, href, id, pem) { 
        
        ArduinoDevicev2Cert.initialize(this, compressed, der, deviceId, enabled, href, id, pem);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, compressed, der, deviceId, enabled, href, id, pem) { 
        obj['compressed'] = compressed;
        obj['der'] = der;
        obj['device_id'] = deviceId;
        obj['enabled'] = enabled || true;
        obj['href'] = href;
        obj['id'] = id;
        obj['pem'] = pem;
    }

    /**
     * Constructs a <code>ArduinoDevicev2Cert</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArduinoDevicev2Cert} obj Optional instance to populate.
     * @return {module:model/ArduinoDevicev2Cert} The populated <code>ArduinoDevicev2Cert</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArduinoDevicev2Cert();

            if (data.hasOwnProperty('ca')) {
                obj['ca'] = ApiClient.convertToType(data['ca'], 'String');
            }
            if (data.hasOwnProperty('compressed')) {
                obj['compressed'] = ArduinoCompressedv2.constructFromObject(data['compressed']);
            }
            if (data.hasOwnProperty('der')) {
                obj['der'] = ApiClient.convertToType(data['der'], 'String');
            }
            if (data.hasOwnProperty('device_id')) {
                obj['device_id'] = ApiClient.convertToType(data['device_id'], 'String');
            }
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('href')) {
                obj['href'] = ApiClient.convertToType(data['href'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('pem')) {
                obj['pem'] = ApiClient.convertToType(data['pem'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ArduinoDevicev2Cert</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ArduinoDevicev2Cert</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ArduinoDevicev2Cert.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['ca'] && !(typeof data['ca'] === 'string' || data['ca'] instanceof String)) {
            throw new Error("Expected the field `ca` to be a primitive type in the JSON string but got " + data['ca']);
        }
        // validate the optional field `compressed`
        if (data['compressed']) { // data not null
          ArduinoCompressedv2.validateJSON(data['compressed']);
        }
        // ensure the json data is a string
        if (data['der'] && !(typeof data['der'] === 'string' || data['der'] instanceof String)) {
            throw new Error("Expected the field `der` to be a primitive type in the JSON string but got " + data['der']);
        }
        // ensure the json data is a string
        if (data['device_id'] && !(typeof data['device_id'] === 'string' || data['device_id'] instanceof String)) {
            throw new Error("Expected the field `device_id` to be a primitive type in the JSON string but got " + data['device_id']);
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
        if (data['pem'] && !(typeof data['pem'] === 'string' || data['pem'] instanceof String)) {
            throw new Error("Expected the field `pem` to be a primitive type in the JSON string but got " + data['pem']);
        }

        return true;
    }


}

ArduinoDevicev2Cert.RequiredProperties = ["compressed", "der", "device_id", "enabled", "href", "id", "pem"];

/**
 * The Certification Authority used to sign the certificate
 * @member {String} ca
 */
ArduinoDevicev2Cert.prototype['ca'] = undefined;

/**
 * @member {module:model/ArduinoCompressedv2} compressed
 */
ArduinoDevicev2Cert.prototype['compressed'] = undefined;

/**
 * The certificate in DER format
 * @member {String} der
 */
ArduinoDevicev2Cert.prototype['der'] = undefined;

/**
 * The unique identifier of the device
 * @member {String} device_id
 */
ArduinoDevicev2Cert.prototype['device_id'] = undefined;

/**
 * Whether the certificate is enabled
 * @member {Boolean} enabled
 * @default true
 */
ArduinoDevicev2Cert.prototype['enabled'] = true;

/**
 * The api reference of this cert
 * @member {String} href
 */
ArduinoDevicev2Cert.prototype['href'] = undefined;

/**
 * The unique identifier of the key
 * @member {String} id
 */
ArduinoDevicev2Cert.prototype['id'] = undefined;

/**
 * The certificate in pem format
 * @member {String} pem
 */
ArduinoDevicev2Cert.prototype['pem'] = undefined;






export default ArduinoDevicev2Cert;

