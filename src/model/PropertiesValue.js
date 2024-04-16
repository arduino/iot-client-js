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
 * The PropertiesValue model module.
 * @module model/PropertiesValue
 * @version 2.0.2
 */
class PropertiesValue {
    /**
     * Constructs a new <code>PropertiesValue</code>.
     * @alias module:model/PropertiesValue
     * @param name {String} The name of the property
     * @param type {module:model/PropertiesValue.TypeEnum} The type of the property
     * @param value {Object} The last value of the property
     */
    constructor(name, type, value) { 
        
        PropertiesValue.initialize(this, name, type, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, type, value) { 
        obj['name'] = name;
        obj['type'] = type || 'infer';
        obj['value'] = value;
    }

    /**
     * Constructs a <code>PropertiesValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PropertiesValue} obj Optional instance to populate.
     * @return {module:model/PropertiesValue} The populated <code>PropertiesValue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PropertiesValue();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PropertiesValue</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PropertiesValue</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PropertiesValue.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }

        return true;
    }


}

PropertiesValue.RequiredProperties = ["name", "type", "value"];

/**
 * The name of the property
 * @member {String} name
 */
PropertiesValue.prototype['name'] = undefined;

/**
 * The type of the property
 * @member {module:model/PropertiesValue.TypeEnum} type
 * @default 'infer'
 */
PropertiesValue.prototype['type'] = 'infer';

/**
 * The last value of the property
 * @member {Object} value
 */
PropertiesValue.prototype['value'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
PropertiesValue['TypeEnum'] = {

    /**
     * value: "infer"
     * @const
     */
    "infer": "infer",

    /**
     * value: "base64"
     * @const
     */
    "base64": "base64",

    /**
     * value: "hex"
     * @const
     */
    "hex": "hex",

    /**
     * value: "json"
     * @const
     */
    "json": "json"
};



export default PropertiesValue;

