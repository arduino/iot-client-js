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
import from openapi_client.models.widget import Widget from './from openapi_client.models.widget import Widget';


class Dashboardv2 {
    
    constructor() { 
        Dashboardv2.initialize(this);
    }

    
    static initialize(obj) { 
    }

    
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Dashboardv2();

            if (data.hasOwnProperty('cover_image')) {
                obj['cover_image'] = data.cover_image;
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = data.name;
            }
            if (data.hasOwnProperty('widgets')) {
                obj['widgets'] = data.widgets;
            }
        }
        return obj;
    }

    
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['cover_image'] && !(typeof data['cover_image'] === 'string' || data['cover_image'] instanceof String)) {
            throw new Error("Expected the field `cover_image` to be a primitive type in the JSON string but got " + data['cover_image']);
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
                Widget.validateJSON(item);
            };
        }

        return true;
    }


}




Dashboardv2.prototype['cover_image'] = undefined;


Dashboardv2.prototype['name'] = undefined;


Dashboardv2.prototype['widgets'] = undefined;






export default Dashboardv2;

