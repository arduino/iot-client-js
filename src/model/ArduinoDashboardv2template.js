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
import ArduinoWidgetv2template from './ArduinoWidgetv2template';

/**
 * The ArduinoDashboardv2template model module.
 * @module model/ArduinoDashboardv2template
 * @version 2.0.1
 */
class ArduinoDashboardv2template {
    /**
     * Constructs a new <code>ArduinoDashboardv2template</code>.
     * ArduinoDashboardv2template media type (default view)
     * @alias module:model/ArduinoDashboardv2template
     * @param name {String} The friendly name of the dashboard
     */
    constructor(name) { 
        
        ArduinoDashboardv2template.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>ArduinoDashboardv2template</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArduinoDashboardv2template} obj Optional instance to populate.
     * @return {module:model/ArduinoDashboardv2template} The populated <code>ArduinoDashboardv2template</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArduinoDashboardv2template();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('widgets')) {
                obj['widgets'] = ApiClient.convertToType(data['widgets'], [ArduinoWidgetv2template]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ArduinoDashboardv2template</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ArduinoDashboardv2template</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ArduinoDashboardv2template.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        if (data['widgets']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['widgets'])) {
                throw new Error("Expected the field `widgets` to be an array in the JSON data but got " + data['widgets']);
            }
            // validate the optional field `widgets` (array)
            for (const item of data['widgets']) {
                ArduinoWidgetv2template.validateJSON(item);
            };
        }

        return true;
    }


}

ArduinoDashboardv2template.RequiredProperties = ["name"];

/**
 * The friendly name of the dashboard
 * @member {String} name
 */
ArduinoDashboardv2template.prototype['name'] = undefined;

/**
 * ArduinoWidgetv2templateCollection is the media type for an array of ArduinoWidgetv2template (default view)
 * @member {Array.<module:model/ArduinoWidgetv2template>} widgets
 */
ArduinoDashboardv2template.prototype['widgets'] = undefined;






export default ArduinoDashboardv2template;

