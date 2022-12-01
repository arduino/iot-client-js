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
 * The ArduinoTimezone model module.
 * @module model/ArduinoTimezone
 * @version 1.4.3
 */
class ArduinoTimezone {
    /**
     * Constructs a new <code>ArduinoTimezone</code>.
     * ArduinoTimezone media type (default view)
     * @alias module:model/ArduinoTimezone
     * @param name {String} Name of the time zone.
     * @param offset {Number} Current UTC DST offset in seconds.
     */
    constructor(name, offset) { 
        
        ArduinoTimezone.initialize(this, name, offset);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, offset) { 
        obj['name'] = name;
        obj['offset'] = offset;
    }

    /**
     * Constructs a <code>ArduinoTimezone</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArduinoTimezone} obj Optional instance to populate.
     * @return {module:model/ArduinoTimezone} The populated <code>ArduinoTimezone</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArduinoTimezone();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('offset')) {
                obj['offset'] = ApiClient.convertToType(data['offset'], 'Number');
            }
            if (data.hasOwnProperty('until')) {
                obj['until'] = ApiClient.convertToType(data['until'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * Name of the time zone.
 * @member {String} name
 */
ArduinoTimezone.prototype['name'] = undefined;

/**
 * Current UTC DST offset in seconds.
 * @member {Number} offset
 */
ArduinoTimezone.prototype['offset'] = undefined;

/**
 * Date until the offset is valid.
 * @member {Date} until
 */
ArduinoTimezone.prototype['until'] = undefined;






export default ArduinoTimezone;

