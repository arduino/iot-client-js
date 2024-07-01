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
 * @version 2.0.3
 */
class ArduinoTimezone {
    /**
     * Constructs a new <code>ArduinoTimezone</code>.
     * ArduinoTimezone media type (default view)
     * @alias module:model/ArduinoTimezone
     * @param name {String} Name of the time zone.
     * @param offset {Number} Current UTC DST offset in seconds.
     * @param until {Date} Date until the offset is valid.
     */
    constructor(name, offset, until) { 
        
        ArduinoTimezone.initialize(this, name, offset, until);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, offset, until) { 
        obj['name'] = name;
        obj['offset'] = offset;
        obj['until'] = until;
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

    /**
     * Validates the JSON data with respect to <code>ArduinoTimezone</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ArduinoTimezone</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ArduinoTimezone.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}

ArduinoTimezone.RequiredProperties = ["name", "offset", "until"];

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

