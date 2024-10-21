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
import from openapi_client.models.arduino_devicev2propertyvalue_value_statistics import ArduinoDevicev2propertyvalueValueStatistics from './from openapi_client.models.arduino_devicev2propertyvalue_value_statistics import ArduinoDevicev2propertyvalueValueStatistics';


class ArduinoDevicev2propertyvalueValue {
    
    constructor() { 
        ArduinoDevicev2propertyvalueValue.initialize(this);
    }

    
    static initialize(obj) { 
    }

    
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArduinoDevicev2propertyvalueValue();

            if (data.hasOwnProperty('payload')) {
                obj['payload'] = data.payload;
            }
            if (data.hasOwnProperty('seqno')) {
                obj['seqno'] = data.seqno;
            }
            if (data.hasOwnProperty('statistics')) {
                obj['statistics'] = data.statistics;
            }
        }
        return obj;
    }

    
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['payload'] && !(typeof data['payload'] === 'string' || data['payload'] instanceof String)) {
            throw new Error("Expected the field `payload` to be a primitive type in the JSON string but got " + data['payload']);
        }
        // validate the optional field `statistics`
        if (data['statistics']) { // data not null
          ArduinoDevicev2propertyvalueValueStatistics.validateJSON(data['statistics']);
        }

        return true;
    }


}




ArduinoDevicev2propertyvalueValue.prototype['payload'] = undefined;


ArduinoDevicev2propertyvalueValue.prototype['seqno'] = undefined;


ArduinoDevicev2propertyvalueValue.prototype['statistics'] = undefined;






export default ArduinoDevicev2propertyvalueValue;

