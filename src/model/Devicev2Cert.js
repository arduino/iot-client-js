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
 * The Devicev2Cert model module.
 * @module model/Devicev2Cert
 * @version 3.0.0
 */
class Devicev2Cert {
    /**
     * Constructs a new <code>Devicev2Cert</code>.
     * @alias module:model/Devicev2Cert
     */
    constructor() { 
        
        Devicev2Cert.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Devicev2Cert</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Devicev2Cert} obj Optional instance to populate.
     * @return {module:model/Devicev2Cert} The populated <code>Devicev2Cert</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Devicev2Cert();

            if (data.hasOwnProperty('ca')) {
                obj['ca'] = ApiClient.convertToType(data['ca'], 'String');
            }
            if (data.hasOwnProperty('csr')) {
                obj['csr'] = ApiClient.convertToType(data['csr'], 'String');
            }
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Devicev2Cert</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Devicev2Cert</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['ca'] && !(typeof data['ca'] === 'string' || data['ca'] instanceof String)) {
            throw new Error("Expected the field `ca` to be a primitive type in the JSON string but got " + data['ca']);
        }
        // ensure the json data is a string
        if (data['csr'] && !(typeof data['csr'] === 'string' || data['csr'] instanceof String)) {
            throw new Error("Expected the field `csr` to be a primitive type in the JSON string but got " + data['csr']);
        }

        return true;
    }


}



/**
 * The Certification Authority you want to use
 * @member {String} ca
 */
Devicev2Cert.prototype['ca'] = undefined;

/**
 * The certificate request in pem format
 * @member {String} csr
 */
Devicev2Cert.prototype['csr'] = undefined;

/**
 * Whether the certificate is enabled
 * @member {Boolean} enabled
 */
Devicev2Cert.prototype['enabled'] = undefined;






export default Devicev2Cert;

