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
import ArduinoDevicev2propertyvalueValue from './ArduinoDevicev2propertyvalueValue';

/**
 * The ArduinoDevicev2propertyvalue model module.
 * @module model/ArduinoDevicev2propertyvalue
 * @version 2.0.0
 */
class ArduinoDevicev2propertyvalue {
    /**
     * Constructs a new <code>ArduinoDevicev2propertyvalue</code>.
     * ArduinoDevicev2propertyvalue media type (default view)
     * @alias module:model/ArduinoDevicev2propertyvalue
     */
    constructor() { 
        
        ArduinoDevicev2propertyvalue.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ArduinoDevicev2propertyvalue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArduinoDevicev2propertyvalue} obj Optional instance to populate.
     * @return {module:model/ArduinoDevicev2propertyvalue} The populated <code>ArduinoDevicev2propertyvalue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArduinoDevicev2propertyvalue();

            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ArduinoDevicev2propertyvalueValue.constructFromObject(data['value']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ArduinoDevicev2propertyvalue</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ArduinoDevicev2propertyvalue</code>.
     */
    static validateJSON(data) {
        // validate the optional field `value`
        if (data['value']) { // data not null
          ArduinoDevicev2propertyvalueValue.validateJSON(data['value']);
        }

        return true;
    }


}



/**
 * @member {Date} created_at
 */
ArduinoDevicev2propertyvalue.prototype['created_at'] = undefined;

/**
 * @member {module:model/ArduinoDevicev2propertyvalueValue} value
 */
ArduinoDevicev2propertyvalue.prototype['value'] = undefined;






export default ArduinoDevicev2propertyvalue;

