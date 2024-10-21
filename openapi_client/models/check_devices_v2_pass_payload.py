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


class CheckDevicesV2PassPayload {
    
    constructor() { 
        CheckDevicesV2PassPayload.initialize(this);
    }

    
    static initialize(obj) { 
        obj['password'] = password;
    }

    
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CheckDevicesV2PassPayload();

            if (data.hasOwnProperty('password')) {
                obj['password'] = data.password;
            }
        }
        return obj;
    }

    
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CheckDevicesV2PassPayload.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['password'] && !(typeof data['password'] === 'string' || data['password'] instanceof String)) {
            throw new Error("Expected the field `password` to be a primitive type in the JSON string but got " + data['password']);
        }

        return true;
    }


}

CheckDevicesV2PassPayload.RequiredProperties = ["password"];


CheckDevicesV2PassPayload.prototype['password'] = undefined;






export default CheckDevicesV2PassPayload;

