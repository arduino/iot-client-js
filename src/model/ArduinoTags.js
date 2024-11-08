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
import Tag from './Tag';

/**
 * The ArduinoTags model module.
 * @module model/ArduinoTags
 * @version 3.0.0
 */
class ArduinoTags {
    /**
     * Constructs a new <code>ArduinoTags</code>.
     * ArduinoTags media type (default view)
     * @alias module:model/ArduinoTags
     * @param tags {Array.<module:model/Tag>} 
     */
    constructor(tags) { 
        
        ArduinoTags.initialize(this, tags);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, tags) { 
        obj['tags'] = tags;
    }

    /**
     * Constructs a <code>ArduinoTags</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArduinoTags} obj Optional instance to populate.
     * @return {module:model/ArduinoTags} The populated <code>ArduinoTags</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArduinoTags();

            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], [Tag]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ArduinoTags</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ArduinoTags</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ArduinoTags.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
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

        return true;
    }


}

ArduinoTags.RequiredProperties = ["tags"];

/**
 * @member {Array.<module:model/Tag>} tags
 */
ArduinoTags.prototype['tags'] = undefined;






export default ArduinoTags;

