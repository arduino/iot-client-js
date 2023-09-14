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


import ApiClient from "../ApiClient";
import ArduinoSeriesBatch from '../model/ArduinoSeriesBatch';
import ArduinoSeriesRawBatch from '../model/ArduinoSeriesRawBatch';
import ArduinoSeriesRawBatchLastvalue from '../model/ArduinoSeriesRawBatchLastvalue';
import BatchLastValueRequestsMediaV1 from '../model/BatchLastValueRequestsMediaV1';
import BatchQueryRawRequestsMediaV1 from '../model/BatchQueryRawRequestsMediaV1';
import BatchQueryRequestsMediaV1 from '../model/BatchQueryRequestsMediaV1';
import Error from '../model/Error';
import HistoricDataRequest from '../model/HistoricDataRequest';

/**
* SeriesV2 service.
* @module api/SeriesV2Api
* @version 1.4.5
*/
export default class SeriesV2Api {

    /**
    * Constructs a new SeriesV2Api. 
    * @alias module:api/SeriesV2Api
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * batch_query series_v2
     * Returns the batch of time-series data
     * @param {module:model/BatchQueryRequestsMediaV1} batchQueryRequestsMediaV1 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ArduinoSeriesBatch} and HTTP response
     */
    seriesV2BatchQueryWithHttpInfo(batchQueryRequestsMediaV1) {
      let postBody = batchQueryRequestsMediaV1;
      // verify the required parameter 'batchQueryRequestsMediaV1' is set
      if (batchQueryRequestsMediaV1 === undefined || batchQueryRequestsMediaV1 === null) {
        throw new Error("Missing the required parameter 'batchQueryRequestsMediaV1' when calling seriesV2BatchQuery");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = ArduinoSeriesBatch;
      return this.apiClient.callApi(
        '/v2/series/batch_query', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * batch_query series_v2
     * Returns the batch of time-series data
     * @param {module:model/BatchQueryRequestsMediaV1} batchQueryRequestsMediaV1 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ArduinoSeriesBatch}
     */
    seriesV2BatchQuery(batchQueryRequestsMediaV1) {
      return this.seriesV2BatchQueryWithHttpInfo(batchQueryRequestsMediaV1)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * batch_query_raw series_v2
     * Returns the batch of time-series data raw
     * @param {module:model/BatchQueryRawRequestsMediaV1} batchQueryRawRequestsMediaV1 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ArduinoSeriesRawBatch} and HTTP response
     */
    seriesV2BatchQueryRawWithHttpInfo(batchQueryRawRequestsMediaV1) {
      let postBody = batchQueryRawRequestsMediaV1;
      // verify the required parameter 'batchQueryRawRequestsMediaV1' is set
      if (batchQueryRawRequestsMediaV1 === undefined || batchQueryRawRequestsMediaV1 === null) {
        throw new Error("Missing the required parameter 'batchQueryRawRequestsMediaV1' when calling seriesV2BatchQueryRaw");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = ArduinoSeriesRawBatch;
      return this.apiClient.callApi(
        '/v2/series/batch_query_raw', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * batch_query_raw series_v2
     * Returns the batch of time-series data raw
     * @param {module:model/BatchQueryRawRequestsMediaV1} batchQueryRawRequestsMediaV1 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ArduinoSeriesRawBatch}
     */
    seriesV2BatchQueryRaw(batchQueryRawRequestsMediaV1) {
      return this.seriesV2BatchQueryRawWithHttpInfo(batchQueryRawRequestsMediaV1)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * batch_query_raw_last_value series_v2
     * Returns the batch of time-series data raw
     * @param {module:model/BatchLastValueRequestsMediaV1} batchLastValueRequestsMediaV1 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ArduinoSeriesRawBatchLastvalue} and HTTP response
     */
    seriesV2BatchQueryRawLastValueWithHttpInfo(batchLastValueRequestsMediaV1) {
      let postBody = batchLastValueRequestsMediaV1;
      // verify the required parameter 'batchLastValueRequestsMediaV1' is set
      if (batchLastValueRequestsMediaV1 === undefined || batchLastValueRequestsMediaV1 === null) {
        throw new Error("Missing the required parameter 'batchLastValueRequestsMediaV1' when calling seriesV2BatchQueryRawLastValue");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = ArduinoSeriesRawBatchLastvalue;
      return this.apiClient.callApi(
        '/v2/series/batch_query_raw/lastvalue', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * batch_query_raw_last_value series_v2
     * Returns the batch of time-series data raw
     * @param {module:model/BatchLastValueRequestsMediaV1} batchLastValueRequestsMediaV1 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ArduinoSeriesRawBatchLastvalue}
     */
    seriesV2BatchQueryRawLastValue(batchLastValueRequestsMediaV1) {
      return this.seriesV2BatchQueryRawLastValueWithHttpInfo(batchLastValueRequestsMediaV1)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * historic_data series_v2
     * Request sending of historical data of properties by email
     * @param {module:model/HistoricDataRequest} historicDataRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    seriesV2HistoricDataWithHttpInfo(historicDataRequest) {
      let postBody = historicDataRequest;
      // verify the required parameter 'historicDataRequest' is set
      if (historicDataRequest === undefined || historicDataRequest === null) {
        throw new Error("Missing the required parameter 'historicDataRequest' when calling seriesV2HistoricData");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/v2/series/historic_data', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * historic_data series_v2
     * Request sending of historical data of properties by email
     * @param {module:model/HistoricDataRequest} historicDataRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    seriesV2HistoricData(historicDataRequest) {
      return this.seriesV2HistoricDataWithHttpInfo(historicDataRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
