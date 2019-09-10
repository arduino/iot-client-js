# IotApi.SeriesV1Api

All URIs are relative to *http://api-dev.arduino.cc/iot*

Method | HTTP request | Description
------------- | ------------- | -------------
[**seriesV1BatchQuery**](SeriesV1Api.md#seriesV1BatchQuery) | **POST** /v1/series/batch_query | batch_query series_v1
[**seriesV1BatchQueryRaw**](SeriesV1Api.md#seriesV1BatchQueryRaw) | **POST** /v1/series/batch_query_raw | batch_query_raw series_v1



## seriesV1BatchQuery

> ArduinoSeriesBatch seriesV1BatchQuery(batchQueryRequestsMediaV1)

batch_query series_v1

Returns the batch of time-series data

### Example

```javascript
import IotApi from 'iot_api';
let defaultClient = IotApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IotApi.SeriesV1Api();
let batchQueryRequestsMediaV1 = new IotApi.BatchQueryRequestsMediaV1(); // BatchQueryRequestsMediaV1 | 
apiInstance.seriesV1BatchQuery(batchQueryRequestsMediaV1).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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


## seriesV1BatchQueryRaw

> ArduinoSeriesRawBatch seriesV1BatchQueryRaw(batchQueryRawRequestsMediaV1)

batch_query_raw series_v1

Returns the batch of time-series data raw

### Example

```javascript
import IotApi from 'iot_api';
let defaultClient = IotApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IotApi.SeriesV1Api();
let batchQueryRawRequestsMediaV1 = new IotApi.BatchQueryRawRequestsMediaV1(); // BatchQueryRawRequestsMediaV1 | 
apiInstance.seriesV1BatchQueryRaw(batchQueryRawRequestsMediaV1).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

