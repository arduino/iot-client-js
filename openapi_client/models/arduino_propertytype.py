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


class ArduinoPropertytype {
    
    constructor() { 
        ArduinoPropertytype.initialize(this);
    }

    
    static initialize(obj) { 
        obj['declaration'] = declaration;
        obj['deprecated'] = deprecated;
        obj['name'] = name;
        obj['rw'] = rw;
        obj['type'] = type;
    }

    
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArduinoPropertytype();

            if (data.hasOwnProperty('assistants')) {
                obj['assistants'] = data.assistants;
            }
            if (data.hasOwnProperty('declaration')) {
                obj['declaration'] = data.declaration;
            }
            if (data.hasOwnProperty('deprecated')) {
                obj['deprecated'] = data.deprecated;
            }
            if (data.hasOwnProperty('example')) {
                obj['example'] = data.example;
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = data.name;
            }
            if (data.hasOwnProperty('rw')) {
                obj['rw'] = data.rw;
            }
            if (data.hasOwnProperty('supersededBy')) {
                obj['supersededBy'] = data.supersededBy;
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = data.tags;
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = data.type;
            }
            if (data.hasOwnProperty('units')) {
                obj['units'] = data.units;
            }
        }
        return obj;
    }

    
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ArduinoPropertytype.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['assistants'])) {
            throw new Error("Expected the field `assistants` to be an array in the JSON data but got " + data['assistants']);
        }
        // ensure the json data is a string
        if (data['declaration'] && !(typeof data['declaration'] === 'string' || data['declaration'] instanceof String)) {
            throw new Error("Expected the field `declaration` to be a primitive type in the JSON string but got " + data['declaration']);
        }
        // ensure the json data is a string
        if (data['example'] && !(typeof data['example'] === 'string' || data['example'] instanceof String)) {
            throw new Error("Expected the field `example` to be a primitive type in the JSON string but got " + data['example']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['supersededBy'] && !(typeof data['supersededBy'] === 'string' || data['supersededBy'] instanceof String)) {
            throw new Error("Expected the field `supersededBy` to be a primitive type in the JSON string but got " + data['supersededBy']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['tags'])) {
            throw new Error("Expected the field `tags` to be an array in the JSON data but got " + data['tags']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['units'])) {
            throw new Error("Expected the field `units` to be an array in the JSON data but got " + data['units']);
        }

        return true;
    }


}

ArduinoPropertytype.RequiredProperties = ["declaration", "deprecated", "name", "rw", "type"];


ArduinoPropertytype.prototype['assistants'] = undefined;


ArduinoPropertytype.prototype['declaration'] = undefined;


ArduinoPropertytype.prototype['deprecated'] = undefined;


ArduinoPropertytype.prototype['example'] = undefined;


ArduinoPropertytype.prototype['name'] = undefined;


ArduinoPropertytype.prototype['rw'] = undefined;


ArduinoPropertytype.prototype['supersededBy'] = undefined;


ArduinoPropertytype.prototype['tags'] = undefined;


ArduinoPropertytype.prototype['type'] = undefined;


ArduinoPropertytype.prototype['units'] = undefined;






export default ArduinoPropertytype;

