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
 * The ArduinoLorafreqplanv1 model module.
 * @module model/ArduinoLorafreqplanv1
 * @version 1.4.5
 */
class ArduinoLorafreqplanv1 {
    /**
     * Constructs a new <code>ArduinoLorafreqplanv1</code>.
     * ArduinoLorafreqplanv1 media type (default view)
     * @alias module:model/ArduinoLorafreqplanv1
     * @param advanced {Boolean} Frequency plan only for advanced users
     * @param id {String} The ID of the frequency paln
     * @param name {String} The name of the frequency plan
     */
    constructor(advanced, id, name) { 
        
        ArduinoLorafreqplanv1.initialize(this, advanced, id, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, advanced, id, name) { 
        obj['advanced'] = advanced;
        obj['id'] = id;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>ArduinoLorafreqplanv1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArduinoLorafreqplanv1} obj Optional instance to populate.
     * @return {module:model/ArduinoLorafreqplanv1} The populated <code>ArduinoLorafreqplanv1</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArduinoLorafreqplanv1();

            if (data.hasOwnProperty('advanced')) {
                obj['advanced'] = ApiClient.convertToType(data['advanced'], 'Boolean');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Frequency plan only for advanced users
 * @member {Boolean} advanced
 */
ArduinoLorafreqplanv1.prototype['advanced'] = undefined;

/**
 * The ID of the frequency paln
 * @member {String} id
 */
ArduinoLorafreqplanv1.prototype['id'] = undefined;

/**
 * The name of the frequency plan
 * @member {String} name
 */
ArduinoLorafreqplanv1.prototype['name'] = undefined;






export default ArduinoLorafreqplanv1;

