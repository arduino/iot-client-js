# ArduinoIotClient.SeriesV2Api

All URIs are relative to *https://api2.arduino.cc/iot*

Method | HTTP request | Description
------------- | ------------- | -------------
[**series_v2_batch_query**](SeriesV2Api.md#series_v2_batch_query) | **POST** /v2/series/batch_query | batch_query series_v2
[**series_v2_batch_query_raw**](SeriesV2Api.md#series_v2_batch_query_raw) | **POST** /v2/series/batch_query_raw | batch_query_raw series_v2
[**series_v2_batch_query_raw_last_value**](SeriesV2Api.md#series_v2_batch_query_raw_last_value) | **POST** /v2/series/batch_query_raw/lastvalue | batch_query_raw_last_value series_v2
[**series_v2_batch_query_sampling**](SeriesV2Api.md#series_v2_batch_query_sampling) | **POST** /v2/series/batch_query_sampling | batch_query_sampling series_v2
[**series_v2_historic_data**](SeriesV2Api.md#series_v2_historic_data) | **POST** /v2/series/historic_data | historic_data series_v2



## series_v2_batch_query

> ArduinoSeriesBatch series_v2_batch_query(batch_query_requests_media_v1, opts)

batch_query series_v2

Returns the batch of time-series aggregated samples

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.SeriesV2Api();
let batch_query_requests_media_v1 = openapi_client.BatchQueryRequestsMediaV1(); // BatchQueryRequestsMediaV1 | 
let opts = {
  'x_organization': 'x_organization_example' // str | 
};
apiInstance.series_v2_batch_query(batch_query_requests_media_v1, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batch_query_requests_media_v1** | [**BatchQueryRequestsMediaV1**](BatchQueryRequestsMediaV1.md)|  | 
 **x_organization** | **str**|  | [optional] 

### Return type

[**ArduinoSeriesBatch**](ArduinoSeriesBatch.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/vnd.arduino.series.batch+json, application/vnd.goa.error+json


## series_v2_batch_query_raw

> ArduinoSeriesRawBatch series_v2_batch_query_raw(batch_query_raw_requests_media_v1, opts)

batch_query_raw series_v2

Returns the batch of time-series raw samples

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.SeriesV2Api();
let batch_query_raw_requests_media_v1 = openapi_client.BatchQueryRawRequestsMediaV1(); // BatchQueryRawRequestsMediaV1 | 
let opts = {
  'x_organization': 'x_organization_example' // str | 
};
apiInstance.series_v2_batch_query_raw(batch_query_raw_requests_media_v1, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batch_query_raw_requests_media_v1** | [**BatchQueryRawRequestsMediaV1**](BatchQueryRawRequestsMediaV1.md)|  | 
 **x_organization** | **str**|  | [optional] 

### Return type

[**ArduinoSeriesRawBatch**](ArduinoSeriesRawBatch.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/vnd.arduino.series.raw.batch+json, application/vnd.goa.error+json


## series_v2_batch_query_raw_last_value

> ArduinoSeriesRawBatchLastvalue series_v2_batch_query_raw_last_value(batch_last_value_requests_media_v1, opts)

batch_query_raw_last_value series_v2

Returns the batch of time-series data raw

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.SeriesV2Api();
let batch_last_value_requests_media_v1 = openapi_client.BatchLastValueRequestsMediaV1(); // BatchLastValueRequestsMediaV1 | 
let opts = {
  'x_organization': 'x_organization_example' // str | 
};
apiInstance.series_v2_batch_query_raw_last_value(batch_last_value_requests_media_v1, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batch_last_value_requests_media_v1** | [**BatchLastValueRequestsMediaV1**](BatchLastValueRequestsMediaV1.md)|  | 
 **x_organization** | **str**|  | [optional] 

### Return type

[**ArduinoSeriesRawBatchLastvalue**](ArduinoSeriesRawBatchLastvalue.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/vnd.arduino.series.raw.batch.lastvalue+json, application/vnd.goa.error+json


## series_v2_batch_query_sampling

> ArduinoSeriesBatchSampled series_v2_batch_query_sampling(batch_query_sampled_requests_media_v1, opts)

batch_query_sampling series_v2

Returns a batch of time-series sampled samples. To be used for types that does not support mathematic aggregation. Types supported: strings, complex types.

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.SeriesV2Api();
let batch_query_sampled_requests_media_v1 = openapi_client.BatchQuerySampledRequestsMediaV1(); // BatchQuerySampledRequestsMediaV1 | 
let opts = {
  'x_organization': 'x_organization_example' // str | 
};
apiInstance.series_v2_batch_query_sampling(batch_query_sampled_requests_media_v1, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batch_query_sampled_requests_media_v1** | [**BatchQuerySampledRequestsMediaV1**](BatchQuerySampledRequestsMediaV1.md)|  | 
 **x_organization** | **str**|  | [optional] 

### Return type

[**ArduinoSeriesBatchSampled**](ArduinoSeriesBatchSampled.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/vnd.arduino.series.batch.sampled+json, application/vnd.goa.error+json


## series_v2_historic_data

> series_v2_historic_data(historic_data_request, opts)

historic_data series_v2

Request sending of historical data of properties by email

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.SeriesV2Api();
let historic_data_request = openapi_client.HistoricDataRequest(); // HistoricDataRequest | 
let opts = {
  'x_organization': 'x_organization_example' // str | 
};
apiInstance.series_v2_historic_data(historic_data_request, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **historic_data_request** | [**HistoricDataRequest**](HistoricDataRequest.md)|  | 
 **x_organization** | **str**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/vnd.goa.error+json

