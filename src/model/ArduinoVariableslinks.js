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
 * The ArduinoVariableslinks model module.
 * @module model/ArduinoVariableslinks
 * @version 3.0.0
 */
class ArduinoVariableslinks {
    /**
     * Constructs a new <code>ArduinoVariableslinks</code>.
     * ArduinoVariableslinks media type (default view)
     * @alias module:model/ArduinoVariableslinks
     * @param variables {Array.<String>} The ids of the linked variables
     */
    constructor(variables) { 
        
        ArduinoVariableslinks.initialize(this, variables);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, variables) { 
        obj['variables'] = variables;
    }

    /**
     * Constructs a <code>ArduinoVariableslinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArduinoVariableslinks} obj Optional instance to populate.
     * @return {module:model/ArduinoVariableslinks} The populated <code>ArduinoVariableslinks</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArduinoVariableslinks();

            if (data.hasOwnProperty('variables')) {
                obj['variables'] = ApiClient.convertToType(data['variables'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ArduinoVariableslinks</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ArduinoVariableslinks</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ArduinoVariableslinks.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['variables'])) {
            throw new Error("Expected the field `variables` to be an array in the JSON data but got " + data['variables']);
        }

        return true;
    }


}

ArduinoVariableslinks.RequiredProperties = ["variables"];

/**
 * The ids of the linked variables
 * @member {Array.<String>} variables
 */
ArduinoVariableslinks.prototype['variables'] = undefined;






export default ArduinoVariableslinks;

