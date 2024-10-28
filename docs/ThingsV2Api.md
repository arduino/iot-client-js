# ArduinoIotClient.ThingsV2Api

All URIs are relative to *https://api2.arduino.cc*

Method | HTTP request | Description
------------- | ------------- | -------------
[**thingsV2Clone**](ThingsV2Api.md#thingsV2Clone) | **PUT** /iot/v2/things/{id}/clone | clone things_v2
[**thingsV2Create**](ThingsV2Api.md#thingsV2Create) | **PUT** /iot/v2/things | create things_v2
[**thingsV2CreateSketch**](ThingsV2Api.md#thingsV2CreateSketch) | **PUT** /iot/v2/things/{id}/sketch | createSketch things_v2
[**thingsV2Delete**](ThingsV2Api.md#thingsV2Delete) | **DELETE** /iot/v2/things/{id} | delete things_v2
[**thingsV2DeleteSketch**](ThingsV2Api.md#thingsV2DeleteSketch) | **DELETE** /iot/v2/things/{id}/sketch | deleteSketch things_v2
[**thingsV2List**](ThingsV2Api.md#thingsV2List) | **GET** /iot/v2/things | list things_v2
[**thingsV2Show**](ThingsV2Api.md#thingsV2Show) | **GET** /iot/v2/things/{id} | show things_v2
[**thingsV2Template**](ThingsV2Api.md#thingsV2Template) | **GET** /iot/v2/things/{id}/template | template things_v2
[**thingsV2Update**](ThingsV2Api.md#thingsV2Update) | **POST** /iot/v2/things/{id} | update things_v2
[**thingsV2UpdateSketch**](ThingsV2Api.md#thingsV2UpdateSketch) | **PUT** /iot/v2/things/{id}/sketch/{sketchId} | updateSketch things_v2



## thingsV2Clone

> ArduinoThing thingsV2Clone(id, thingClone, opts)

clone things_v2

Clone a given thing

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.ThingsV2Api();
let id = "id_example"; // String | The id of the thing
let thingClone = new ArduinoIotClient.ThingClone(); // ThingClone | Payload to clone a new thing from an existing one
let opts = {
  'xOrganization': "xOrganization_example" // String | 
};
apiInstance.thingsV2Clone(id, thingClone, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the thing | 
 **thingClone** | [**ThingClone**](ThingClone.md)| Payload to clone a new thing from an existing one | 
 **xOrganization** | **String**|  | [optional] 

### Return type

[**ArduinoThing**](ArduinoThing.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/vnd.arduino.thing+json, application/vnd.goa.error+json


## thingsV2Create

> ArduinoThing thingsV2Create(thingCreate, opts)

create things_v2

Creates a new thing associated to the user

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.ThingsV2Api();
let thingCreate = new ArduinoIotClient.ThingCreate(); // ThingCreate | Payload to create a new thing
let opts = {
  'force': false, // Boolean | If true, detach device from the other thing, and attach to this thing
  'xOrganization': "xOrganization_example" // String | 
};
apiInstance.thingsV2Create(thingCreate, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **thingCreate** | [**ThingCreate**](ThingCreate.md)| Payload to create a new thing | 
 **force** | **Boolean**| If true, detach device from the other thing, and attach to this thing | [optional] [default to false]
 **xOrganization** | **String**|  | [optional] 

### Return type

[**ArduinoThing**](ArduinoThing.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/vnd.arduino.thing+json, application/vnd.goa.error+json


## thingsV2CreateSketch

> ArduinoThing thingsV2CreateSketch(id, thingSketch, opts)

createSketch things_v2

Creates a new sketch thing associated to the thing

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.ThingsV2Api();
let id = "id_example"; // String | The id of the thing
let thingSketch = new ArduinoIotClient.ThingSketch(); // ThingSketch | ThingSketchPayload describes a sketch of a thing
let opts = {
  'xOrganization': "xOrganization_example" // String | 
};
apiInstance.thingsV2CreateSketch(id, thingSketch, opts).then((data) => {
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
 **xOrganization** | **String**|  | [optional] 

### Return type

[**ArduinoThing**](ArduinoThing.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/vnd.arduino.thing+json, application/vnd.goa.error+json


## thingsV2Delete

> thingsV2Delete(id, opts)

delete things_v2

Removes a thing associated to the user

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.ThingsV2Api();
let id = "id_example"; // String | The id of the thing
let opts = {
  'force': false, // Boolean | If true, hard delete the thing
  'xOrganization': "xOrganization_example" // String | 
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
 **xOrganization** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.goa.error+json, text/plain


## thingsV2DeleteSketch

> ArduinoThing thingsV2DeleteSketch(id, opts)

deleteSketch things_v2

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.ThingsV2Api();
let id = "id_example"; // String | The id of the thing
let opts = {
  'xOrganization': "xOrganization_example" // String | 
};
apiInstance.thingsV2DeleteSketch(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the thing | 
 **xOrganization** | **String**|  | [optional] 

### Return type

[**ArduinoThing**](ArduinoThing.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.arduino.thing+json, application/vnd.goa.error+json


## thingsV2List

> [ArduinoThing] thingsV2List(opts)

list things_v2

Returns the list of things associated to the user

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.ThingsV2Api();
let opts = {
  'acrossUserIds': false, // Boolean | If true, returns all the things
  'deviceId': "deviceId_example", // String | The id of the device you want to filter
  'ids': ["null"], // [String] | Filter only the desired things
  'showDeleted': false, // Boolean | If true, shows the soft deleted things
  'showProperties': false, // Boolean | If true, returns things with their properties, and last values
  'tags': ["null"], // [String] | Filter by tags
  'xOrganization': "xOrganization_example" // String | 
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
 **ids** | [**[String]**](String.md)| Filter only the desired things | [optional] 
 **showDeleted** | **Boolean**| If true, shows the soft deleted things | [optional] [default to false]
 **showProperties** | **Boolean**| If true, returns things with their properties, and last values | [optional] [default to false]
 **tags** | [**[String]**](String.md)| Filter by tags | [optional] 
 **xOrganization** | **String**|  | [optional] 

### Return type

[**[ArduinoThing]**](ArduinoThing.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.arduino.thing+json; type=collection, application/vnd.goa.error+json


## thingsV2Show

> ArduinoThing thingsV2Show(id, opts)

show things_v2

Returns the thing requested by the user

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.ThingsV2Api();
let id = "id_example"; // String | The id of the thing
let opts = {
  'showDeleted': false, // Boolean | If true, shows the soft deleted thing
  'xOrganization': "xOrganization_example" // String | 
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
 **xOrganization** | **String**|  | [optional] 

### Return type

[**ArduinoThing**](ArduinoThing.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.arduino.thing+json, application/vnd.goa.error+json


## thingsV2Template

> ArduinoThingtemplate thingsV2Template(id, opts)

template things_v2

Extract template from the given thing

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.ThingsV2Api();
let id = "id_example"; // String | The id of the thing
let opts = {
  'xOrganization': "xOrganization_example" // String | 
};
apiInstance.thingsV2Template(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the thing | 
 **xOrganization** | **String**|  | [optional] 

### Return type

[**ArduinoThingtemplate**](ArduinoThingtemplate.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.arduino.thingtemplate+json, application/vnd.goa.error+json


## thingsV2Update

> ArduinoThing thingsV2Update(id, thingUpdate, opts)

update things_v2

Updates a thing associated to the user

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.ThingsV2Api();
let id = "id_example"; // String | The id of the thing
let thingUpdate = new ArduinoIotClient.ThingUpdate(); // ThingUpdate | Payload to update an existing thing
let opts = {
  'force': false, // Boolean | If true, detach device from the other thing, and attach to this thing
  'xOrganization': "xOrganization_example" // String | 
};
apiInstance.thingsV2Update(id, thingUpdate, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the thing | 
 **thingUpdate** | [**ThingUpdate**](ThingUpdate.md)| Payload to update an existing thing | 
 **force** | **Boolean**| If true, detach device from the other thing, and attach to this thing | [optional] [default to false]
 **xOrganization** | **String**|  | [optional] 

### Return type

[**ArduinoThing**](ArduinoThing.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/vnd.arduino.thing+json, application/vnd.goa.error+json


## thingsV2UpdateSketch

> ArduinoThing thingsV2UpdateSketch(id, sketchId, opts)

updateSketch things_v2

Update an existing thing sketch

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.ThingsV2Api();
let id = "id_example"; // String | The id of the thing
let sketchId = "sketchId_example"; // String | The id of the sketch
let opts = {
  'xOrganization': "xOrganization_example", // String | 
  'updateSketch': new ArduinoIotClient.UpdateSketch() // UpdateSketch | 
};
apiInstance.thingsV2UpdateSketch(id, sketchId, opts).then((data) => {
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
 **xOrganization** | **String**|  | [optional] 
 **updateSketch** | [**UpdateSketch**](UpdateSketch.md)|  | [optional] 

### Return type

[**ArduinoThing**](ArduinoThing.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/vnd.arduino.thing+json, application/vnd.goa.error+json

