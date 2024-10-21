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
import from openapi_client.models.batch_query_raw_response_series_media_v1 import BatchQueryRawResponseSeriesMediaV1 from './from openapi_client.models.batch_query_raw_response_series_media_v1 import BatchQueryRawResponseSeriesMediaV1';


class ArduinoSeriesRawResponse {
    
    constructor() { 
        ArduinoSeriesRawResponse.initialize(this);
    }

    
    static initialize(obj) { 
        obj['count_values'] = count_values;
        obj['from_date'] = from_date;
        obj['message'] = '';
        obj['query'] = query;
        obj['resp_version'] = resp_version;
        obj['series'] = series;
        obj['sort'] = sort;
        obj['status'] = status;
        obj['times'] = times;
        obj['to_date'] = to_date;
        obj['values'] = values;
    }

    
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArduinoSeriesRawResponse();

            if (data.hasOwnProperty('count_values')) {
                obj['count_values'] = data.count_values;
            }
            if (data.hasOwnProperty('from_date')) {
                obj['from_date'] = data.from_date;
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = data.message;
            }
            if (data.hasOwnProperty('property_id')) {
                obj['property_id'] = data.property_id;
            }
            if (data.hasOwnProperty('property_name')) {
                obj['property_name'] = data.property_name;
            }
            if (data.hasOwnProperty('property_type')) {
                obj['property_type'] = data.property_type;
            }
            if (data.hasOwnProperty('query')) {
                obj['query'] = data.query;
            }
            if (data.hasOwnProperty('resp_version')) {
                obj['resp_version'] = data.resp_version;
            }
            if (data.hasOwnProperty('series')) {
                obj['series'] = data.series;
            }
            if (data.hasOwnProperty('series_limit')) {
                obj['series_limit'] = data.series_limit;
            }
            if (data.hasOwnProperty('sort')) {
                obj['sort'] = data.sort;
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = data.status;
            }
            if (data.hasOwnProperty('thing_id')) {
                obj['thing_id'] = data.thing_id;
            }
            if (data.hasOwnProperty('times')) {
                obj['times'] = data.times;
            }
            if (data.hasOwnProperty('to_date')) {
                obj['to_date'] = data.to_date;
            }
            if (data.hasOwnProperty('values')) {
                obj['values'] = data.values;
            }
        }
        return obj;
    }

    
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ArduinoSeriesRawResponse.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }
        // ensure the json data is a string
        if (data['property_id'] && !(typeof data['property_id'] === 'string' || data['property_id'] instanceof String)) {
            throw new Error("Expected the field `property_id` to be a primitive type in the JSON string but got " + data['property_id']);
        }
        // ensure the json data is a string
        if (data['property_name'] && !(typeof data['property_name'] === 'string' || data['property_name'] instanceof String)) {
            throw new Error("Expected the field `property_name` to be a primitive type in the JSON string but got " + data['property_name']);
        }
        // ensure the json data is a string
        if (data['property_type'] && !(typeof data['property_type'] === 'string' || data['property_type'] instanceof String)) {
            throw new Error("Expected the field `property_type` to be a primitive type in the JSON string but got " + data['property_type']);
        }
        // ensure the json data is a string
        if (data['query'] && !(typeof data['query'] === 'string' || data['query'] instanceof String)) {
            throw new Error("Expected the field `query` to be a primitive type in the JSON string but got " + data['query']);
        }
        // validate the optional field `series`
        if (data['series']) { // data not null
          BatchQueryRawResponseSeriesMediaV1.validateJSON(data['series']);
        }
        // ensure the json data is a string
        if (data['sort'] && !(typeof data['sort'] === 'string' || data['sort'] instanceof String)) {
            throw new Error("Expected the field `sort` to be a primitive type in the JSON string but got " + data['sort']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // ensure the json data is a string
        if (data['thing_id'] && !(typeof data['thing_id'] === 'string' || data['thing_id'] instanceof String)) {
            throw new Error("Expected the field `thing_id` to be a primitive type in the JSON string but got " + data['thing_id']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['times'])) {
            throw new Error("Expected the field `times` to be an array in the JSON data but got " + data['times']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['values'])) {
            throw new Error("Expected the field `values` to be an array in the JSON data but got " + data['values']);
        }

        return true;
    }


}

ArduinoSeriesRawResponse.RequiredProperties = ["count_values", "from_date", "query", "resp_version", "series", "sort", "status", "times", "to_date", "values"];


ArduinoSeriesRawResponse.prototype['count_values'] = undefined;


ArduinoSeriesRawResponse.prototype['from_date'] = undefined;


ArduinoSeriesRawResponse.prototype['message'] = '';


ArduinoSeriesRawResponse.prototype['property_id'] = undefined;


ArduinoSeriesRawResponse.prototype['property_name'] = undefined;


ArduinoSeriesRawResponse.prototype['property_type'] = undefined;


ArduinoSeriesRawResponse.prototype['query'] = undefined;


ArduinoSeriesRawResponse.prototype['resp_version'] = undefined;


ArduinoSeriesRawResponse.prototype['series'] = undefined;


ArduinoSeriesRawResponse.prototype['series_limit'] = undefined;


ArduinoSeriesRawResponse.prototype['sort'] = undefined;


ArduinoSeriesRawResponse.prototype['status'] = undefined;


ArduinoSeriesRawResponse.prototype['thing_id'] = undefined;


ArduinoSeriesRawResponse.prototype['times'] = undefined;


ArduinoSeriesRawResponse.prototype['to_date'] = undefined;


ArduinoSeriesRawResponse.prototype['values'] = undefined;






ArduinoSeriesRawResponse['SortEnum'] = {

    
    "&#39;ASC&#39;": 'ASC',

    
    "&#39;DESC&#39;": 'DESC'
};



export default ArduinoSeriesRawResponse;

