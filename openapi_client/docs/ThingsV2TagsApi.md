# ArduinoIotClient.ThingsV2TagsApi

All URIs are relative to *https://api2.arduino.cc/iot*

Method | HTTP request | Description
------------- | ------------- | -------------
[**things_v2_tags_delete**](ThingsV2TagsApi.md#things_v2_tags_delete) | **DELETE** /v2/things/{id}/tags/{key} | delete things_v2_tags
[**things_v2_tags_list**](ThingsV2TagsApi.md#things_v2_tags_list) | **GET** /v2/things/{id}/tags | list things_v2_tags
[**things_v2_tags_upsert**](ThingsV2TagsApi.md#things_v2_tags_upsert) | **PUT** /v2/things/{id}/tags | upsert things_v2_tags



## things_v2_tags_delete

> things_v2_tags_delete(id, key)

delete things_v2_tags

Delete a tag associated to the thing given its key.

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.ThingsV2TagsApi();
let id = 'id_example'; // str | The id of the thing
let key = 'key_example'; // str | The key of the tag
apiInstance.things_v2_tags_delete(id, key).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the thing | 
 **key** | **str**| The key of the tag | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.goa.error+json, text/plain


## things_v2_tags_list

> ArduinoTags things_v2_tags_list(id)

list things_v2_tags

List tags associated to the thing.

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.ThingsV2TagsApi();
let id = 'id_example'; // str | The id of the thing
apiInstance.things_v2_tags_list(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the thing | 

### Return type

[**ArduinoTags**](ArduinoTags.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.arduino.tags+json, application/vnd.goa.error+json


## things_v2_tags_upsert

> things_v2_tags_upsert(id, tag)

upsert things_v2_tags

Creates or updates a tag associated to the thing.

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.ThingsV2TagsApi();
let id = 'id_example'; // str | The id of the thing
let tag = openapi_client.Tag(); // Tag | 
apiInstance.things_v2_tags_upsert(id, tag).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the thing | 
 **tag** | [**Tag**](Tag.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/vnd.goa.error+json, text/plain

