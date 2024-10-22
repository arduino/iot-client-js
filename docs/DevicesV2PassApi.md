# ArduinoIotClient.DevicesV2PassApi

All URIs are relative to *https://api2.arduino.cc/iot*

Method | HTTP request | Description
------------- | ------------- | -------------
[**devicesV2PassCheck**](DevicesV2PassApi.md#devicesV2PassCheck) | **POST** /iot/v2/devices/{id}/pass | check devices_v2_pass
[**devicesV2PassDelete**](DevicesV2PassApi.md#devicesV2PassDelete) | **DELETE** /iot/v2/devices/{id}/pass | delete devices_v2_pass
[**devicesV2PassGet**](DevicesV2PassApi.md#devicesV2PassGet) | **GET** /iot/v2/devices/{id}/pass | get devices_v2_pass
[**devicesV2PassSet**](DevicesV2PassApi.md#devicesV2PassSet) | **PUT** /iot/v2/devices/{id}/pass | set devices_v2_pass



## devicesV2PassCheck

> devicesV2PassCheck(id, checkDevicesV2PassPayload)

check devices_v2_pass

Check if the password matches.

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.DevicesV2PassApi();
let id = "id_example"; // String | The id of the device
let checkDevicesV2PassPayload = new ArduinoIotClient.CheckDevicesV2PassPayload(); // CheckDevicesV2PassPayload | 
apiInstance.devicesV2PassCheck(id, checkDevicesV2PassPayload).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the device | 
 **checkDevicesV2PassPayload** | [**CheckDevicesV2PassPayload**](CheckDevicesV2PassPayload.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/vnd.goa.error+json, text/plain


## devicesV2PassDelete

> devicesV2PassDelete(id)

delete devices_v2_pass

Removes the password for the device.

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.DevicesV2PassApi();
let id = "id_example"; // String | The id of the device
apiInstance.devicesV2PassDelete(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
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
- **Accept**: application/vnd.goa.error+json, text/plain


## devicesV2PassGet

> ArduinoDevicev2Pass devicesV2PassGet(id, opts)

get devices_v2_pass

Returns whether the password for this device is set or not. It doesn&#39;t return the password.

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.DevicesV2PassApi();
let id = "id_example"; // String | The id of the device
let opts = {
  'suggestedPassword': false // Boolean | If true, return a suggested password
};
apiInstance.devicesV2PassGet(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the device | 
 **suggestedPassword** | **Boolean**| If true, return a suggested password | [optional] [default to false]

### Return type

[**ArduinoDevicev2Pass**](ArduinoDevicev2Pass.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.arduino.devicev2.pass+json, application/vnd.goa.error+json


## devicesV2PassSet

> ArduinoDevicev2Pass devicesV2PassSet(id, devicev2Pass)

set devices_v2_pass

Sets the password for the device. It can never be read back.

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.DevicesV2PassApi();
let id = "id_example"; // String | The id of the device
let devicev2Pass = new ArduinoIotClient.Devicev2Pass(); // Devicev2Pass | 
apiInstance.devicesV2PassSet(id, devicev2Pass).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the device | 
 **devicev2Pass** | [**Devicev2Pass**](Devicev2Pass.md)|  | 

### Return type

[**ArduinoDevicev2Pass**](ArduinoDevicev2Pass.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/vnd.arduino.devicev2.pass+json, application/vnd.goa.error+json

