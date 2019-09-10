# IotApi.ThingsV1Api

All URIs are relative to *http://api-dev.arduino.cc/iot*

Method | HTTP request | Description
------------- | ------------- | -------------
[**thingsV1Create**](ThingsV1Api.md#thingsV1Create) | **PUT** /v1/things | create things_v1
[**thingsV1CreateSketch**](ThingsV1Api.md#thingsV1CreateSketch) | **PUT** /v1/things/{id}/sketch | createSketch things_v1
[**thingsV1Delete**](ThingsV1Api.md#thingsV1Delete) | **DELETE** /v1/things/{id} | delete things_v1
[**thingsV1DeleteSketch**](ThingsV1Api.md#thingsV1DeleteSketch) | **DELETE** /v1/things/{id}/sketch | deleteSketch things_v1
[**thingsV1Layout**](ThingsV1Api.md#thingsV1Layout) | **GET** /v1/things/{id}/layout | layout things_v1
[**thingsV1List**](ThingsV1Api.md#thingsV1List) | **GET** /v1/things | list things_v1
[**thingsV1Show**](ThingsV1Api.md#thingsV1Show) | **GET** /v1/things/{id} | show things_v1
[**thingsV1Update**](ThingsV1Api.md#thingsV1Update) | **POST** /v1/things/{id} | update things_v1
[**thingsV1UpdateSketch**](ThingsV1Api.md#thingsV1UpdateSketch) | **PUT** /v1/things/{id}/sketch/{sketchId} | updateSketch things_v1



## thingsV1Create

> ArduinoThing thingsV1Create(createThingsV1Payload, opts)

create things_v1

Creates a new thing associated to the user

### Example

```javascript
import IotApi from 'iot_api';
let defaultClient = IotApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IotApi.ThingsV1Api();
let createThingsV1Payload = new IotApi.CreateThingsV1Payload(); // CreateThingsV1Payload | ThingPayload describes a thing
let opts = {
  'force': false // Boolean | If true, detach device from the other thing, and attach to this thing
};
apiInstance.thingsV1Create(createThingsV1Payload, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createThingsV1Payload** | [**CreateThingsV1Payload**](CreateThingsV1Payload.md)| ThingPayload describes a thing | 
 **force** | **Boolean**| If true, detach device from the other thing, and attach to this thing | [optional] [default to false]

### Return type

[**ArduinoThing**](ArduinoThing.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/vnd.arduino.thing+json, application/vnd.goa.error+json


## thingsV1CreateSketch

> ArduinoThing thingsV1CreateSketch(id, thingSketch)

createSketch things_v1

Creates a new sketch thing associated to the thing

### Example

```javascript
import IotApi from 'iot_api';
let defaultClient = IotApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IotApi.ThingsV1Api();
let id = "id_example"; // String | The id of the thing
let thingSketch = new IotApi.ThingSketch(); // ThingSketch | ThingSketchPayload describes a sketch of a thing
apiInstance.thingsV1CreateSketch(id, thingSketch).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the thing | 
 **thingSketch** | [**ThingSketch**](ThingSketch.md)| ThingSketchPayload describes a sketch of a thing | 

### Return type

[**ArduinoThing**](ArduinoThing.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/vnd.arduino.thing+json, application/vnd.goa.error+json


## thingsV1Delete

> thingsV1Delete(id, opts)

delete things_v1

Removes a thing associated to the user

### Example

```javascript
import IotApi from 'iot_api';
let defaultClient = IotApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IotApi.ThingsV1Api();
let id = "id_example"; // String | The id of the thing
let opts = {
  'force': false // Boolean | If true, hard delete the thing
};
apiInstance.thingsV1Delete(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the thing | 
 **force** | **Boolean**| If true, hard delete the thing | [optional] [default to false]

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## thingsV1DeleteSketch

> ArduinoThing thingsV1DeleteSketch(id)

deleteSketch things_v1

### Example

```javascript
import IotApi from 'iot_api';
let defaultClient = IotApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IotApi.ThingsV1Api();
let id = "id_example"; // String | The id of the thing
apiInstance.thingsV1DeleteSketch(id).then((data) => {
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

[**ArduinoThing**](ArduinoThing.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.arduino.thing+json


## thingsV1Layout

> ArduinoThinglayout thingsV1Layout(id, opts)

layout things_v1

Returns the thing requested by the user, without last values data

### Example

```javascript
import IotApi from 'iot_api';
let defaultClient = IotApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IotApi.ThingsV1Api();
let id = "id_example"; // String | The id of the thing
let opts = {
  'showDeleted': false // Boolean | If true, shows the soft deleted thing
};
apiInstance.thingsV1Layout(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the thing | 
 **showDeleted** | **Boolean**| If true, shows the soft deleted thing | [optional] [default to false]

### Return type

[**ArduinoThinglayout**](ArduinoThinglayout.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.arduino.thinglayout+json, application/vnd.goa.error+json


## thingsV1List

> [ArduinoThing] thingsV1List(opts)

list things_v1

Returns the list of things associated to the user

### Example

```javascript
import IotApi from 'iot_api';
let defaultClient = IotApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IotApi.ThingsV1Api();
let opts = {
  'acrossUserIds': false, // Boolean | If true, returns all the things
  'deviceId': "deviceId_example", // String | The id of the device you want to filter
  'showDeleted': false // Boolean | If true, shows the soft deleted things
};
apiInstance.thingsV1List(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **acrossUserIds** | **Boolean**| If true, returns all the things | [optional] [default to false]
 **deviceId** | **String**| The id of the device you want to filter | [optional] 
 **showDeleted** | **Boolean**| If true, shows the soft deleted things | [optional] [default to false]

### Return type

[**[ArduinoThing]**](ArduinoThing.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.arduino.thing+json; type=collection


## thingsV1Show

> ArduinoThing thingsV1Show(id, opts)

show things_v1

Returns the thing requested by the user

### Example

```javascript
import IotApi from 'iot_api';
let defaultClient = IotApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IotApi.ThingsV1Api();
let id = "id_example"; // String | The id of the thing
let opts = {
  'showDeleted': false // Boolean | If true, shows the soft deleted thing
};
apiInstance.thingsV1Show(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the thing | 
 **showDeleted** | **Boolean**| If true, shows the soft deleted thing | [optional] [default to false]

### Return type

[**ArduinoThing**](ArduinoThing.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.arduino.thing+json, application/vnd.goa.error+json


## thingsV1Update

> ArduinoThing thingsV1Update(id, thing, opts)

update things_v1

Updates a thing associated to the user

### Example

```javascript
import IotApi from 'iot_api';
let defaultClient = IotApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IotApi.ThingsV1Api();
let id = "id_example"; // String | The id of the thing
let thing = new IotApi.Thing(); // Thing | ThingPayload describes a thing
let opts = {
  'force': false // Boolean | If true, detach device from the other thing, and attach to this thing
};
apiInstance.thingsV1Update(id, thing, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the thing | 
 **thing** | [**Thing**](Thing.md)| ThingPayload describes a thing | 
 **force** | **Boolean**| If true, detach device from the other thing, and attach to this thing | [optional] [default to false]

### Return type

[**ArduinoThing**](ArduinoThing.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/vnd.arduino.thing+json, application/vnd.goa.error+json


## thingsV1UpdateSketch

> ArduinoThing thingsV1UpdateSketch(id, sketchId)

updateSketch things_v1

Update an existing thing sketch

### Example

```javascript
import IotApi from 'iot_api';
let defaultClient = IotApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IotApi.ThingsV1Api();
let id = "id_example"; // String | The id of the thing
let sketchId = "sketchId_example"; // String | The id of the sketch
apiInstance.thingsV1UpdateSketch(id, sketchId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the thing | 
 **sketchId** | **String**| The id of the sketch | 

### Return type

[**ArduinoThing**](ArduinoThing.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.arduino.thing+json, application/vnd.goa.error+json

