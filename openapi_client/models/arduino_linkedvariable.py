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


class ArduinoLinkedvariable {
    
    constructor() { 
        ArduinoLinkedvariable.initialize(this);
    }

    
    static initialize(obj) { 
        obj['id'] = id;
        obj['name'] = name;
        obj['permission'] = permission;
        obj['thing_id'] = thing_id;
        obj['thing_name'] = thing_name;
        obj['type'] = type;
        obj['variable_name'] = variable_name;
    }

    
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArduinoLinkedvariable();

            if (data.hasOwnProperty('id')) {
                obj['id'] = data.id;
            }
            if (data.hasOwnProperty('last_value')) {
                obj['last_value'] = data.last_value;
            }
            if (data.hasOwnProperty('last_value_updated_at')) {
                obj['last_value_updated_at'] = data.last_value_updated_at;
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = data.name;
            }
            if (data.hasOwnProperty('permission')) {
                obj['permission'] = data.permission;
            }
            if (data.hasOwnProperty('thing_id')) {
                obj['thing_id'] = data.thing_id;
            }
            if (data.hasOwnProperty('thing_name')) {
                obj['thing_name'] = data.thing_name;
            }
            if (data.hasOwnProperty('thing_timezone')) {
                obj['thing_timezone'] = data.thing_timezone;
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = data.type;
            }
            if (data.hasOwnProperty('variable_name')) {
                obj['variable_name'] = data.variable_name;
            }
        }
        return obj;
    }

    
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ArduinoLinkedvariable.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
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
        // ensure the json data is a string
        if (data['thing_name'] && !(typeof data['thing_name'] === 'string' || data['thing_name'] instanceof String)) {
            throw new Error("Expected the field `thing_name` to be a primitive type in the JSON string but got " + data['thing_name']);
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
        if (data['variable_name'] && !(typeof data['variable_name'] === 'string' || data['variable_name'] instanceof String)) {
            throw new Error("Expected the field `variable_name` to be a primitive type in the JSON string but got " + data['variable_name']);
        }

        return true;
    }


}

ArduinoLinkedvariable.RequiredProperties = ["id", "name", "permission", "thing_id", "thing_name", "type", "variable_name"];


ArduinoLinkedvariable.prototype['id'] = undefined;


ArduinoLinkedvariable.prototype['last_value'] = undefined;


ArduinoLinkedvariable.prototype['last_value_updated_at'] = undefined;


ArduinoLinkedvariable.prototype['name'] = undefined;


ArduinoLinkedvariable.prototype['permission'] = undefined;


ArduinoLinkedvariable.prototype['thing_id'] = undefined;


ArduinoLinkedvariable.prototype['thing_name'] = undefined;


ArduinoLinkedvariable.prototype['thing_timezone'] = undefined;


ArduinoLinkedvariable.prototype['type'] = undefined;


ArduinoLinkedvariable.prototype['variable_name'] = undefined;






export default ArduinoLinkedvariable;

