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
 * The Widgetlink model module.
 * @module model/Widgetlink
 * @version 1.3.9
 */
class Widgetlink {
    /**
     * Constructs a new <code>Widgetlink</code>.
     * @alias module:model/Widgetlink
     */
    constructor() { 
        
        Widgetlink.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Widgetlink</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Widgetlink} obj Optional instance to populate.
     * @return {module:model/Widgetlink} The populated <code>Widgetlink</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Widgetlink();

            if (data.hasOwnProperty('variables')) {
                obj['variables'] = ApiClient.convertToType(data['variables'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} variables
 */
Widgetlink.prototype['variables'] = undefined;






export default Widgetlink;

