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
import ArduinoSeriesRawLastValueResponse from './ArduinoSeriesRawLastValueResponse';

/**
 * The ArduinoSeriesRawBatchLastvalue model module.
 * @module model/ArduinoSeriesRawBatchLastvalue
 * @version 3.0.0
 */
class ArduinoSeriesRawBatchLastvalue {
    /**
     * Constructs a new <code>ArduinoSeriesRawBatchLastvalue</code>.
     * ArduinoSeriesRawBatchLastvalue media type (default view)
     * @alias module:model/ArduinoSeriesRawBatchLastvalue
     * @param responses {Array.<module:model/ArduinoSeriesRawLastValueResponse>} Responses of the request
     * @param status {String} Status of the response
     */
    constructor(responses, status) { 
        
        ArduinoSeriesRawBatchLastvalue.initialize(this, responses, status);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, responses, status) { 
        obj['responses'] = responses;
        obj['status'] = status;
    }

    /**
     * Constructs a <code>ArduinoSeriesRawBatchLastvalue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArduinoSeriesRawBatchLastvalue} obj Optional instance to populate.
     * @return {module:model/ArduinoSeriesRawBatchLastvalue} The populated <code>ArduinoSeriesRawBatchLastvalue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArduinoSeriesRawBatchLastvalue();

            if (data.hasOwnProperty('responses')) {
                obj['responses'] = ApiClient.convertToType(data['responses'], [ArduinoSeriesRawLastValueResponse]);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ArduinoSeriesRawBatchLastvalue</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ArduinoSeriesRawBatchLastvalue</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ArduinoSeriesRawBatchLastvalue.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['responses']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['responses'])) {
                throw new Error("Expected the field `responses` to be an array in the JSON data but got " + data['responses']);
            }
            // validate the optional field `responses` (array)
            for (const item of data['responses']) {
                ArduinoSeriesRawLastValueResponse.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }

        return true;
    }


}

ArduinoSeriesRawBatchLastvalue.RequiredProperties = ["responses", "status"];

/**
 * Responses of the request
 * @member {Array.<module:model/ArduinoSeriesRawLastValueResponse>} responses
 */
ArduinoSeriesRawBatchLastvalue.prototype['responses'] = undefined;

/**
 * Status of the response
 * @member {String} status
 */
ArduinoSeriesRawBatchLastvalue.prototype['status'] = undefined;






export default ArduinoSeriesRawBatchLastvalue;

