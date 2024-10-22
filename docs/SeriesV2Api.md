# ArduinoIotClient.SeriesV2Api

All URIs are relative to *https://api2.arduino.cc/iot*

Method | HTTP request | Description
------------- | ------------- | -------------
[**seriesV2BatchQuery**](SeriesV2Api.md#seriesV2BatchQuery) | **POST** /iot/v2/series/batch_query | batch_query series_v2
[**seriesV2BatchQueryRaw**](SeriesV2Api.md#seriesV2BatchQueryRaw) | **POST** /iot/v2/series/batch_query_raw | batch_query_raw series_v2
[**seriesV2BatchQueryRawLastValue**](SeriesV2Api.md#seriesV2BatchQueryRawLastValue) | **POST** /iot/v2/series/batch_query_raw/lastvalue | batch_query_raw_last_value series_v2
[**seriesV2BatchQuerySampling**](SeriesV2Api.md#seriesV2BatchQuerySampling) | **POST** /iot/v2/series/batch_query_sampling | batch_query_sampling series_v2
[**seriesV2HistoricData**](SeriesV2Api.md#seriesV2HistoricData) | **POST** /iot/v2/series/historic_data | historic_data series_v2



## seriesV2BatchQuery

> ArduinoSeriesBatch seriesV2BatchQuery(batchQueryRequestsMediaV1, opts)

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
let batchQueryRequestsMediaV1 = new ArduinoIotClient.BatchQueryRequestsMediaV1(); // BatchQueryRequestsMediaV1 | 
let opts = {
  'xOrganization': "xOrganization_example" // String | 
};
apiInstance.seriesV2BatchQuery(batchQueryRequestsMediaV1, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batchQueryRequestsMediaV1** | [**BatchQueryRequestsMediaV1**](BatchQueryRequestsMediaV1.md)|  | 
 **xOrganization** | **String**|  | [optional] 

### Return type

[**ArduinoSeriesBatch**](ArduinoSeriesBatch.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/vnd.arduino.series.batch+json, application/vnd.goa.error+json


## seriesV2BatchQueryRaw

> ArduinoSeriesRawBatch seriesV2BatchQueryRaw(batchQueryRawRequestsMediaV1, opts)

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
let batchQueryRawRequestsMediaV1 = new ArduinoIotClient.BatchQueryRawRequestsMediaV1(); // BatchQueryRawRequestsMediaV1 | 
let opts = {
  'xOrganization': "xOrganization_example" // String | 
};
apiInstance.seriesV2BatchQueryRaw(batchQueryRawRequestsMediaV1, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batchQueryRawRequestsMediaV1** | [**BatchQueryRawRequestsMediaV1**](BatchQueryRawRequestsMediaV1.md)|  | 
 **xOrganization** | **String**|  | [optional] 

### Return type

[**ArduinoSeriesRawBatch**](ArduinoSeriesRawBatch.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/vnd.arduino.series.raw.batch+json, application/vnd.goa.error+json


## seriesV2BatchQueryRawLastValue

> ArduinoSeriesRawBatchLastvalue seriesV2BatchQueryRawLastValue(batchLastValueRequestsMediaV1, opts)

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
let batchLastValueRequestsMediaV1 = new ArduinoIotClient.BatchLastValueRequestsMediaV1(); // BatchLastValueRequestsMediaV1 | 
let opts = {
  'xOrganization': "xOrganization_example" // String | 
};
apiInstance.seriesV2BatchQueryRawLastValue(batchLastValueRequestsMediaV1, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batchLastValueRequestsMediaV1** | [**BatchLastValueRequestsMediaV1**](BatchLastValueRequestsMediaV1.md)|  | 
 **xOrganization** | **String**|  | [optional] 

### Return type

[**ArduinoSeriesRawBatchLastvalue**](ArduinoSeriesRawBatchLastvalue.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/vnd.arduino.series.raw.batch.lastvalue+json, application/vnd.goa.error+json


## seriesV2BatchQuerySampling

> ArduinoSeriesBatchSampled seriesV2BatchQuerySampling(batchQuerySampledRequestsMediaV1, opts)

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
let batchQuerySampledRequestsMediaV1 = new ArduinoIotClient.BatchQuerySampledRequestsMediaV1(); // BatchQuerySampledRequestsMediaV1 | 
let opts = {
  'xOrganization': "xOrganization_example" // String | 
};
apiInstance.seriesV2BatchQuerySampling(batchQuerySampledRequestsMediaV1, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batchQuerySampledRequestsMediaV1** | [**BatchQuerySampledRequestsMediaV1**](BatchQuerySampledRequestsMediaV1.md)|  | 
 **xOrganization** | **String**|  | [optional] 

### Return type

[**ArduinoSeriesBatchSampled**](ArduinoSeriesBatchSampled.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/vnd.arduino.series.batch.sampled+json, application/vnd.goa.error+json


## seriesV2HistoricData

> seriesV2HistoricData(historicDataRequest, opts)

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
let historicDataRequest = new ArduinoIotClient.HistoricDataRequest(); // HistoricDataRequest | 
let opts = {
  'xOrganization': "xOrganization_example" // String | 
};
apiInstance.seriesV2HistoricData(historicDataRequest, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **historicDataRequest** | [**HistoricDataRequest**](HistoricDataRequest.md)|  | 
 **xOrganization** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/vnd.goa.error+json

