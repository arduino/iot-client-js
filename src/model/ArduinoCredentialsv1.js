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
 * The ArduinoCredentialsv1 model module.
 * @module model/ArduinoCredentialsv1
 * @version 3.0.0
 */
class ArduinoCredentialsv1 {
    /**
     * Constructs a new <code>ArduinoCredentialsv1</code>.
     * ArduinoCredentialsv1 media type (default view)
     * @alias module:model/ArduinoCredentialsv1
     * @param friendlyName {String} Friendly name
     * @param required {Boolean} Tell if the parameter is required or not
     * @param secretName {String} The secret parameter name
     * @param sensitive {Boolean} Tell if the field is sensitive
     */
    constructor(friendlyName, required, secretName, sensitive) { 
        
        ArduinoCredentialsv1.initialize(this, friendlyName, required, secretName, sensitive);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, friendlyName, required, secretName, sensitive) { 
        obj['friendly_name'] = friendlyName;
        obj['required'] = required;
        obj['secret_name'] = secretName;
        obj['sensitive'] = sensitive;
    }

    /**
     * Constructs a <code>ArduinoCredentialsv1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArduinoCredentialsv1} obj Optional instance to populate.
     * @return {module:model/ArduinoCredentialsv1} The populated <code>ArduinoCredentialsv1</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArduinoCredentialsv1();

            if (data.hasOwnProperty('friendly_name')) {
                obj['friendly_name'] = ApiClient.convertToType(data['friendly_name'], 'String');
            }
            if (data.hasOwnProperty('required')) {
                obj['required'] = ApiClient.convertToType(data['required'], 'Boolean');
            }
            if (data.hasOwnProperty('secret_name')) {
                obj['secret_name'] = ApiClient.convertToType(data['secret_name'], 'String');
            }
            if (data.hasOwnProperty('sensitive')) {
                obj['sensitive'] = ApiClient.convertToType(data['sensitive'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ArduinoCredentialsv1</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ArduinoCredentialsv1</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ArduinoCredentialsv1.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['friendly_name'] && !(typeof data['friendly_name'] === 'string' || data['friendly_name'] instanceof String)) {
            throw new Error("Expected the field `friendly_name` to be a primitive type in the JSON string but got " + data['friendly_name']);
        }
        // ensure the json data is a string
        if (data['secret_name'] && !(typeof data['secret_name'] === 'string' || data['secret_name'] instanceof String)) {
            throw new Error("Expected the field `secret_name` to be a primitive type in the JSON string but got " + data['secret_name']);
        }

        return true;
    }


}

ArduinoCredentialsv1.RequiredProperties = ["friendly_name", "required", "secret_name", "sensitive"];

/**
 * Friendly name
 * @member {String} friendly_name
 */
ArduinoCredentialsv1.prototype['friendly_name'] = undefined;

/**
 * Tell if the parameter is required or not
 * @member {Boolean} required
 */
ArduinoCredentialsv1.prototype['required'] = undefined;

/**
 * The secret parameter name
 * @member {String} secret_name
 */
ArduinoCredentialsv1.prototype['secret_name'] = undefined;

/**
 * Tell if the field is sensitive
 * @member {Boolean} sensitive
 */
ArduinoCredentialsv1.prototype['sensitive'] = undefined;






export default ArduinoCredentialsv1;

