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
 * The CreateDevicesV2CertsPayload model module.
 * @module model/CreateDevicesV2CertsPayload
 * @version 1.3.0
 */
class CreateDevicesV2CertsPayload {
    /**
     * Constructs a new <code>CreateDevicesV2CertsPayload</code>.
     * @alias module:model/CreateDevicesV2CertsPayload
     * @param csr {String} The certificate request in pem format
     * @param enabled {Boolean} Whether the certificate is enabled
     */
    constructor(csr, enabled) { 
        
        CreateDevicesV2CertsPayload.initialize(this, csr, enabled);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, csr, enabled) { 
        obj['csr'] = csr;
        obj['enabled'] = enabled;
    }

    /**
     * Constructs a <code>CreateDevicesV2CertsPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateDevicesV2CertsPayload} obj Optional instance to populate.
     * @return {module:model/CreateDevicesV2CertsPayload} The populated <code>CreateDevicesV2CertsPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateDevicesV2CertsPayload();

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


}

/**
 * The Certification Authority you want to use
 * @member {String} ca
 */
CreateDevicesV2CertsPayload.prototype['ca'] = undefined;

/**
 * The certificate request in pem format
 * @member {String} csr
 */
CreateDevicesV2CertsPayload.prototype['csr'] = undefined;

/**
 * Whether the certificate is enabled
 * @member {Boolean} enabled
 */
CreateDevicesV2CertsPayload.prototype['enabled'] = undefined;






export default CreateDevicesV2CertsPayload;

