# ArduinoIotClient.DevicesV2Api

All URIs are relative to *https://api2.arduino.cc/iot*

Method | HTTP request | Description
------------- | ------------- | -------------
[**devices_v2_create**](DevicesV2Api.md#devices_v2_create) | **PUT** /v2/devices | create devices_v2
[**devices_v2_delete**](DevicesV2Api.md#devices_v2_delete) | **DELETE** /v2/devices/{id} | delete devices_v2
[**devices_v2_get_events**](DevicesV2Api.md#devices_v2_get_events) | **GET** /v2/devices/{id}/events | getEvents devices_v2
[**devices_v2_get_properties**](DevicesV2Api.md#devices_v2_get_properties) | **GET** /v2/devices/{id}/properties | getProperties devices_v2
[**devices_v2_get_status_events**](DevicesV2Api.md#devices_v2_get_status_events) | **GET** /v2/devices/{id}/status | GetStatusEvents devices_v2
[**devices_v2_list**](DevicesV2Api.md#devices_v2_list) | **GET** /v2/devices | list devices_v2
[**devices_v2_show**](DevicesV2Api.md#devices_v2_show) | **GET** /v2/devices/{id} | show devices_v2
[**devices_v2_timeseries**](DevicesV2Api.md#devices_v2_timeseries) | **GET** /v2/devices/{id}/properties/{pid} | timeseries devices_v2
[**devices_v2_update**](DevicesV2Api.md#devices_v2_update) | **POST** /v2/devices/{id} | update devices_v2
[**devices_v2_update_properties**](DevicesV2Api.md#devices_v2_update_properties) | **PUT** /v2/devices/{id}/properties | updateProperties devices_v2



## devices_v2_create

> ArduinoDevicev2 devices_v2_create(create_devices_v2_payload, opts)

create devices_v2

Creates a new device associated to the user.

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.DevicesV2Api();
let create_devices_v2_payload = openapi_client.CreateDevicesV2Payload(); // CreateDevicesV2Payload | DeviceV2 describes a device.
let opts = {
  'x_organization': 'x_organization_example' // str | 
};
apiInstance.devices_v2_create(create_devices_v2_payload, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_devices_v2_payload** | [**CreateDevicesV2Payload**](CreateDevicesV2Payload.md)| DeviceV2 describes a device. | 
 **x_organization** | **str**|  | [optional] 

### Return type

[**ArduinoDevicev2**](ArduinoDevicev2.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/vnd.arduino.devicev2+json, application/vnd.goa.error+json


## devices_v2_delete

> devices_v2_delete(id, opts)

delete devices_v2

Removes a device associated to the user

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.DevicesV2Api();
let id = 'id_example'; // str | The id of the device
let opts = {
  'x_organization': 'x_organization_example' // str | 
};
apiInstance.devices_v2_delete(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the device | 
 **x_organization** | **str**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.goa.error+json, text/plain


## devices_v2_get_events

> ArduinoDevicev2EventProperties devices_v2_get_events(id, opts)

getEvents devices_v2

GET device events

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.DevicesV2Api();
let id = 'id_example'; // str | The id of the device
let opts = {
  'limit': 56, // int | The number of events to select
  'start': 'start_example', // str | The time at which to start selecting events
  'x_organization': 'x_organization_example' // str | 
};
apiInstance.devices_v2_get_events(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the device | 
 **limit** | **int**| The number of events to select | [optional] 
 **start** | **str**| The time at which to start selecting events | [optional] 
 **x_organization** | **str**|  | [optional] 

### Return type

[**ArduinoDevicev2EventProperties**](ArduinoDevicev2EventProperties.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.arduino.devicev2.event.properties+json, application/vnd.goa.error+json


## devices_v2_get_properties

> ArduinoDevicev2properties devices_v2_get_properties(id, opts)

getProperties devices_v2

GET device properties

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.DevicesV2Api();
let id = 'id_example'; // str | The id of the device
let opts = {
  'show_deleted': False, // bool | If true, shows the soft deleted properties
  'x_organization': 'x_organization_example' // str | 
};
apiInstance.devices_v2_get_properties(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the device | 
 **show_deleted** | **bool**| If true, shows the soft deleted properties | [optional] [default to False]
 **x_organization** | **str**|  | [optional] 

### Return type

[**ArduinoDevicev2properties**](ArduinoDevicev2properties.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.arduino.devicev2properties+json, application/vnd.goa.error+json


## devices_v2_get_status_events

> ArduinoDevicev2StatusEvents devices_v2_get_status_events(id, opts)

GetStatusEvents devices_v2

GET connection status events

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.DevicesV2Api();
let id = 'id_example'; // str | The id of the device
let opts = {
  'limit': 30, // int | The number of events to select
  'start': 'start_example', // str | The time at which to start selecting events
  'x_organization': 'x_organization_example' // str | 
};
apiInstance.devices_v2_get_status_events(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the device | 
 **limit** | **int**| The number of events to select | [optional] [default to 30]
 **start** | **str**| The time at which to start selecting events | [optional] 
 **x_organization** | **str**|  | [optional] 

### Return type

[**ArduinoDevicev2StatusEvents**](ArduinoDevicev2StatusEvents.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.arduino.devicev2.status.events+json, application/vnd.goa.error+json


## devices_v2_list

> List[ArduinoDevicev2] devices_v2_list(opts)

list devices_v2

Returns the list of devices associated to the user

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.DevicesV2Api();
let opts = {
  'across_user_ids': False, // bool | If true, returns all the devices
  'serial': 'serial_example', // str | Filter by device serial number
  'tags': ['tags_example'], // List[str] | Filter by tags
  'x_organization': 'x_organization_example' // str | 
};
apiInstance.devices_v2_list(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **across_user_ids** | **bool**| If true, returns all the devices | [optional] [default to False]
 **serial** | **str**| Filter by device serial number | [optional] 
 **tags** | [**List[str]**](str.md)| Filter by tags | [optional] 
 **x_organization** | **str**|  | [optional] 

### Return type

[**List[ArduinoDevicev2]**](ArduinoDevicev2.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.arduino.devicev2+json; type=collection, application/vnd.goa.error+json


## devices_v2_show

> ArduinoDevicev2 devices_v2_show(id, opts)

show devices_v2

Returns the device requested by the user

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.DevicesV2Api();
let id = 'id_example'; // str | The id of the device
let opts = {
  'x_organization': 'x_organization_example' // str | 
};
apiInstance.devices_v2_show(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the device | 
 **x_organization** | **str**|  | [optional] 

### Return type

[**ArduinoDevicev2**](ArduinoDevicev2.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.arduino.devicev2+json, application/vnd.goa.error+json


## devices_v2_timeseries

> ArduinoDevicev2propertyvalues devices_v2_timeseries(id, pid, opts)

timeseries devices_v2

GET device properties values in a range of time

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.DevicesV2Api();
let id = 'id_example'; // str | The id of the device
let pid = 'pid_example'; // str | The id of the property
let opts = {
  'limit': 56, // int | The number of properties to select
  'start': 'start_example', // str | The time at which to start selecting properties
  'x_organization': 'x_organization_example' // str | 
};
apiInstance.devices_v2_timeseries(id, pid, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the device | 
 **pid** | **str**| The id of the property | 
 **limit** | **int**| The number of properties to select | [optional] 
 **start** | **str**| The time at which to start selecting properties | [optional] 
 **x_organization** | **str**|  | [optional] 

### Return type

[**ArduinoDevicev2propertyvalues**](ArduinoDevicev2propertyvalues.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.arduino.devicev2propertyvalues+json, application/vnd.goa.error+json


## devices_v2_update

> ArduinoDevicev2 devices_v2_update(id, devicev2, opts)

update devices_v2

Updates a device associated to the user

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.DevicesV2Api();
let id = 'id_example'; // str | The id of the device
let devicev2 = openapi_client.Devicev2(); // Devicev2 | DeviceV2 describes a device.
let opts = {
  'x_organization': 'x_organization_example' // str | 
};
apiInstance.devices_v2_update(id, devicev2, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the device | 
 **devicev2** | [**Devicev2**](Devicev2.md)| DeviceV2 describes a device. | 
 **x_organization** | **str**|  | [optional] 

### Return type

[**ArduinoDevicev2**](ArduinoDevicev2.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/vnd.arduino.devicev2+json, application/vnd.goa.error+json


## devices_v2_update_properties

> devices_v2_update_properties(id, properties_values, opts)

updateProperties devices_v2

Update device properties last values

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.DevicesV2Api();
let id = 'id_example'; // str | The id of the device
let properties_values = openapi_client.PropertiesValues(); // PropertiesValues | 
let opts = {
  'x_organization': 'x_organization_example' // str | 
};
apiInstance.devices_v2_update_properties(id, properties_values, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the device | 
 **properties_values** | [**PropertiesValues**](PropertiesValues.md)|  | 
 **x_organization** | **str**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/vnd.goa.error+json, text/plain

