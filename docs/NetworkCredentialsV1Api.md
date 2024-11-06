# ArduinoIotClient.NetworkCredentialsV1Api

All URIs are relative to *https://api2.arduino.cc*

Method | HTTP request | Description
------------- | ------------- | -------------
[**networkCredentialsV1Show**](NetworkCredentialsV1Api.md#networkCredentialsV1Show) | **GET** /iot/v1/network_credentials/{type} | show network_credentials_v1
[**networkCredentialsV1ShowByDevice**](NetworkCredentialsV1Api.md#networkCredentialsV1ShowByDevice) | **GET** /iot/v1/network_credentials/{type}/connections | showByDevice network_credentials_v1



## networkCredentialsV1Show

> [ArduinoCredentialsv1] networkCredentialsV1Show(type, opts)

show network_credentials_v1

Show required network credentials depending on device type

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.NetworkCredentialsV1Api();
let type = "type_example"; // String | Device type
let opts = {
  'connection': "connection_example" // String | Connection used by the device
};
apiInstance.networkCredentialsV1Show(type, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**| Device type | 
 **connection** | **String**| Connection used by the device | [optional] 

### Return type

[**[ArduinoCredentialsv1]**](ArduinoCredentialsv1.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.arduino.credentialsv1+json; type=collection, application/vnd.goa.error+json


## networkCredentialsV1ShowByDevice

> networkCredentialsV1ShowByDevice(type)

showByDevice network_credentials_v1

Show available connection types depending on device type

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.NetworkCredentialsV1Api();
let type = "type_example"; // String | Device type
apiInstance.networkCredentialsV1ShowByDevice(type).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**| Device type | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/vnd.goa.error+json

