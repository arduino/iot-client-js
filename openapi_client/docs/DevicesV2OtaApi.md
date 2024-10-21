# ArduinoIotClient.DevicesV2OtaApi

All URIs are relative to *https://api2.arduino.cc/iot*

Method | HTTP request | Description
------------- | ------------- | -------------
[**devices_v2_ota_send**](DevicesV2OtaApi.md#devices_v2_ota_send) | **PUT** /v2/devices/{id}/ota | send devices_v2_ota
[**devices_v2_ota_upload**](DevicesV2OtaApi.md#devices_v2_ota_upload) | **POST** /v2/devices/{id}/ota | upload devices_v2_ota
[**devices_v2_ota_url**](DevicesV2OtaApi.md#devices_v2_ota_url) | **POST** /v2/devices/{id}/ota/url | url devices_v2_ota



## devices_v2_ota_send

> devices_v2_ota_send(id, devicev2_otabinaryurl)

send devices_v2_ota

Send a binary url to a device

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.DevicesV2OtaApi();
let id = 'id_example'; // str | The id of the device
let devicev2_otabinaryurl = openapi_client.Devicev2Otabinaryurl(); // Devicev2Otabinaryurl | 
apiInstance.devices_v2_ota_send(id, devicev2_otabinaryurl).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the device | 
 **devicev2_otabinaryurl** | [**Devicev2Otabinaryurl**](Devicev2Otabinaryurl.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/vnd.goa.error+json, text/plain


## devices_v2_ota_upload

> ArduinoDevicev2Otaupload devices_v2_ota_upload(id, ota_file, opts)

upload devices_v2_ota

Upload a binary and send it to a device

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.DevicesV2OtaApi();
let id = 'id_example'; // str | The id of the device
let ota_file = None; // bytearray | OTA file
let opts = {
  'var_async': True, // bool | If false, wait for the full OTA process, until it gets a result from the device
  'expire_in_mins': 10 // int | Binary expire time in minutes, default 10 mins
};
apiInstance.devices_v2_ota_upload(id, ota_file, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the device | 
 **ota_file** | **bytearray**| OTA file | 
 **var_async** | **bool**| If false, wait for the full OTA process, until it gets a result from the device | [optional] [default to True]
 **expire_in_mins** | **int**| Binary expire time in minutes, default 10 mins | [optional] [default to 10]

### Return type

[**ArduinoDevicev2Otaupload**](ArduinoDevicev2Otaupload.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/vnd.arduino.devicev2.otaupload+json, application/vnd.goa.error+json


## devices_v2_ota_url

> devices_v2_ota_url(id, devicev2_otaurlpyalod)

url devices_v2_ota

Generate a url for downloading a binary

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.DevicesV2OtaApi();
let id = 'id_example'; // str | The id of the device
let devicev2_otaurlpyalod = openapi_client.Devicev2Otaurlpyalod(); // Devicev2Otaurlpyalod | 
apiInstance.devices_v2_ota_url(id, devicev2_otaurlpyalod).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the device | 
 **devicev2_otaurlpyalod** | [**Devicev2Otaurlpyalod**](Devicev2Otaurlpyalod.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/vnd.goa.error+json, text/plain

