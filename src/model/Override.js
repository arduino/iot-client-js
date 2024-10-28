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
 * The Override model module.
 * @module model/Override
 * @version 3.0.0
 */
class Override {
    /**
     * Constructs a new <code>Override</code>.
     * @alias module:model/Override
     * @param newThingId {String} The id of the new thing to link
     * @param oldThingId {String} The id of the thing to override
     */
    constructor(newThingId, oldThingId) { 
        
        Override.initialize(this, newThingId, oldThingId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, newThingId, oldThingId) { 
        obj['new_thing_id'] = newThingId;
        obj['old_thing_id'] = oldThingId;
    }

    /**
     * Constructs a <code>Override</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Override} obj Optional instance to populate.
     * @return {module:model/Override} The populated <code>Override</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Override();

            if (data.hasOwnProperty('new_thing_id')) {
                obj['new_thing_id'] = ApiClient.convertToType(data['new_thing_id'], 'String');
            }
            if (data.hasOwnProperty('old_thing_id')) {
                obj['old_thing_id'] = ApiClient.convertToType(data['old_thing_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Override</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Override</code>.
     */
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

/**
 * The id of the new thing to link
 * @member {String} new_thing_id
 */
Override.prototype['new_thing_id'] = undefined;

/**
 * The id of the thing to override
 * @member {String} old_thing_id
 */
Override.prototype['old_thing_id'] = undefined;






export default Override;

