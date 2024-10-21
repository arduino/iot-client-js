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
import from openapi_client.models.model_property import ModelProperty from './from openapi_client.models.model_property import ModelProperty';
import from openapi_client.models.tag import Tag from './from openapi_client.models.tag import Tag';


class ThingCreate {
    
    constructor() { 
        ThingCreate.initialize(this);
    }

    
    static initialize(obj) { 
        obj['timezone'] = 'America/New_York';
    }

    
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ThingCreate();

            if (data.hasOwnProperty('assistant')) {
                obj['assistant'] = data.assistant;
            }
            if (data.hasOwnProperty('device_id')) {
                obj['device_id'] = data.device_id;
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = data.id;
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = data.name;
            }
            if (data.hasOwnProperty('properties')) {
                obj['properties'] = data.properties;
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = data.tags;
            }
            if (data.hasOwnProperty('timezone')) {
                obj['timezone'] = data.timezone;
            }
            if (data.hasOwnProperty('webhook_active')) {
                obj['webhook_active'] = data.webhook_active;
            }
            if (data.hasOwnProperty('webhook_uri')) {
                obj['webhook_uri'] = data.webhook_uri;
            }
        }
        return obj;
    }

    
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['assistant'] && !(typeof data['assistant'] === 'string' || data['assistant'] instanceof String)) {
            throw new Error("Expected the field `assistant` to be a primitive type in the JSON string but got " + data['assistant']);
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
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        if (data['properties']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['properties'])) {
                throw new Error("Expected the field `properties` to be an array in the JSON data but got " + data['properties']);
            }
            // validate the optional field `properties` (array)
            for (const item of data['properties']) {
                ModelProperty.validateJSON(item);
            };
        }
        if (data['tags']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['tags'])) {
                throw new Error("Expected the field `tags` to be an array in the JSON data but got " + data['tags']);
            }
            // validate the optional field `tags` (array)
            for (const item of data['tags']) {
                Tag.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['timezone'] && !(typeof data['timezone'] === 'string' || data['timezone'] instanceof String)) {
            throw new Error("Expected the field `timezone` to be a primitive type in the JSON string but got " + data['timezone']);
        }
        // ensure the json data is a string
        if (data['webhook_uri'] && !(typeof data['webhook_uri'] === 'string' || data['webhook_uri'] instanceof String)) {
            throw new Error("Expected the field `webhook_uri` to be a primitive type in the JSON string but got " + data['webhook_uri']);
        }

        return true;
    }


}




ThingCreate.prototype['assistant'] = undefined;


ThingCreate.prototype['device_id'] = undefined;


ThingCreate.prototype['id'] = undefined;


ThingCreate.prototype['name'] = undefined;


ThingCreate.prototype['properties'] = undefined;


ThingCreate.prototype['tags'] = undefined;


ThingCreate.prototype['timezone'] = 'America/New_York';


ThingCreate.prototype['webhook_active'] = undefined;


ThingCreate.prototype['webhook_uri'] = undefined;






ThingCreate['AssistantEnum'] = {

    
    "&#39;ALEXA&#39;": 'ALEXA',

    
    "&#39;GOOGLE&#39;": 'GOOGLE',

    
    "&#39;NONE&#39;": 'NONE'
};



export default ThingCreate;

