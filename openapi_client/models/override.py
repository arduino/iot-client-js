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


class Override {
    
    constructor() { 
        Override.initialize(this);
    }

    
    static initialize(obj) { 
        obj['new_thing_id'] = new_thing_id;
        obj['old_thing_id'] = old_thing_id;
    }

    
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Override();

            if (data.hasOwnProperty('new_thing_id')) {
                obj['new_thing_id'] = data.new_thing_id;
            }
            if (data.hasOwnProperty('old_thing_id')) {
                obj['old_thing_id'] = data.old_thing_id;
            }
        }
        return obj;
    }

    
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Override.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['new_thing_id'] && !(typeof data['new_thing_id'] === 'string' || data['new_thing_id'] instanceof String)) {
            throw new Error("Expected the field `new_thing_id` to be a primitive type in the JSON string but got " + data['new_thing_id']);
        }
        // ensure the json data is a string
        if (data['old_thing_id'] && !(typeof data['old_thing_id'] === 'string' || data['old_thing_id'] instanceof String)) {
            throw new Error("Expected the field `old_thing_id` to be a primitive type in the JSON string but got " + data['old_thing_id']);
        }

        return true;
    }


}

Override.RequiredProperties = ["new_thing_id", "old_thing_id"];


Override.prototype['new_thing_id'] = undefined;


Override.prototype['old_thing_id'] = undefined;






export default Override;

