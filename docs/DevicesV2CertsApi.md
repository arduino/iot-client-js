# ArduinoIotClient.DevicesV2CertsApi

All URIs are relative to *https://api2.arduino.cc*

Method | HTTP request | Description
------------- | ------------- | -------------
[**devicesV2CertsCreate**](DevicesV2CertsApi.md#devicesV2CertsCreate) | **PUT** /iot/v2/devices/{id}/certs | create devices_v2_certs
[**devicesV2CertsDelete**](DevicesV2CertsApi.md#devicesV2CertsDelete) | **DELETE** /iot/v2/devices/{id}/certs/{cid} | delete devices_v2_certs
[**devicesV2CertsList**](DevicesV2CertsApi.md#devicesV2CertsList) | **GET** /iot/v2/devices/{id}/certs | list devices_v2_certs
[**devicesV2CertsShow**](DevicesV2CertsApi.md#devicesV2CertsShow) | **GET** /iot/v2/devices/{id}/certs/{cid} | show devices_v2_certs
[**devicesV2CertsUpdate**](DevicesV2CertsApi.md#devicesV2CertsUpdate) | **POST** /iot/v2/devices/{id}/certs/{cid} | update devices_v2_certs



## devicesV2CertsCreate

> ArduinoDevicev2Cert devicesV2CertsCreate(id, createDevicesV2CertsPayload)

create devices_v2_certs

Creates a new cert associated to a device. The csr is signed and saved in database. The CommonName will be replaced with the device id.

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ArduinoIotClient.DevicesV2CertsApi();
let id = "id_example"; // String | The id of the device
let createDevicesV2CertsPayload = new ArduinoIotClient.CreateDevicesV2CertsPayload(); // CreateDevicesV2CertsPayload | 
apiInstance.devicesV2CertsCreate(id, createDevicesV2CertsPayload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the device | 
 **createDevicesV2CertsPayload** | [**CreateDevicesV2CertsPayload**](CreateDevicesV2CertsPayload.md)|  | 

### Return type

[**ArduinoDevicev2Cert**](ArduinoDevicev2Cert.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/vnd.arduino.devicev2.cert+json, application/vnd.goa.error+json


## devicesV2CertsDelete

> devicesV2CertsDelete(cid, id)

delete devices_v2_certs

Removes a cert associated to a device

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ArduinoIotClient.DevicesV2CertsApi();
let cid = "cid_example"; // String | The id of the cert
let id = "id_example"; // String | The id of the device
apiInstance.devicesV2CertsDelete(cid, id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cid** | **String**| The id of the cert | 
 **id** | **String**| The id of the device | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.goa.error+json, text/plain


## devicesV2CertsList

> [ArduinoDevicev2Cert] devicesV2CertsList(id)

list devices_v2_certs

Returns the list of certs associated to the device

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ArduinoIotClient.DevicesV2CertsApi();
let id = "id_example"; // String | The id of the device
apiInstance.devicesV2CertsList(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the device | 

### Return type

[**[ArduinoDevicev2Cert]**](ArduinoDevicev2Cert.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.arduino.devicev2.cert+json; type=collection, application/vnd.goa.error+json


## devicesV2CertsShow

> ArduinoDevicev2Cert devicesV2CertsShow(cid, id)

show devices_v2_certs

Returns the cert requested by the user

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ArduinoIotClient.DevicesV2CertsApi();
let cid = "cid_example"; // String | The id of the cert
let id = "id_example"; // String | The id of the device
apiInstance.devicesV2CertsShow(cid, id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cid** | **String**| The id of the cert | 
 **id** | **String**| The id of the device | 

### Return type

[**ArduinoDevicev2Cert**](ArduinoDevicev2Cert.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.arduino.devicev2.cert+json, application/vnd.goa.error+json


## devicesV2CertsUpdate

> ArduinoDevicev2Cert devicesV2CertsUpdate(cid, id, devicev2Cert)

update devices_v2_certs

Updates a cert associated to a device. The csr is signed and saved in database. The CommonName will be replaced with the device id.

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ArduinoIotClient.DevicesV2CertsApi();
let cid = "cid_example"; // String | The id of the cert
let id = "id_example"; // String | The id of the device
let devicev2Cert = new ArduinoIotClient.Devicev2Cert(); // Devicev2Cert | 
apiInstance.devicesV2CertsUpdate(cid, id, devicev2Cert).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cid** | **String**| The id of the cert | 
 **id** | **String**| The id of the device | 
 **devicev2Cert** | [**Devicev2Cert**](Devicev2Cert.md)|  | 

### Return type

[**ArduinoDevicev2Cert**](ArduinoDevicev2Cert.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/vnd.arduino.devicev2.cert+json, application/vnd.goa.error+json

