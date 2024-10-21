# ArduinoIotClient.ThingsV2Api

All URIs are relative to *https://api2.arduino.cc/iot*

Method | HTTP request | Description
------------- | ------------- | -------------
[**things_v2_clone**](ThingsV2Api.md#things_v2_clone) | **PUT** /v2/things/{id}/clone | clone things_v2
[**things_v2_create**](ThingsV2Api.md#things_v2_create) | **PUT** /v2/things | create things_v2
[**things_v2_create_sketch**](ThingsV2Api.md#things_v2_create_sketch) | **PUT** /v2/things/{id}/sketch | createSketch things_v2
[**things_v2_delete**](ThingsV2Api.md#things_v2_delete) | **DELETE** /v2/things/{id} | delete things_v2
[**things_v2_delete_sketch**](ThingsV2Api.md#things_v2_delete_sketch) | **DELETE** /v2/things/{id}/sketch | deleteSketch things_v2
[**things_v2_list**](ThingsV2Api.md#things_v2_list) | **GET** /v2/things | list things_v2
[**things_v2_show**](ThingsV2Api.md#things_v2_show) | **GET** /v2/things/{id} | show things_v2
[**things_v2_template**](ThingsV2Api.md#things_v2_template) | **GET** /v2/things/{id}/template | template things_v2
[**things_v2_update**](ThingsV2Api.md#things_v2_update) | **POST** /v2/things/{id} | update things_v2
[**things_v2_update_sketch**](ThingsV2Api.md#things_v2_update_sketch) | **PUT** /v2/things/{id}/sketch/{sketchId} | updateSketch things_v2



## things_v2_clone

> ArduinoThing things_v2_clone(id, thing_clone, opts)

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
let id = 'id_example'; // str | The id of the thing
let thing_clone = openapi_client.ThingClone(); // ThingClone | Payload to clone a new thing from an existing one
let opts = {
  'x_organization': 'x_organization_example' // str | 
};
apiInstance.things_v2_clone(id, thing_clone, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the thing | 
 **thing_clone** | [**ThingClone**](ThingClone.md)| Payload to clone a new thing from an existing one | 
 **x_organization** | **str**|  | [optional] 

### Return type

[**ArduinoThing**](ArduinoThing.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/vnd.arduino.thing+json, application/vnd.goa.error+json


## things_v2_create

> ArduinoThing things_v2_create(thing_create, opts)

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
let thing_create = openapi_client.ThingCreate(); // ThingCreate | Payload to create a new thing
let opts = {
  'force': False, // bool | If true, detach device from the other thing, and attach to this thing
  'x_organization': 'x_organization_example' // str | 
};
apiInstance.things_v2_create(thing_create, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **thing_create** | [**ThingCreate**](ThingCreate.md)| Payload to create a new thing | 
 **force** | **bool**| If true, detach device from the other thing, and attach to this thing | [optional] [default to False]
 **x_organization** | **str**|  | [optional] 

### Return type

[**ArduinoThing**](ArduinoThing.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/vnd.arduino.thing+json, application/vnd.goa.error+json


## things_v2_create_sketch

> ArduinoThing things_v2_create_sketch(id, thing_sketch, opts)

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
let id = 'id_example'; // str | The id of the thing
let thing_sketch = openapi_client.ThingSketch(); // ThingSketch | ThingSketchPayload describes a sketch of a thing
let opts = {
  'x_organization': 'x_organization_example' // str | 
};
apiInstance.things_v2_create_sketch(id, thing_sketch, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the thing | 
 **thing_sketch** | [**ThingSketch**](ThingSketch.md)| ThingSketchPayload describes a sketch of a thing | 
 **x_organization** | **str**|  | [optional] 

### Return type

[**ArduinoThing**](ArduinoThing.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/vnd.arduino.thing+json, application/vnd.goa.error+json


## things_v2_delete

> things_v2_delete(id, opts)

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
let id = 'id_example'; // str | The id of the thing
let opts = {
  'force': False, // bool | If true, hard delete the thing
  'x_organization': 'x_organization_example' // str | 
};
apiInstance.things_v2_delete(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the thing | 
 **force** | **bool**| If true, hard delete the thing | [optional] [default to False]
 **x_organization** | **str**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.goa.error+json, text/plain


## things_v2_delete_sketch

> ArduinoThing things_v2_delete_sketch(id, opts)

deleteSketch things_v2

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.ThingsV2Api();
let id = 'id_example'; // str | The id of the thing
let opts = {
  'x_organization': 'x_organization_example' // str | 
};
apiInstance.things_v2_delete_sketch(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the thing | 
 **x_organization** | **str**|  | [optional] 

### Return type

[**ArduinoThing**](ArduinoThing.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.arduino.thing+json, application/vnd.goa.error+json


## things_v2_list

> List[ArduinoThing] things_v2_list(opts)

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
  'across_user_ids': False, // bool | If true, returns all the things
  'device_id': 'device_id_example', // str | The id of the device you want to filter
  'ids': ['ids_example'], // List[str] | Filter only the desired things
  'show_deleted': False, // bool | If true, shows the soft deleted things
  'show_properties': False, // bool | If true, returns things with their properties, and last values
  'tags': ['tags_example'], // List[str] | Filter by tags
  'x_organization': 'x_organization_example' // str | 
};
apiInstance.things_v2_list(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **across_user_ids** | **bool**| If true, returns all the things | [optional] [default to False]
 **device_id** | **str**| The id of the device you want to filter | [optional] 
 **ids** | [**List[str]**](str.md)| Filter only the desired things | [optional] 
 **show_deleted** | **bool**| If true, shows the soft deleted things | [optional] [default to False]
 **show_properties** | **bool**| If true, returns things with their properties, and last values | [optional] [default to False]
 **tags** | [**List[str]**](str.md)| Filter by tags | [optional] 
 **x_organization** | **str**|  | [optional] 

### Return type

[**List[ArduinoThing]**](ArduinoThing.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.arduino.thing+json; type=collection, application/vnd.goa.error+json


## things_v2_show

> ArduinoThing things_v2_show(id, opts)

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
let id = 'id_example'; // str | The id of the thing
let opts = {
  'show_deleted': False, // bool | If true, shows the soft deleted thing
  'x_organization': 'x_organization_example' // str | 
};
apiInstance.things_v2_show(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the thing | 
 **show_deleted** | **bool**| If true, shows the soft deleted thing | [optional] [default to False]
 **x_organization** | **str**|  | [optional] 

### Return type

[**ArduinoThing**](ArduinoThing.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.arduino.thing+json, application/vnd.goa.error+json


## things_v2_template

> ArduinoThingtemplate things_v2_template(id, opts)

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
let id = 'id_example'; // str | The id of the thing
let opts = {
  'x_organization': 'x_organization_example' // str | 
};
apiInstance.things_v2_template(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the thing | 
 **x_organization** | **str**|  | [optional] 

### Return type

[**ArduinoThingtemplate**](ArduinoThingtemplate.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.arduino.thingtemplate+json, application/vnd.goa.error+json


## things_v2_update

> ArduinoThing things_v2_update(id, thing_update, opts)

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
let id = 'id_example'; // str | The id of the thing
let thing_update = openapi_client.ThingUpdate(); // ThingUpdate | Payload to update an existing thing
let opts = {
  'force': False, // bool | If true, detach device from the other thing, and attach to this thing
  'x_organization': 'x_organization_example' // str | 
};
apiInstance.things_v2_update(id, thing_update, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the thing | 
 **thing_update** | [**ThingUpdate**](ThingUpdate.md)| Payload to update an existing thing | 
 **force** | **bool**| If true, detach device from the other thing, and attach to this thing | [optional] [default to False]
 **x_organization** | **str**|  | [optional] 

### Return type

[**ArduinoThing**](ArduinoThing.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/vnd.arduino.thing+json, application/vnd.goa.error+json


## things_v2_update_sketch

> ArduinoThing things_v2_update_sketch(id, sketch_id, opts)

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
let id = 'id_example'; // str | The id of the thing
let sketch_id = 'sketch_id_example'; // str | The id of the sketch
let opts = {
  'x_organization': 'x_organization_example', // str | 
  'update_sketch': openapi_client.UpdateSketch() // UpdateSketch | 
};
apiInstance.things_v2_update_sketch(id, sketch_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the thing | 
 **sketch_id** | **str**| The id of the sketch | 
 **x_organization** | **str**|  | [optional] 
 **update_sketch** | [**UpdateSketch**](UpdateSketch.md)|  | [optional] 

### Return type

[**ArduinoThing**](ArduinoThing.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/vnd.arduino.thing+json, application/vnd.goa.error+json

