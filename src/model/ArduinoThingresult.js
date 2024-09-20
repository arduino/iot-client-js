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
 * The ArduinoThingresult model module.
 * @module model/ArduinoThingresult
 * @version 2.0.6
 */
class ArduinoThingresult {
    /**
     * Constructs a new <code>ArduinoThingresult</code>.
     * ArduinoThingresult media type (default view)
     * @alias module:model/ArduinoThingresult
     * @param id {String} UUID of the created Thing
     * @param sketchId {String} UUID of the created Sketch
     */
    constructor(id, sketchId) { 
        
        ArduinoThingresult.initialize(this, id, sketchId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, sketchId) { 
        obj['id'] = id;
        obj['sketch_id'] = sketchId;
    }

    /**
     * Constructs a <code>ArduinoThingresult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArduinoThingresult} obj Optional instance to populate.
     * @return {module:model/ArduinoThingresult} The populated <code>ArduinoThingresult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArduinoThingresult();

            if (data.hasOwnProperty('device_id')) {
                obj['device_id'] = ApiClient.convertToType(data['device_id'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('sketch_id')) {
                obj['sketch_id'] = ApiClient.convertToType(data['sketch_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ArduinoThingresult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ArduinoThingresult</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ArduinoThingresult.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['device_id'] && !(typeof data['device_id'] === 'string' || data['device_id'] instanceof String)) {
            throw new Error("Expected the field `device_id` to be a primitive type in the JSON string but got " + data['device_id']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['sketch_id'] && !(typeof data['sketch_id'] === 'string' || data['sketch_id'] instanceof String)) {
            throw new Error("Expected the field `sketch_id` to be a primitive type in the JSON string but got " + data['sketch_id']);
        }

        return true;
    }


}

ArduinoThingresult.RequiredProperties = ["id", "sketch_id"];

/**
 * UUID of the attached device
 * @member {String} device_id
 */
ArduinoThingresult.prototype['device_id'] = undefined;

/**
 * UUID of the created Thing
 * @member {String} id
 */
ArduinoThingresult.prototype['id'] = undefined;

/**
 * UUID of the created Sketch
 * @member {String} sketch_id
 */
ArduinoThingresult.prototype['sketch_id'] = undefined;






export default ArduinoThingresult;
