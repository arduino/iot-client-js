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
 * The ArduinoDevicev2StatusEvent model module.
 * @module model/ArduinoDevicev2StatusEvent
 * @version 3.0.0
 */
class ArduinoDevicev2StatusEvent {
    /**
     * Constructs a new <code>ArduinoDevicev2StatusEvent</code>.
     * ArduinoDevicev2StatusEvent media type (default view)
     * @alias module:model/ArduinoDevicev2StatusEvent
     * @param updatedAt {Date} Update timestamp of the status event
     * @param value {module:model/ArduinoDevicev2StatusEvent.ValueEnum} The status event of the device
     */
    constructor(updatedAt, value) { 
        
        ArduinoDevicev2StatusEvent.initialize(this, updatedAt, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, updatedAt, value) { 
        obj['updated_at'] = updatedAt;
        obj['value'] = value;
    }

    /**
     * Constructs a <code>ArduinoDevicev2StatusEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArduinoDevicev2StatusEvent} obj Optional instance to populate.
     * @return {module:model/ArduinoDevicev2StatusEvent} The populated <code>ArduinoDevicev2StatusEvent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArduinoDevicev2StatusEvent();

            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ArduinoDevicev2StatusEvent</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ArduinoDevicev2StatusEvent</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ArduinoDevicev2StatusEvent.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['value'] && !(typeof data['value'] === 'string' || data['value'] instanceof String)) {
            throw new Error("Expected the field `value` to be a primitive type in the JSON string but got " + data['value']);
        }

        return true;
    }


}

ArduinoDevicev2StatusEvent.RequiredProperties = ["updated_at", "value"];

/**
 * Update timestamp of the status event
 * @member {Date} updated_at
 */
ArduinoDevicev2StatusEvent.prototype['updated_at'] = undefined;

/**
 * The status event of the device
 * @member {module:model/ArduinoDevicev2StatusEvent.ValueEnum} value
 */
ArduinoDevicev2StatusEvent.prototype['value'] = undefined;





/**
 * Allowed values for the <code>value</code> property.
 * @enum {String}
 * @readonly
 */
ArduinoDevicev2StatusEvent['ValueEnum'] = {

    /**
     * value: "CONNECTED"
     * @const
     */
    "CONNECTED": "CONNECTED",

    /**
     * value: "DISCONNECTED"
     * @const
     */
    "DISCONNECTED": "DISCONNECTED"
};



export default ArduinoDevicev2StatusEvent;

