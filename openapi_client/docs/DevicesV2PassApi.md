# ArduinoIotClient.DevicesV2PassApi

All URIs are relative to *https://api2.arduino.cc/iot*

Method | HTTP request | Description
------------- | ------------- | -------------
[**devices_v2_pass_check**](DevicesV2PassApi.md#devices_v2_pass_check) | **POST** /v2/devices/{id}/pass | check devices_v2_pass
[**devices_v2_pass_delete**](DevicesV2PassApi.md#devices_v2_pass_delete) | **DELETE** /v2/devices/{id}/pass | delete devices_v2_pass
[**devices_v2_pass_get**](DevicesV2PassApi.md#devices_v2_pass_get) | **GET** /v2/devices/{id}/pass | get devices_v2_pass
[**devices_v2_pass_set**](DevicesV2PassApi.md#devices_v2_pass_set) | **PUT** /v2/devices/{id}/pass | set devices_v2_pass



## devices_v2_pass_check

> devices_v2_pass_check(id, check_devices_v2_pass_payload)

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
let id = 'id_example'; // str | The id of the device
let check_devices_v2_pass_payload = openapi_client.CheckDevicesV2PassPayload(); // CheckDevicesV2PassPayload | 
apiInstance.devices_v2_pass_check(id, check_devices_v2_pass_payload).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the device | 
 **check_devices_v2_pass_payload** | [**CheckDevicesV2PassPayload**](CheckDevicesV2PassPayload.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/vnd.goa.error+json, text/plain


## devices_v2_pass_delete

> devices_v2_pass_delete(id)

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
let id = 'id_example'; // str | The id of the device
apiInstance.devices_v2_pass_delete(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the device | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.goa.error+json, text/plain


## devices_v2_pass_get

> ArduinoDevicev2Pass devices_v2_pass_get(id, opts)

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
let id = 'id_example'; // str | The id of the device
let opts = {
  'suggested_password': False // bool | If true, return a suggested password
};
apiInstance.devices_v2_pass_get(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the device | 
 **suggested_password** | **bool**| If true, return a suggested password | [optional] [default to False]

### Return type

[**ArduinoDevicev2Pass**](ArduinoDevicev2Pass.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.arduino.devicev2.pass+json, application/vnd.goa.error+json


## devices_v2_pass_set

> ArduinoDevicev2Pass devices_v2_pass_set(id, devicev2_pass)

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
let id = 'id_example'; // str | The id of the device
let devicev2_pass = openapi_client.Devicev2Pass(); // Devicev2Pass | 
apiInstance.devices_v2_pass_set(id, devicev2_pass).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the device | 
 **devicev2_pass** | [**Devicev2Pass**](Devicev2Pass.md)|  | 

### Return type

[**ArduinoDevicev2Pass**](ArduinoDevicev2Pass.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/vnd.arduino.devicev2.pass+json, application/vnd.goa.error+json

