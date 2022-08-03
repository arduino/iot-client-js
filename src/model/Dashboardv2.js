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
import Widget from './Widget';

/**
 * The Dashboardv2 model module.
 * @module model/Dashboardv2
 * @version 1.4.2
 */
class Dashboardv2 {
    /**
     * Constructs a new <code>Dashboardv2</code>.
     * DashboardV2Payload describes a dashboard
     * @alias module:model/Dashboardv2
     */
    constructor() { 
        
        Dashboardv2.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Dashboardv2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Dashboardv2} obj Optional instance to populate.
     * @return {module:model/Dashboardv2} The populated <code>Dashboardv2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Dashboardv2();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('widgets')) {
                obj['widgets'] = ApiClient.convertToType(data['widgets'], [Widget]);
            }
        }
        return obj;
    }


}

/**
 * The friendly name of the dashboard
 * @member {String} name
 */
Dashboardv2.prototype['name'] = undefined;

/**
 * Widgets attached to this dashboard
 * @member {Array.<module:model/Widget>} widgets
 */
Dashboardv2.prototype['widgets'] = undefined;






export default Dashboardv2;

