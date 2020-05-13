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
 * The Devicev2Pass model module.
 * @module model/Devicev2Pass
 * @version 1.3.2
 */
class Devicev2Pass {
    /**
     * Constructs a new <code>Devicev2Pass</code>.
     * @alias module:model/Devicev2Pass
     */
    constructor() { 
        
        Devicev2Pass.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Devicev2Pass</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Devicev2Pass} obj Optional instance to populate.
     * @return {module:model/Devicev2Pass} The populated <code>Devicev2Pass</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Devicev2Pass();

            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The password for the device
 * @member {String} password
 */
Devicev2Pass.prototype['password'] = undefined;






export default Devicev2Pass;

