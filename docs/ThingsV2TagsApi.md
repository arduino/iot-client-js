# ArduinoIotClient.ThingsV2TagsApi

All URIs are relative to *https://api2.arduino.cc*

Method | HTTP request | Description
------------- | ------------- | -------------
[**thingsV2TagsDelete**](ThingsV2TagsApi.md#thingsV2TagsDelete) | **DELETE** /iot/v2/things/{id}/tags/{key} | delete things_v2_tags
[**thingsV2TagsList**](ThingsV2TagsApi.md#thingsV2TagsList) | **GET** /iot/v2/things/{id}/tags | list things_v2_tags
[**thingsV2TagsUpsert**](ThingsV2TagsApi.md#thingsV2TagsUpsert) | **PUT** /iot/v2/things/{id}/tags | upsert things_v2_tags



## thingsV2TagsDelete

> thingsV2TagsDelete(id, key)

delete things_v2_tags

Delete a tag associated to the thing given its key.

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure Bearer access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ArduinoIotClient.ThingsV2TagsApi();
let id = "id_example"; // String | The id of the thing
let key = "key_example"; // String | The key of the tag
apiInstance.thingsV2TagsDelete(id, key).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the thing | 
 **key** | **String**| The key of the tag | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.goa.error+json, text/plain


## thingsV2TagsList

> ArduinoTags thingsV2TagsList(id)

list things_v2_tags

List tags associated to the thing.

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure Bearer access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ArduinoIotClient.ThingsV2TagsApi();
let id = "id_example"; // String | The id of the thing
apiInstance.thingsV2TagsList(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the thing | 

### Return type

[**ArduinoTags**](ArduinoTags.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.arduino.tags+json, application/vnd.goa.error+json


## thingsV2TagsUpsert

> thingsV2TagsUpsert(id, tag)

upsert things_v2_tags

Creates or updates a tag associated to the thing.

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure Bearer access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ArduinoIotClient.ThingsV2TagsApi();
let id = "id_example"; // String | The id of the thing
let tag = new ArduinoIotClient.Tag(); // Tag | 
apiInstance.thingsV2TagsUpsert(id, tag).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the thing | 
 **tag** | [**Tag**](Tag.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/vnd.goa.error+json, text/plain

