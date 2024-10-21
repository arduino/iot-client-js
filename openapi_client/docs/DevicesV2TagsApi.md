# ArduinoIotClient.DevicesV2TagsApi

All URIs are relative to *https://api2.arduino.cc/iot*

Method | HTTP request | Description
------------- | ------------- | -------------
[**devices_v2_tags_delete**](DevicesV2TagsApi.md#devices_v2_tags_delete) | **DELETE** /v2/devices/{id}/tags/{key} | delete devices_v2_tags
[**devices_v2_tags_list**](DevicesV2TagsApi.md#devices_v2_tags_list) | **GET** /v2/devices/{id}/tags | list devices_v2_tags
[**devices_v2_tags_upsert**](DevicesV2TagsApi.md#devices_v2_tags_upsert) | **PUT** /v2/devices/{id}/tags | upsert devices_v2_tags



## devices_v2_tags_delete

> devices_v2_tags_delete(id, key)

delete devices_v2_tags

Delete a tag associated to the device given its key.

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.DevicesV2TagsApi();
let id = 'id_example'; // str | The id of the device
let key = 'key_example'; // str | The key of the tag
apiInstance.devices_v2_tags_delete(id, key).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the device | 
 **key** | **str**| The key of the tag | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.goa.error+json, text/plain


## devices_v2_tags_list

> ArduinoTags devices_v2_tags_list(id)

list devices_v2_tags

List tags associated to the device.

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.DevicesV2TagsApi();
let id = 'id_example'; // str | The id of the device
apiInstance.devices_v2_tags_list(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the device | 

### Return type

[**ArduinoTags**](ArduinoTags.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.arduino.tags+json, application/vnd.goa.error+json


## devices_v2_tags_upsert

> devices_v2_tags_upsert(id, tag)

upsert devices_v2_tags

Creates or updates a tag associated to the device.

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.DevicesV2TagsApi();
let id = 'id_example'; // str | The id of the device
let tag = openapi_client.Tag(); // Tag | 
apiInstance.devices_v2_tags_upsert(id, tag).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the device | 
 **tag** | [**Tag**](Tag.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/vnd.goa.error+json, text/plain

