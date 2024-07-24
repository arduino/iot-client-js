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

/**
 * The UpdateSketch model module.
 * @module model/UpdateSketch
 * @version 2.0.5
 */
class UpdateSketch {
    /**
     * Constructs a new <code>UpdateSketch</code>.
     * @alias module:model/UpdateSketch
     */
    constructor() { 
        
        UpdateSketch.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateSketch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateSketch} obj Optional instance to populate.
     * @return {module:model/UpdateSketch} The populated <code>UpdateSketch</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateSketch();

            if (data.hasOwnProperty('sketch_version')) {
                obj['sketch_version'] = ApiClient.convertToType(data['sketch_version'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdateSketch</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateSketch</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['sketch_version'] && !(typeof data['sketch_version'] === 'string' || data['sketch_version'] instanceof String)) {
            throw new Error("Expected the field `sketch_version` to be a primitive type in the JSON string but got " + data['sketch_version']);
        }

        return true;
    }


}



/**
 * The autogenerated sketch version
 * @member {module:model/UpdateSketch.SketchVersionEnum} sketch_version
 */
UpdateSketch.prototype['sketch_version'] = undefined;





/**
 * Allowed values for the <code>sketch_version</code> property.
 * @enum {String}
 * @readonly
 */
UpdateSketch['SketchVersionEnum'] = {

    /**
     * value: "v1"
     * @const
     */
    "v1": "v1",

    /**
     * value: "v2"
     * @const
     */
    "v2": "v2"
};



export default UpdateSketch;

