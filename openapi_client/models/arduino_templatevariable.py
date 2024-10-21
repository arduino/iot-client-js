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
import from openapi_client.models.arduino_timezone import ArduinoTimezone from './from openapi_client.models.arduino_timezone import ArduinoTimezone';


class ArduinoTemplatevariable {
    
    constructor() { 
        ArduinoTemplatevariable.initialize(this);
    }

    
    static initialize(obj) { 
        obj['name'] = name;
        obj['permission'] = permission;
        obj['thing_id'] = thing_id;
        obj['type'] = type;
        obj['variable_id'] = variable_id;
    }

    
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArduinoTemplatevariable();

            if (data.hasOwnProperty('name')) {
                obj['name'] = data.name;
            }
            if (data.hasOwnProperty('permission')) {
                obj['permission'] = data.permission;
            }
            if (data.hasOwnProperty('thing_id')) {
                obj['thing_id'] = data.thing_id;
            }
            if (data.hasOwnProperty('thing_timezone')) {
                obj['thing_timezone'] = data.thing_timezone;
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = data.type;
            }
            if (data.hasOwnProperty('variable_id')) {
                obj['variable_id'] = data.variable_id;
            }
        }
        return obj;
    }

    
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ArduinoTemplatevariable.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['permission'] && !(typeof data['permission'] === 'string' || data['permission'] instanceof String)) {
            throw new Error("Expected the field `permission` to be a primitive type in the JSON string but got " + data['permission']);
        }
        // ensure the json data is a string
        if (data['thing_id'] && !(typeof data['thing_id'] === 'string' || data['thing_id'] instanceof String)) {
            throw new Error("Expected the field `thing_id` to be a primitive type in the JSON string but got " + data['thing_id']);
        }
        // validate the optional field `thing_timezone`
        if (data['thing_timezone']) { // data not null
          ArduinoTimezone.validateJSON(data['thing_timezone']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['variable_id'] && !(typeof data['variable_id'] === 'string' || data['variable_id'] instanceof String)) {
            throw new Error("Expected the field `variable_id` to be a primitive type in the JSON string but got " + data['variable_id']);
        }

        return true;
    }


}

ArduinoTemplatevariable.RequiredProperties = ["name", "permission", "thing_id", "type", "variable_id"];


ArduinoTemplatevariable.prototype['name'] = undefined;


ArduinoTemplatevariable.prototype['permission'] = undefined;


ArduinoTemplatevariable.prototype['thing_id'] = undefined;


ArduinoTemplatevariable.prototype['thing_timezone'] = undefined;


ArduinoTemplatevariable.prototype['type'] = undefined;


ArduinoTemplatevariable.prototype['variable_id'] = undefined;






export default ArduinoTemplatevariable;

