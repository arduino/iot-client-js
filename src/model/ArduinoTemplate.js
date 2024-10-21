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
import ArduinoThingresult from './ArduinoThingresult';

/**
 * The ArduinoTemplate model module.
 * @module model/ArduinoTemplate
 * @version 2.0.6
 */
class ArduinoTemplate {
    /**
     * Constructs a new <code>ArduinoTemplate</code>.
     * ArduinoTemplate media type (default view)
     * @alias module:model/ArduinoTemplate
     * @param things {Array.<module:model/ArduinoThingresult>} ArduinoThingresultCollection is the media type for an array of ArduinoThingresult (default view)
     */
    constructor(things) { 
        
        ArduinoTemplate.initialize(this, things);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, things) { 
        obj['things'] = things;
    }

    /**
     * Constructs a <code>ArduinoTemplate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArduinoTemplate} obj Optional instance to populate.
     * @return {module:model/ArduinoTemplate} The populated <code>ArduinoTemplate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArduinoTemplate();

            if (data.hasOwnProperty('dashboards')) {
                obj['dashboards'] = ApiClient.convertToType(data['dashboards'], ['String']);
            }
            if (data.hasOwnProperty('things')) {
                obj['things'] = ApiClient.convertToType(data['things'], [ArduinoThingresult]);
            }
            if (data.hasOwnProperty('triggers')) {
                obj['triggers'] = ApiClient.convertToType(data['triggers'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ArduinoTemplate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ArduinoTemplate</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ArduinoTemplate.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['dashboards'])) {
            throw new Error("Expected the field `dashboards` to be an array in the JSON data but got " + data['dashboards']);
        }
        if (data['things']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['things'])) {
                throw new Error("Expected the field `things` to be an array in the JSON data but got " + data['things']);
            }
            // validate the optional field `things` (array)
            for (const item of data['things']) {
                ArduinoThingresult.validateJSON(item);
            };
        }
        // ensure the json data is an array
        if (!Array.isArray(data['triggers'])) {
            throw new Error("Expected the field `triggers` to be an array in the JSON data but got " + data['triggers']);
        }

        return true;
    }


}

ArduinoTemplate.RequiredProperties = ["things"];

/**
 * @member {Array.<String>} dashboards
 */
ArduinoTemplate.prototype['dashboards'] = undefined;

/**
 * ArduinoThingresultCollection is the media type for an array of ArduinoThingresult (default view)
 * @member {Array.<module:model/ArduinoThingresult>} things
 */
ArduinoTemplate.prototype['things'] = undefined;

/**
 * @member {Array.<String>} triggers
 */
ArduinoTemplate.prototype['triggers'] = undefined;






export default ArduinoTemplate;

