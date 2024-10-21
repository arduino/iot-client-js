# ArduinoIotClient.PropertyTypesV1Api

All URIs are relative to *https://api2.arduino.cc/iot*

Method | HTTP request | Description
------------- | ------------- | -------------
[**property_types_v1_list_types**](PropertyTypesV1Api.md#property_types_v1_list_types) | **GET** /v1/property_types | listTypes property_types_v1



## property_types_v1_list_types

> List[ArduinoPropertytype] property_types_v1_list_types()

listTypes property_types_v1

Returns the list of available property types

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.PropertyTypesV1Api();
apiInstance.property_types_v1_list_types().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**List[ArduinoPropertytype]**](ArduinoPropertytype.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.arduino.propertytype+json; type=collection, application/vnd.goa.error+json

