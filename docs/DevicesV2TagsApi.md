# ArduinoIotClient.DevicesV2TagsApi

All URIs are relative to *https://api2.arduino.cc*

Method | HTTP request | Description
------------- | ------------- | -------------
[**devicesV2TagsDelete**](DevicesV2TagsApi.md#devicesV2TagsDelete) | **DELETE** /iot/v2/devices/{id}/tags/{key} | delete devices_v2_tags
[**devicesV2TagsList**](DevicesV2TagsApi.md#devicesV2TagsList) | **GET** /iot/v2/devices/{id}/tags | list devices_v2_tags
[**devicesV2TagsUpsert**](DevicesV2TagsApi.md#devicesV2TagsUpsert) | **PUT** /iot/v2/devices/{id}/tags | upsert devices_v2_tags



## devicesV2TagsDelete

> devicesV2TagsDelete(id, key)

delete devices_v2_tags

Delete a tag associated to the device given its key.

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure Bearer access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ArduinoIotClient.DevicesV2TagsApi();
let id = "id_example"; // String | The id of the device
let key = "key_example"; // String | The key of the tag
apiInstance.devicesV2TagsDelete(id, key).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the device | 
 **key** | **String**| The key of the tag | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.goa.error+json, text/plain


## devicesV2TagsList

> ArduinoTags devicesV2TagsList(id)

list devices_v2_tags

List tags associated to the device.

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure Bearer access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ArduinoIotClient.DevicesV2TagsApi();
let id = "id_example"; // String | The id of the device
apiInstance.devicesV2TagsList(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the device | 

### Return type

[**ArduinoTags**](ArduinoTags.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.arduino.tags+json, application/vnd.goa.error+json


## devicesV2TagsUpsert

> devicesV2TagsUpsert(id, tag)

upsert devices_v2_tags

Creates or updates a tag associated to the device.

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure Bearer access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ArduinoIotClient.DevicesV2TagsApi();
let id = "id_example"; // String | The id of the device
let tag = new ArduinoIotClient.Tag(); // Tag | 
apiInstance.devicesV2TagsUpsert(id, tag).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the device | 
 **tag** | [**Tag**](Tag.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/vnd.goa.error+json, text/plain

