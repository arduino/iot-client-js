# IotApi.DevicesV2Api

All URIs are relative to *http://api-dev.arduino.cc/iot*

Method | HTTP request | Description
------------- | ------------- | -------------
[**devicesV2Create**](DevicesV2Api.md#devicesV2Create) | **PUT** /v2/devices | create devices_v2
[**devicesV2Delete**](DevicesV2Api.md#devicesV2Delete) | **DELETE** /v2/devices/{id} | delete devices_v2
[**devicesV2GetProperties**](DevicesV2Api.md#devicesV2GetProperties) | **GET** /v2/devices/{id}/properties | getProperties devices_v2
[**devicesV2List**](DevicesV2Api.md#devicesV2List) | **GET** /v2/devices | list devices_v2
[**devicesV2Show**](DevicesV2Api.md#devicesV2Show) | **GET** /v2/devices/{id} | show devices_v2
[**devicesV2Timeseries**](DevicesV2Api.md#devicesV2Timeseries) | **GET** /v2/devices/{id}/properties/{pid} | timeseries devices_v2
[**devicesV2Update**](DevicesV2Api.md#devicesV2Update) | **POST** /v2/devices/{id} | update devices_v2
[**devicesV2UpdateProperties**](DevicesV2Api.md#devicesV2UpdateProperties) | **PUT** /v2/devices/{id}/properties | updateProperties devices_v2



## devicesV2Create

> ArduinoDevicev2 devicesV2Create(createDevicesV2Payload)

create devices_v2

Creates a new device associated to the user.

### Example

```javascript
import IotApi from 'iot_api';
let defaultClient = IotApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IotApi.DevicesV2Api();
let createDevicesV2Payload = new IotApi.CreateDevicesV2Payload(); // CreateDevicesV2Payload | DeviceV2 describes a device.
apiInstance.devicesV2Create(createDevicesV2Payload, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createDevicesV2Payload** | [**CreateDevicesV2Payload**](CreateDevicesV2Payload.md)| DeviceV2 describes a device. | 

### Return type

[**ArduinoDevicev2**](ArduinoDevicev2.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/vnd.arduino.devicev2+json, application/vnd.goa.error+json


## devicesV2Delete

> devicesV2Delete(id)

delete devices_v2

Removes a device associated to the user

### Example

```javascript
import IotApi from 'iot_api';
let defaultClient = IotApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IotApi.DevicesV2Api();
let id = "id_example"; // String | The id of the device
apiInstance.devicesV2Delete(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the device | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## devicesV2GetProperties

> ArduinoDevicev2properties devicesV2GetProperties(id, opts)

getProperties devices_v2

GET device properties

### Example

```javascript
import IotApi from 'iot_api';
let defaultClient = IotApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IotApi.DevicesV2Api();
let id = "id_example"; // String | The id of the device
let opts = {
  'showDeleted': false // Boolean | If true, shows the soft deleted properties
};
apiInstance.devicesV2GetProperties(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the device | 
 **showDeleted** | **Boolean**| If true, shows the soft deleted properties | [optional] [default to false]

### Return type

[**ArduinoDevicev2properties**](ArduinoDevicev2properties.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.arduino.devicev2properties+json


## devicesV2List

> [ArduinoDevicev2] devicesV2List(opts)

list devices_v2

Returns the list of devices associated to the user

### Example

```javascript
import IotApi from 'iot_api';
let defaultClient = IotApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IotApi.DevicesV2Api();
let opts = {
  'acrossUserIds': false // Boolean | If true, returns all the devices
};
apiInstance.devicesV2List(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **acrossUserIds** | **Boolean**| If true, returns all the devices | [optional] [default to false]

### Return type

[**[ArduinoDevicev2]**](ArduinoDevicev2.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.arduino.devicev2+json; type=collection


## devicesV2Show

> ArduinoDevicev2 devicesV2Show(id)

show devices_v2

Returns the device requested by the user

### Example

```javascript
import IotApi from 'iot_api';
let defaultClient = IotApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IotApi.DevicesV2Api();
let id = "id_example"; // String | The id of the device
apiInstance.devicesV2Show(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the device | 

### Return type

[**ArduinoDevicev2**](ArduinoDevicev2.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.arduino.devicev2+json


## devicesV2Timeseries

> ArduinoDevicev2propertyvalues devicesV2Timeseries(id, pid, opts)

timeseries devices_v2

GET device properties values in a range of time

### Example

```javascript
import IotApi from 'iot_api';
let defaultClient = IotApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IotApi.DevicesV2Api();
let id = "id_example"; // String | The id of the device
let pid = "pid_example"; // String | The id of the property
let opts = {
  'limit': 56, // Number | The number of properties to select
  'start': "start_example" // String | The time at which to start selecting properties
};
apiInstance.devicesV2Timeseries(id, pid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the device | 
 **pid** | **String**| The id of the property | 
 **limit** | **Number**| The number of properties to select | [optional] 
 **start** | **String**| The time at which to start selecting properties | [optional] 

### Return type

[**ArduinoDevicev2propertyvalues**](ArduinoDevicev2propertyvalues.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.arduino.devicev2propertyvalues+json


## devicesV2Update

> ArduinoDevicev2 devicesV2Update(id, devicev2)

update devices_v2

Updates a device associated to the user

### Example

```javascript
import IotApi from 'iot_api';
let defaultClient = IotApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IotApi.DevicesV2Api();
let id = "id_example"; // String | The id of the device
let devicev2 = new IotApi.Devicev2(); // Devicev2 | DeviceV2 describes a device.
apiInstance.devicesV2Update(id, devicev2, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the device | 
 **devicev2** | [**Devicev2**](Devicev2.md)| DeviceV2 describes a device. | 

### Return type

[**ArduinoDevicev2**](ArduinoDevicev2.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/vnd.arduino.devicev2+json, application/vnd.goa.error+json


## devicesV2UpdateProperties

> devicesV2UpdateProperties(id, propertiesValues)

updateProperties devices_v2

Update device properties last values

### Example

```javascript
import IotApi from 'iot_api';
let defaultClient = IotApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IotApi.DevicesV2Api();
let id = "id_example"; // String | The id of the device
let propertiesValues = new IotApi.PropertiesValues(); // PropertiesValues | 
apiInstance.devicesV2UpdateProperties(id, propertiesValues, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the device | 
 **propertiesValues** | [**PropertiesValues**](PropertiesValues.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

