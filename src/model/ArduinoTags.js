/**
 * Arduino IoT Cloud API
 *  Provides a set of endpoints to manage Arduino IoT Cloud **Devices**, **Things**, **Properties** and **Timeseries**. This API can be called just with any HTTP Client, or using one of these clients:  * [Javascript NPM package](https://www.npmjs.com/package/@arduino/arduino-iot-client)  * [Python PYPI Package](https://pypi.org/project/arduino-iot-client/)  * [Golang Module](https://github.com/arduino/iot-client-go)
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
 * @version 1.4.2
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


}

/**
 * @member {Array.<module:model/Tag>} tags
 */
ArduinoTags.prototype['tags'] = undefined;






export default ArduinoTags;

