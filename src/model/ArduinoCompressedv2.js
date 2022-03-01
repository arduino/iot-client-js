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
 * The ArduinoCompressedv2 model module.
 * @module model/ArduinoCompressedv2
 * @version 1.4.1
 */
class ArduinoCompressedv2 {
    /**
     * Constructs a new <code>ArduinoCompressedv2</code>.
     * compressed contains the info from which to generate the certificate (default view)
     * @alias module:model/ArduinoCompressedv2
     * @param notAfter {Date} The ending date of the certificate
     * @param notBefore {Date} The starting date of the certificate
     * @param serial {String} The serial number of the certificate
     * @param signature {String} The signature of the certificate
     * @param signatureAsn1X {String} The ASN1 X component of certificate signature
     * @param signatureAsn1Y {String} The ASN1 Y component of certificate signature
     */
    constructor(notAfter, notBefore, serial, signature, signatureAsn1X, signatureAsn1Y) { 
        
        ArduinoCompressedv2.initialize(this, notAfter, notBefore, serial, signature, signatureAsn1X, signatureAsn1Y);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, notAfter, notBefore, serial, signature, signatureAsn1X, signatureAsn1Y) { 
        obj['not_after'] = notAfter;
        obj['not_before'] = notBefore;
        obj['serial'] = serial;
        obj['signature'] = signature;
        obj['signature_asn1_x'] = signatureAsn1X;
        obj['signature_asn1_y'] = signatureAsn1Y;
    }

    /**
     * Constructs a <code>ArduinoCompressedv2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArduinoCompressedv2} obj Optional instance to populate.
     * @return {module:model/ArduinoCompressedv2} The populated <code>ArduinoCompressedv2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArduinoCompressedv2();

            if (data.hasOwnProperty('authority_key_identifier')) {
                obj['authority_key_identifier'] = ApiClient.convertToType(data['authority_key_identifier'], 'String');
            }
            if (data.hasOwnProperty('not_after')) {
                obj['not_after'] = ApiClient.convertToType(data['not_after'], 'Date');
            }
            if (data.hasOwnProperty('not_before')) {
                obj['not_before'] = ApiClient.convertToType(data['not_before'], 'Date');
            }
            if (data.hasOwnProperty('serial')) {
                obj['serial'] = ApiClient.convertToType(data['serial'], 'String');
            }
            if (data.hasOwnProperty('signature')) {
                obj['signature'] = ApiClient.convertToType(data['signature'], 'String');
            }
            if (data.hasOwnProperty('signature_asn1_x')) {
                obj['signature_asn1_x'] = ApiClient.convertToType(data['signature_asn1_x'], 'String');
            }
            if (data.hasOwnProperty('signature_asn1_y')) {
                obj['signature_asn1_y'] = ApiClient.convertToType(data['signature_asn1_y'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The Authority Key Identifier of the certificate
 * @member {String} authority_key_identifier
 */
ArduinoCompressedv2.prototype['authority_key_identifier'] = undefined;

/**
 * The ending date of the certificate
 * @member {Date} not_after
 */
ArduinoCompressedv2.prototype['not_after'] = undefined;

/**
 * The starting date of the certificate
 * @member {Date} not_before
 */
ArduinoCompressedv2.prototype['not_before'] = undefined;

/**
 * The serial number of the certificate
 * @member {String} serial
 */
ArduinoCompressedv2.prototype['serial'] = undefined;

/**
 * The signature of the certificate
 * @member {String} signature
 */
ArduinoCompressedv2.prototype['signature'] = undefined;

/**
 * The ASN1 X component of certificate signature
 * @member {String} signature_asn1_x
 */
ArduinoCompressedv2.prototype['signature_asn1_x'] = undefined;

/**
 * The ASN1 Y component of certificate signature
 * @member {String} signature_asn1_y
 */
ArduinoCompressedv2.prototype['signature_asn1_y'] = undefined;






export default ArduinoCompressedv2;

