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


class ArduinoProperty {
    
    constructor() { 
        ArduinoProperty.initialize(this);
    }

    
    static initialize(obj) { 
        obj['href'] = href;
        obj['id'] = id;
        obj['name'] = name;
        obj['permission'] = permission;
        obj['thing_id'] = thing_id;
        obj['type'] = type;
        obj['update_strategy'] = update_strategy;
    }

    
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArduinoProperty();

            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = data.created_at;
            }
            if (data.hasOwnProperty('deleted_at')) {
                obj['deleted_at'] = data.deleted_at;
            }
            if (data.hasOwnProperty('href')) {
                obj['href'] = data.href;
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = data.id;
            }
            if (data.hasOwnProperty('last_value')) {
                obj['last_value'] = data.last_value;
            }
            if (data.hasOwnProperty('linked_to_trigger')) {
                obj['linked_to_trigger'] = data.linked_to_trigger;
            }
            if (data.hasOwnProperty('max_value')) {
                obj['max_value'] = data.max_value;
            }
            if (data.hasOwnProperty('min_value')) {
                obj['min_value'] = data.min_value;
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = data.name;
            }
            if (data.hasOwnProperty('permission')) {
                obj['permission'] = data.permission;
            }
            if (data.hasOwnProperty('persist')) {
                obj['persist'] = data.persist;
            }
            if (data.hasOwnProperty('sync_id')) {
                obj['sync_id'] = data.sync_id;
            }
            if (data.hasOwnProperty('tag')) {
                obj['tag'] = data.tag;
            }
            if (data.hasOwnProperty('thing_id')) {
                obj['thing_id'] = data.thing_id;
            }
            if (data.hasOwnProperty('thing_name')) {
                obj['thing_name'] = data.thing_name;
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = data.type;
            }
            if (data.hasOwnProperty('update_parameter')) {
                obj['update_parameter'] = data.update_parameter;
            }
            if (data.hasOwnProperty('update_strategy')) {
                obj['update_strategy'] = data.update_strategy;
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = data.updated_at;
            }
            if (data.hasOwnProperty('value_updated_at')) {
                obj['value_updated_at'] = data.value_updated_at;
            }
            if (data.hasOwnProperty('variable_name')) {
                obj['variable_name'] = data.variable_name;
            }
        }
        return obj;
    }

    
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ArduinoProperty.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['href'] && !(typeof data['href'] === 'string' || data['href'] instanceof String)) {
            throw new Error("Expected the field `href` to be a primitive type in the JSON string but got " + data['href']);
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
        if (data['sync_id'] && !(typeof data['sync_id'] === 'string' || data['sync_id'] instanceof String)) {
            throw new Error("Expected the field `sync_id` to be a primitive type in the JSON string but got " + data['sync_id']);
        }
        // ensure the json data is a string
        if (data['thing_id'] && !(typeof data['thing_id'] === 'string' || data['thing_id'] instanceof String)) {
            throw new Error("Expected the field `thing_id` to be a primitive type in the JSON string but got " + data['thing_id']);
        }
        // ensure the json data is a string
        if (data['thing_name'] && !(typeof data['thing_name'] === 'string' || data['thing_name'] instanceof String)) {
            throw new Error("Expected the field `thing_name` to be a primitive type in the JSON string but got " + data['thing_name']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['update_strategy'] && !(typeof data['update_strategy'] === 'string' || data['update_strategy'] instanceof String)) {
            throw new Error("Expected the field `update_strategy` to be a primitive type in the JSON string but got " + data['update_strategy']);
        }
        // ensure the json data is a string
        if (data['variable_name'] && !(typeof data['variable_name'] === 'string' || data['variable_name'] instanceof String)) {
            throw new Error("Expected the field `variable_name` to be a primitive type in the JSON string but got " + data['variable_name']);
        }

        return true;
    }


}

ArduinoProperty.RequiredProperties = ["href", "id", "name", "permission", "thing_id", "type", "update_strategy"];


ArduinoProperty.prototype['created_at'] = undefined;


ArduinoProperty.prototype['deleted_at'] = undefined;


ArduinoProperty.prototype['href'] = undefined;


ArduinoProperty.prototype['id'] = undefined;


ArduinoProperty.prototype['last_value'] = undefined;


ArduinoProperty.prototype['linked_to_trigger'] = undefined;


ArduinoProperty.prototype['max_value'] = undefined;


ArduinoProperty.prototype['min_value'] = undefined;


ArduinoProperty.prototype['name'] = undefined;


ArduinoProperty.prototype['permission'] = undefined;


ArduinoProperty.prototype['persist'] = undefined;


ArduinoProperty.prototype['sync_id'] = undefined;


ArduinoProperty.prototype['tag'] = undefined;


ArduinoProperty.prototype['thing_id'] = undefined;


ArduinoProperty.prototype['thing_name'] = undefined;


ArduinoProperty.prototype['type'] = undefined;


ArduinoProperty.prototype['update_parameter'] = undefined;


ArduinoProperty.prototype['update_strategy'] = undefined;


ArduinoProperty.prototype['updated_at'] = undefined;


ArduinoProperty.prototype['value_updated_at'] = undefined;


ArduinoProperty.prototype['variable_name'] = undefined;






export default ArduinoProperty;

