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
 * The InlineObject model module.
 * @module model/InlineObject
 * @version 1.4.0
 */
class InlineObject {
    /**
     * Constructs a new <code>InlineObject</code>.
     * @alias module:model/InlineObject
     * @param otaFile {File} OTA file
     */
    constructor(otaFile) { 
        
        InlineObject.initialize(this, otaFile);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, otaFile) { 
        obj['ota_file'] = otaFile;
    }

    /**
     * Constructs a <code>InlineObject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject} obj Optional instance to populate.
     * @return {module:model/InlineObject} The populated <code>InlineObject</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject();

            if (data.hasOwnProperty('expire_in_mins')) {
                obj['expire_in_mins'] = ApiClient.convertToType(data['expire_in_mins'], 'Number');
            }
            if (data.hasOwnProperty('ota_file')) {
                obj['ota_file'] = ApiClient.convertToType(data['ota_file'], File);
            }
        }
        return obj;
    }


}

/**
 * Binary expire time in minutes, default 10 mins
 * @member {Number} expire_in_mins
 * @default 10
 */
InlineObject.prototype['expire_in_mins'] = 10;

/**
 * OTA file
 * @member {File} ota_file
 */
InlineObject.prototype['ota_file'] = undefined;






export default InlineObject;

