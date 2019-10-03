# IotApi.ThingsV2Api

All URIs are relative to *http://api2.arduino.cc/iot*

Method | HTTP request | Description
------------- | ------------- | -------------
[**thingsV2Create**](ThingsV2Api.md#thingsV2Create) | **PUT** /v2/things | create things_v2
[**thingsV2CreateSketch**](ThingsV2Api.md#thingsV2CreateSketch) | **PUT** /v2/things/{id}/sketch | createSketch things_v2
[**thingsV2Delete**](ThingsV2Api.md#thingsV2Delete) | **DELETE** /v2/things/{id} | delete things_v2
[**thingsV2DeleteSketch**](ThingsV2Api.md#thingsV2DeleteSketch) | **DELETE** /v2/things/{id}/sketch | deleteSketch things_v2
[**thingsV2List**](ThingsV2Api.md#thingsV2List) | **GET** /v2/things | list things_v2
[**thingsV2Show**](ThingsV2Api.md#thingsV2Show) | **GET** /v2/things/{id} | show things_v2
[**thingsV2Update**](ThingsV2Api.md#thingsV2Update) | **POST** /v2/things/{id} | update things_v2
[**thingsV2UpdateSketch**](ThingsV2Api.md#thingsV2UpdateSketch) | **PUT** /v2/things/{id}/sketch/{sketchId} | updateSketch things_v2



## thingsV2Create

> ArduinoThing thingsV2Create(createThingsV2Payload, opts)

create things_v2

Creates a new thing associated to the user

### Example

```javascript
import IotApi from 'iot_api';
let defaultClient = IotApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IotApi.ThingsV2Api();
let createThingsV2Payload = new IotApi.CreateThingsV2Payload(); // CreateThingsV2Payload | ThingPayload describes a thing
let opts = {
  'force': false // Boolean | If true, detach device from the other thing, and attach to this thing
};
apiInstance.thingsV2Create(createThingsV2Payload, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createThingsV2Payload** | [**CreateThingsV2Payload**](CreateThingsV2Payload.md)| ThingPayload describes a thing | 
 **force** | **Boolean**| If true, detach device from the other thing, and attach to this thing | [optional] [default to false]

### Return type

[**ArduinoThing**](ArduinoThing.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/vnd.arduino.thing+json, application/vnd.goa.error+json


## thingsV2CreateSketch

> ArduinoThing thingsV2CreateSketch(id, thingSketch)

createSketch things_v2

Creates a new sketch thing associated to the thing

### Example

```javascript
import IotApi from 'iot_api';
let defaultClient = IotApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IotApi.ThingsV2Api();
let id = "id_example"; // String | The id of the thing
let thingSketch = new IotApi.ThingSketch(); // ThingSketch | ThingSketchPayload describes a sketch of a thing
apiInstance.thingsV2CreateSketch(id, thingSketch).then((data) => {
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


## thingsV2Delete

> thingsV2Delete(id, opts)

delete things_v2

Removes a thing associated to the user

### Example

```javascript
import IotApi from 'iot_api';
let defaultClient = IotApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IotApi.ThingsV2Api();
let id = "id_example"; // String | The id of the thing
let opts = {
  'force': false // Boolean | If true, hard delete the thing
};
apiInstance.thingsV2Delete(id, opts).then(() => {
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


## thingsV2DeleteSketch

> ArduinoThing thingsV2DeleteSketch(id)

deleteSketch things_v2

### Example

```javascript
import IotApi from 'iot_api';
let defaultClient = IotApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IotApi.ThingsV2Api();
let id = "id_example"; // String | The id of the thing
apiInstance.thingsV2DeleteSketch(id).then((data) => {
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


## thingsV2List

> [ArduinoThing] thingsV2List(opts)

list things_v2

Returns the list of things associated to the user

### Example

```javascript
import IotApi from 'iot_api';
let defaultClient = IotApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IotApi.ThingsV2Api();
let opts = {
  'acrossUserIds': false, // Boolean | If true, returns all the things
  'deviceId': "deviceId_example", // String | The id of the device you want to filter
  'showDeleted': false // Boolean | If true, shows the soft deleted things
};
apiInstance.thingsV2List(opts).then((data) => {
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


## thingsV2Show

> ArduinoThing thingsV2Show(id, opts)

show things_v2

Returns the thing requested by the user

### Example

```javascript
import IotApi from 'iot_api';
let defaultClient = IotApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IotApi.ThingsV2Api();
let id = "id_example"; // String | The id of the thing
let opts = {
  'showDeleted': false // Boolean | If true, shows the soft deleted thing
};
apiInstance.thingsV2Show(id, opts).then((data) => {
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


## thingsV2Update

> ArduinoThing thingsV2Update(id, thing, opts)

update things_v2

Updates a thing associated to the user

### Example

```javascript
import IotApi from 'iot_api';
let defaultClient = IotApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IotApi.ThingsV2Api();
let id = "id_example"; // String | The id of the thing
let thing = new IotApi.Thing(); // Thing | ThingPayload describes a thing
let opts = {
  'force': false // Boolean | If true, detach device from the other thing, and attach to this thing
};
apiInstance.thingsV2Update(id, thing, opts).then((data) => {
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


## thingsV2UpdateSketch

> ArduinoThing thingsV2UpdateSketch(id, sketchId)

updateSketch things_v2

Update an existing thing sketch

### Example

```javascript
import IotApi from 'iot_api';
let defaultClient = IotApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IotApi.ThingsV2Api();
let id = "id_example"; // String | The id of the thing
let sketchId = "sketchId_example"; // String | The id of the sketch
apiInstance.thingsV2UpdateSketch(id, sketchId).then((data) => {
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

