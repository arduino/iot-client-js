# ArduinoIotClient.NetworkCredentialsV1Api

All URIs are relative to *https://api2.arduino.cc/iot*

Method | HTTP request | Description
------------- | ------------- | -------------
[**network_credentials_v1_show**](NetworkCredentialsV1Api.md#network_credentials_v1_show) | **GET** /v1/network_credentials/{type} | show network_credentials_v1
[**network_credentials_v1_show_by_device**](NetworkCredentialsV1Api.md#network_credentials_v1_show_by_device) | **GET** /v1/network_credentials/{type}/connections | showByDevice network_credentials_v1



## network_credentials_v1_show

> List[ArduinoCredentialsv1] network_credentials_v1_show(type, opts)

show network_credentials_v1

Show required network credentials depending on device type

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';

let apiInstance = new ArduinoIotClient.NetworkCredentialsV1Api();
let type = 'type_example'; // str | Device type
let opts = {
  'connection': 'connection_example' // str | Connection used by the device
};
apiInstance.network_credentials_v1_show(type, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **str**| Device type | 
 **connection** | **str**| Connection used by the device | [optional] 

### Return type

[**List[ArduinoCredentialsv1]**](ArduinoCredentialsv1.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.arduino.credentialsv1+json; type=collection, application/vnd.goa.error+json


## network_credentials_v1_show_by_device

> network_credentials_v1_show_by_device(type)

showByDevice network_credentials_v1

Show available connection types depending on device type

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';

let apiInstance = new ArduinoIotClient.NetworkCredentialsV1Api();
let type = 'type_example'; // str | Device type
apiInstance.network_credentials_v1_show_by_device(type).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **str**| Device type | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/vnd.goa.error+json

