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
import ArduinoLorafreqplanv1 from './ArduinoLorafreqplanv1';

/**
 * The ArduinoLorafreqplansv1 model module.
 * @module model/ArduinoLorafreqplansv1
 * @version 2.0.0
 */
class ArduinoLorafreqplansv1 {
    /**
     * Constructs a new <code>ArduinoLorafreqplansv1</code>.
     * ArduinoLorafreqplansv1 media type (default view)
     * @alias module:model/ArduinoLorafreqplansv1
     */
    constructor() { 
        
        ArduinoLorafreqplansv1.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ArduinoLorafreqplansv1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArduinoLorafreqplansv1} obj Optional instance to populate.
     * @return {module:model/ArduinoLorafreqplansv1} The populated <code>ArduinoLorafreqplansv1</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArduinoLorafreqplansv1();

            if (data.hasOwnProperty('frequency_plans')) {
                obj['frequency_plans'] = ApiClient.convertToType(data['frequency_plans'], [ArduinoLorafreqplanv1]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ArduinoLorafreqplansv1</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ArduinoLorafreqplansv1</code>.
     */
    static validateJSON(data) {
        if (data['frequency_plans']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['frequency_plans'])) {
                throw new Error("Expected the field `frequency_plans` to be an array in the JSON data but got " + data['frequency_plans']);
            }
            // validate the optional field `frequency_plans` (array)
            for (const item of data['frequency_plans']) {
                ArduinoLorafreqplanv1.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * The list of frequency plans
 * @member {Array.<module:model/ArduinoLorafreqplanv1>} frequency_plans
 */
ArduinoLorafreqplansv1.prototype['frequency_plans'] = undefined;






export default ArduinoLorafreqplansv1;

