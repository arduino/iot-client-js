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
 * The ThingClone model module.
 * @module model/ThingClone
 * @version 3.0.0
 */
class ThingClone {
    /**
     * Constructs a new <code>ThingClone</code>.
     * Payload to clone a new thing from an existing one
     * @alias module:model/ThingClone
     * @param name {String} The friendly name of the thing
     */
    constructor(name) { 
        
        ThingClone.initialize(this, name);
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
     * Constructs a <code>ThingClone</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ThingClone} obj Optional instance to populate.
     * @return {module:model/ThingClone} The populated <code>ThingClone</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ThingClone();

            if (data.hasOwnProperty('include_tags')) {
                obj['include_tags'] = ApiClient.convertToType(data['include_tags'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ThingClone</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ThingClone</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ThingClone.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}

ThingClone.RequiredProperties = ["name"];

/**
 * Include tags in clone procedure
 * @member {Boolean} include_tags
 */
ThingClone.prototype['include_tags'] = undefined;

/**
 * The friendly name of the thing
 * @member {String} name
 */
ThingClone.prototype['name'] = undefined;






export default ThingClone;

