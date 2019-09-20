# IotApi.SeriesV2Api

All URIs are relative to *http://api-dev.arduino.cc/iot*

Method | HTTP request | Description
------------- | ------------- | -------------
[**seriesV2BatchQuery**](SeriesV2Api.md#seriesV2BatchQuery) | **POST** /v2/series/batch_query | batch_query series_v2
[**seriesV2BatchQueryRaw**](SeriesV2Api.md#seriesV2BatchQueryRaw) | **POST** /v2/series/batch_query_raw | batch_query_raw series_v2
[**seriesV2BatchQueryRawLastValue**](SeriesV2Api.md#seriesV2BatchQueryRawLastValue) | **POST** /v2/series/batch_query_raw/lastvalue | batch_query_raw_last_value series_v2



## seriesV2BatchQuery

> ArduinoSeriesBatch seriesV2BatchQuery(batchQueryRequestsMediaV1)

batch_query series_v2

Returns the batch of time-series data

### Example

```javascript
var IotApi = require('iot_api');
var defaultClient = IotApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new IotApi.SeriesV2Api();
var batchQueryRequestsMediaV1 = new IotApi.BatchQueryRequestsMediaV1(); // BatchQueryRequestsMediaV1 | 
apiInstance.seriesV2BatchQuery(batchQueryRequestsMediaV1).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batchQueryRequestsMediaV1** | [**BatchQueryRequestsMediaV1**](BatchQueryRequestsMediaV1.md)|  | 

### Return type

[**ArduinoSeriesBatch**](ArduinoSeriesBatch.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/vnd.arduino.series.batch+json, application/vnd.goa.error+json


## seriesV2BatchQueryRaw

> ArduinoSeriesRawBatch seriesV2BatchQueryRaw(batchQueryRawRequestsMediaV1)

batch_query_raw series_v2

Returns the batch of time-series data raw

### Example

```javascript
var IotApi = require('iot_api');
var defaultClient = IotApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new IotApi.SeriesV2Api();
var batchQueryRawRequestsMediaV1 = new IotApi.BatchQueryRawRequestsMediaV1(); // BatchQueryRawRequestsMediaV1 | 
apiInstance.seriesV2BatchQueryRaw(batchQueryRawRequestsMediaV1).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batchQueryRawRequestsMediaV1** | [**BatchQueryRawRequestsMediaV1**](BatchQueryRawRequestsMediaV1.md)|  | 

### Return type

[**ArduinoSeriesRawBatch**](ArduinoSeriesRawBatch.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/vnd.arduino.series.raw.batch+json, application/vnd.goa.error+json


## seriesV2BatchQueryRawLastValue

> ArduinoSeriesRawBatchLastvalue seriesV2BatchQueryRawLastValue(batchLastValueRequestsMediaV1)

batch_query_raw_last_value series_v2

Returns the batch of time-series data raw

### Example

```javascript
var IotApi = require('iot_api');
var defaultClient = IotApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new IotApi.SeriesV2Api();
var batchLastValueRequestsMediaV1 = new IotApi.BatchLastValueRequestsMediaV1(); // BatchLastValueRequestsMediaV1 | 
apiInstance.seriesV2BatchQueryRawLastValue(batchLastValueRequestsMediaV1).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batchLastValueRequestsMediaV1** | [**BatchLastValueRequestsMediaV1**](BatchLastValueRequestsMediaV1.md)|  | 

### Return type

[**ArduinoSeriesRawBatchLastvalue**](ArduinoSeriesRawBatchLastvalue.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/vnd.arduino.series.raw.batch.lastvalue+json, application/vnd.goa.error+json

