# ArduinoIotClient.DevicesV2CertsApi

All URIs are relative to *https://api2.arduino.cc/iot*

Method | HTTP request | Description
------------- | ------------- | -------------
[**devices_v2_certs_create**](DevicesV2CertsApi.md#devices_v2_certs_create) | **PUT** /v2/devices/{id}/certs | create devices_v2_certs
[**devices_v2_certs_delete**](DevicesV2CertsApi.md#devices_v2_certs_delete) | **DELETE** /v2/devices/{id}/certs/{cid} | delete devices_v2_certs
[**devices_v2_certs_list**](DevicesV2CertsApi.md#devices_v2_certs_list) | **GET** /v2/devices/{id}/certs | list devices_v2_certs
[**devices_v2_certs_show**](DevicesV2CertsApi.md#devices_v2_certs_show) | **GET** /v2/devices/{id}/certs/{cid} | show devices_v2_certs
[**devices_v2_certs_update**](DevicesV2CertsApi.md#devices_v2_certs_update) | **POST** /v2/devices/{id}/certs/{cid} | update devices_v2_certs



## devices_v2_certs_create

> ArduinoDevicev2Cert devices_v2_certs_create(id, create_devices_v2_certs_payload)

create devices_v2_certs

Creates a new cert associated to a device. The csr is signed and saved in database. The CommonName will be replaced with the device id.

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.DevicesV2CertsApi();
let id = 'id_example'; // str | The id of the device
let create_devices_v2_certs_payload = openapi_client.CreateDevicesV2CertsPayload(); // CreateDevicesV2CertsPayload | 
apiInstance.devices_v2_certs_create(id, create_devices_v2_certs_payload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the device | 
 **create_devices_v2_certs_payload** | [**CreateDevicesV2CertsPayload**](CreateDevicesV2CertsPayload.md)|  | 

### Return type

[**ArduinoDevicev2Cert**](ArduinoDevicev2Cert.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/vnd.arduino.devicev2.cert+json, application/vnd.goa.error+json


## devices_v2_certs_delete

> devices_v2_certs_delete(cid, id)

delete devices_v2_certs

Removes a cert associated to a device

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.DevicesV2CertsApi();
let cid = 'cid_example'; // str | The id of the cert
let id = 'id_example'; // str | The id of the device
apiInstance.devices_v2_certs_delete(cid, id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cid** | **str**| The id of the cert | 
 **id** | **str**| The id of the device | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.goa.error+json, text/plain


## devices_v2_certs_list

> List[ArduinoDevicev2Cert] devices_v2_certs_list(id)

list devices_v2_certs

Returns the list of certs associated to the device

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.DevicesV2CertsApi();
let id = 'id_example'; // str | The id of the device
apiInstance.devices_v2_certs_list(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the device | 

### Return type

[**List[ArduinoDevicev2Cert]**](ArduinoDevicev2Cert.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.arduino.devicev2.cert+json; type=collection, application/vnd.goa.error+json


## devices_v2_certs_show

> ArduinoDevicev2Cert devices_v2_certs_show(cid, id)

show devices_v2_certs

Returns the cert requested by the user

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.DevicesV2CertsApi();
let cid = 'cid_example'; // str | The id of the cert
let id = 'id_example'; // str | The id of the device
apiInstance.devices_v2_certs_show(cid, id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cid** | **str**| The id of the cert | 
 **id** | **str**| The id of the device | 

### Return type

[**ArduinoDevicev2Cert**](ArduinoDevicev2Cert.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.arduino.devicev2.cert+json, application/vnd.goa.error+json


## devices_v2_certs_update

> ArduinoDevicev2Cert devices_v2_certs_update(cid, id, devicev2_cert)

update devices_v2_certs

Updates a cert associated to a device. The csr is signed and saved in database. The CommonName will be replaced with the device id.

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.DevicesV2CertsApi();
let cid = 'cid_example'; // str | The id of the cert
let id = 'id_example'; // str | The id of the device
let devicev2_cert = openapi_client.Devicev2Cert(); // Devicev2Cert | 
apiInstance.devices_v2_certs_update(cid, id, devicev2_cert).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cid** | **str**| The id of the cert | 
 **id** | **str**| The id of the device | 
 **devicev2_cert** | [**Devicev2Cert**](Devicev2Cert.md)|  | 

### Return type

[**ArduinoDevicev2Cert**](ArduinoDevicev2Cert.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/vnd.arduino.devicev2.cert+json, application/vnd.goa.error+json

