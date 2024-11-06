# ArduinoIotClient.DevicesV2OtaApi

All URIs are relative to *https://api2.arduino.cc*

Method | HTTP request | Description
------------- | ------------- | -------------
[**devicesV2OtaSend**](DevicesV2OtaApi.md#devicesV2OtaSend) | **PUT** /iot/v2/devices/{id}/ota | send devices_v2_ota
[**devicesV2OtaUpload**](DevicesV2OtaApi.md#devicesV2OtaUpload) | **POST** /iot/v2/devices/{id}/ota | upload devices_v2_ota
[**devicesV2OtaUrl**](DevicesV2OtaApi.md#devicesV2OtaUrl) | **POST** /iot/v2/devices/{id}/ota/url | url devices_v2_ota



## devicesV2OtaSend

> devicesV2OtaSend(id, devicev2Otabinaryurl)

send devices_v2_ota

Send a binary url to a device

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure Bearer access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ArduinoIotClient.DevicesV2OtaApi();
let id = "id_example"; // String | The id of the device
let devicev2Otabinaryurl = new ArduinoIotClient.Devicev2Otabinaryurl(); // Devicev2Otabinaryurl | 
apiInstance.devicesV2OtaSend(id, devicev2Otabinaryurl).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the device | 
 **devicev2Otabinaryurl** | [**Devicev2Otabinaryurl**](Devicev2Otabinaryurl.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/vnd.goa.error+json, text/plain


## devicesV2OtaUpload

> ArduinoDevicev2Otaupload devicesV2OtaUpload(id, otaFile, opts)

upload devices_v2_ota

Upload a binary and send it to a device

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure Bearer access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ArduinoIotClient.DevicesV2OtaApi();
let id = "id_example"; // String | The id of the device
let otaFile = "/path/to/file"; // File | OTA file
let opts = {
  'async': true, // Boolean | If false, wait for the full OTA process, until it gets a result from the device
  'expireInMins': 10 // Number | Binary expire time in minutes, default 10 mins
};
apiInstance.devicesV2OtaUpload(id, otaFile, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the device | 
 **otaFile** | **File**| OTA file | 
 **async** | **Boolean**| If false, wait for the full OTA process, until it gets a result from the device | [optional] [default to true]
 **expireInMins** | **Number**| Binary expire time in minutes, default 10 mins | [optional] [default to 10]

### Return type

[**ArduinoDevicev2Otaupload**](ArduinoDevicev2Otaupload.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/vnd.arduino.devicev2.otaupload+json, application/vnd.goa.error+json


## devicesV2OtaUrl

> devicesV2OtaUrl(id, devicev2Otaurlpyalod)

url devices_v2_ota

Generate a url for downloading a binary

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure Bearer access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ArduinoIotClient.DevicesV2OtaApi();
let id = "id_example"; // String | The id of the device
let devicev2Otaurlpyalod = new ArduinoIotClient.Devicev2Otaurlpyalod(); // Devicev2Otaurlpyalod | 
apiInstance.devicesV2OtaUrl(id, devicev2Otaurlpyalod).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the device | 
 **devicev2Otaurlpyalod** | [**Devicev2Otaurlpyalod**](Devicev2Otaurlpyalod.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/vnd.goa.error+json, text/plain

