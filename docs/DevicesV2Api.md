# ArduinoIotClient.DevicesV2Api

All URIs are relative to *https://api2.arduino.cc/iot*

Method | HTTP request | Description
------------- | ------------- | -------------
[**devicesV2Create**](DevicesV2Api.md#devicesV2Create) | **PUT** /v2/devices | create devices_v2
[**devicesV2Delete**](DevicesV2Api.md#devicesV2Delete) | **DELETE** /v2/devices/{id} | delete devices_v2
[**devicesV2GetEvents**](DevicesV2Api.md#devicesV2GetEvents) | **GET** /v2/devices/{id}/events | getEvents devices_v2
[**devicesV2GetProperties**](DevicesV2Api.md#devicesV2GetProperties) | **GET** /v2/devices/{id}/properties | getProperties devices_v2
[**devicesV2GetStatusEvents**](DevicesV2Api.md#devicesV2GetStatusEvents) | **GET** /v2/devices/{id}/status | GetStatusEvents devices_v2
[**devicesV2List**](DevicesV2Api.md#devicesV2List) | **GET** /v2/devices | list devices_v2
[**devicesV2Show**](DevicesV2Api.md#devicesV2Show) | **GET** /v2/devices/{id} | show devices_v2
[**devicesV2Timeseries**](DevicesV2Api.md#devicesV2Timeseries) | **GET** /v2/devices/{id}/properties/{pid} | timeseries devices_v2
[**devicesV2Update**](DevicesV2Api.md#devicesV2Update) | **POST** /v2/devices/{id} | update devices_v2
[**devicesV2UpdateProperties**](DevicesV2Api.md#devicesV2UpdateProperties) | **PUT** /v2/devices/{id}/properties | updateProperties devices_v2



## devicesV2Create

> ArduinoDevicev2 devicesV2Create(createDevicesV2Payload, opts)

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
let createDevicesV2Payload = new ArduinoIotClient.CreateDevicesV2Payload(); // CreateDevicesV2Payload | DeviceV2 describes a device.
let opts = {
  'xOrganization': "xOrganization_example" // String | 
};
apiInstance.devicesV2Create(createDevicesV2Payload, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createDevicesV2Payload** | [**CreateDevicesV2Payload**](CreateDevicesV2Payload.md)| DeviceV2 describes a device. | 
 **xOrganization** | **String**|  | [optional] 

### Return type

[**ArduinoDevicev2**](ArduinoDevicev2.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/vnd.arduino.devicev2+json, application/vnd.goa.error+json


## devicesV2Delete

> devicesV2Delete(id, opts)

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
let id = "id_example"; // String | The id of the device
let opts = {
  'xOrganization': "xOrganization_example" // String | 
};
apiInstance.devicesV2Delete(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the device | 
 **xOrganization** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.goa.error+json, text/plain


## devicesV2GetEvents

> ArduinoDevicev2EventProperties devicesV2GetEvents(id, opts)

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
let id = "id_example"; // String | The id of the device
let opts = {
  'limit': 56, // Number | The number of events to select
  'start': "start_example", // String | The time at which to start selecting events
  'xOrganization': "xOrganization_example" // String | 
};
apiInstance.devicesV2GetEvents(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the device | 
 **limit** | **Number**| The number of events to select | [optional] 
 **start** | **String**| The time at which to start selecting events | [optional] 
 **xOrganization** | **String**|  | [optional] 

### Return type

[**ArduinoDevicev2EventProperties**](ArduinoDevicev2EventProperties.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.arduino.devicev2.event.properties+json, application/vnd.goa.error+json


## devicesV2GetProperties

> ArduinoDevicev2properties devicesV2GetProperties(id, opts)

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
let id = "id_example"; // String | The id of the device
let opts = {
  'showDeleted': false, // Boolean | If true, shows the soft deleted properties
  'xOrganization': "xOrganization_example" // String | 
};
apiInstance.devicesV2GetProperties(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the device | 
 **showDeleted** | **Boolean**| If true, shows the soft deleted properties | [optional] [default to false]
 **xOrganization** | **String**|  | [optional] 

### Return type

[**ArduinoDevicev2properties**](ArduinoDevicev2properties.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.arduino.devicev2properties+json, application/vnd.goa.error+json


## devicesV2GetStatusEvents

> ArduinoDevicev2StatusEvents devicesV2GetStatusEvents(id, opts)

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
let id = "id_example"; // String | The id of the device
let opts = {
  'limit': 30, // Number | The number of events to select
  'start': "start_example", // String | The time at which to start selecting events
  'xOrganization': "xOrganization_example" // String | 
};
apiInstance.devicesV2GetStatusEvents(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the device | 
 **limit** | **Number**| The number of events to select | [optional] [default to 30]
 **start** | **String**| The time at which to start selecting events | [optional] 
 **xOrganization** | **String**|  | [optional] 

### Return type

[**ArduinoDevicev2StatusEvents**](ArduinoDevicev2StatusEvents.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.arduino.devicev2.status.events+json, application/vnd.goa.error+json


## devicesV2List

> [ArduinoDevicev2] devicesV2List(opts)

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
  'acrossUserIds': false, // Boolean | If true, returns all the devices
  'serial': "serial_example", // String | Filter by device serial number
  'tags': ["null"], // [String] | Filter by tags
  'xOrganization': "xOrganization_example" // String | 
};
apiInstance.devicesV2List(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **acrossUserIds** | **Boolean**| If true, returns all the devices | [optional] [default to false]
 **serial** | **String**| Filter by device serial number | [optional] 
 **tags** | [**[String]**](String.md)| Filter by tags | [optional] 
 **xOrganization** | **String**|  | [optional] 

### Return type

[**[ArduinoDevicev2]**](ArduinoDevicev2.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.arduino.devicev2+json; type=collection, application/vnd.goa.error+json


## devicesV2Show

> ArduinoDevicev2 devicesV2Show(id, opts)

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
let id = "id_example"; // String | The id of the device
let opts = {
  'xOrganization': "xOrganization_example" // String | 
};
apiInstance.devicesV2Show(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the device | 
 **xOrganization** | **String**|  | [optional] 

### Return type

[**ArduinoDevicev2**](ArduinoDevicev2.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.arduino.devicev2+json, application/vnd.goa.error+json


## devicesV2Timeseries

> ArduinoDevicev2propertyvalues devicesV2Timeseries(id, pid, opts)

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
let id = "id_example"; // String | The id of the device
let pid = "pid_example"; // String | The id of the property
let opts = {
  'limit': 56, // Number | The number of properties to select
  'start': "start_example", // String | The time at which to start selecting properties
  'xOrganization': "xOrganization_example" // String | 
};
apiInstance.devicesV2Timeseries(id, pid, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the device | 
 **pid** | **String**| The id of the property | 
 **limit** | **Number**| The number of properties to select | [optional] 
 **start** | **String**| The time at which to start selecting properties | [optional] 
 **xOrganization** | **String**|  | [optional] 

### Return type

[**ArduinoDevicev2propertyvalues**](ArduinoDevicev2propertyvalues.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.arduino.devicev2propertyvalues+json, application/vnd.goa.error+json


## devicesV2Update

> ArduinoDevicev2 devicesV2Update(id, devicev2, opts)

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
let id = "id_example"; // String | The id of the device
let devicev2 = new ArduinoIotClient.Devicev2(); // Devicev2 | DeviceV2 describes a device.
let opts = {
  'xOrganization': "xOrganization_example" // String | 
};
apiInstance.devicesV2Update(id, devicev2, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the device | 
 **devicev2** | [**Devicev2**](Devicev2.md)| DeviceV2 describes a device. | 
 **xOrganization** | **String**|  | [optional] 

### Return type

[**ArduinoDevicev2**](ArduinoDevicev2.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/vnd.arduino.devicev2+json, application/vnd.goa.error+json


## devicesV2UpdateProperties

> devicesV2UpdateProperties(id, propertiesValues, opts)

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
let id = "id_example"; // String | The id of the device
let propertiesValues = new ArduinoIotClient.PropertiesValues(); // PropertiesValues | 
let opts = {
  'xOrganization': "xOrganization_example" // String | 
};
apiInstance.devicesV2UpdateProperties(id, propertiesValues, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the device | 
 **propertiesValues** | [**PropertiesValues**](PropertiesValues.md)|  | 
 **xOrganization** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/vnd.goa.error+json, text/plain

