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
import ArduinoSeriesResponse from './ArduinoSeriesResponse';

/**
 * The ArduinoSeriesBatch model module.
 * @module model/ArduinoSeriesBatch
 * @version 2.0.0
 */
class ArduinoSeriesBatch {
    /**
     * Constructs a new <code>ArduinoSeriesBatch</code>.
     * ArduinoSeriesBatch media type (default view)
     * @alias module:model/ArduinoSeriesBatch
     * @param respVersion {Number} Response version
     * @param responses {Array.<module:model/ArduinoSeriesResponse>} Responses of the request
     */
    constructor(respVersion, responses) { 
        
        ArduinoSeriesBatch.initialize(this, respVersion, responses);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, respVersion, responses) { 
        obj['resp_version'] = respVersion;
        obj['responses'] = responses;
    }

    /**
     * Constructs a <code>ArduinoSeriesBatch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArduinoSeriesBatch} obj Optional instance to populate.
     * @return {module:model/ArduinoSeriesBatch} The populated <code>ArduinoSeriesBatch</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArduinoSeriesBatch();

            if (data.hasOwnProperty('resp_version')) {
                obj['resp_version'] = ApiClient.convertToType(data['resp_version'], 'Number');
            }
            if (data.hasOwnProperty('responses')) {
                obj['responses'] = ApiClient.convertToType(data['responses'], [ArduinoSeriesResponse]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ArduinoSeriesBatch</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ArduinoSeriesBatch</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ArduinoSeriesBatch.RequiredProperties) {
            if (!data[property]) {
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
                ArduinoSeriesResponse.validateJSON(item);
            };
        }

        return true;
    }


}

ArduinoSeriesBatch.RequiredProperties = ["resp_version", "responses"];

/**
 * Response version
 * @member {Number} resp_version
 */
ArduinoSeriesBatch.prototype['resp_version'] = undefined;

/**
 * Responses of the request
 * @member {Array.<module:model/ArduinoSeriesResponse>} responses
 */
ArduinoSeriesBatch.prototype['responses'] = undefined;






export default ArduinoSeriesBatch;

