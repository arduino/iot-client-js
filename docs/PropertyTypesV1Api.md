# ArduinoIotClient.PropertyTypesV1Api

All URIs are relative to *https://api2.arduino.cc*

Method | HTTP request | Description
------------- | ------------- | -------------
[**propertyTypesV1ListTypes**](PropertyTypesV1Api.md#propertyTypesV1ListTypes) | **GET** /iot/v1/property_types | listTypes property_types_v1



## propertyTypesV1ListTypes

> [ArduinoPropertytype] propertyTypesV1ListTypes()

listTypes property_types_v1

Returns the list of available property types

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ArduinoIotClient.PropertyTypesV1Api();
apiInstance.propertyTypesV1ListTypes().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[ArduinoPropertytype]**](ArduinoPropertytype.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.arduino.propertytype+json; type=collection, application/vnd.goa.error+json

