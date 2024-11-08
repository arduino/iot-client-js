# ArduinoIotClient.LoraDevicesV1Api

All URIs are relative to *https://api2.arduino.cc*

Method | HTTP request | Description
------------- | ------------- | -------------
[**loraDevicesV1Create**](LoraDevicesV1Api.md#loraDevicesV1Create) | **PUT** /iot/v1/lora-devices/ | create lora_devices_v1



## loraDevicesV1Create

> ArduinoLoradevicev1 loraDevicesV1Create(createLoraDevicesV1Payload, opts)

create lora_devices_v1

Create a new lora device. Its info are saved on our database, and on the lora provider network. Creates a device_v2 automatically

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.LoraDevicesV1Api();
let createLoraDevicesV1Payload = new ArduinoIotClient.CreateLoraDevicesV1Payload(); // CreateLoraDevicesV1Payload | 
let opts = {
  'xOrganization': "xOrganization_example" // String | Organization space identifer (optional)
};
apiInstance.loraDevicesV1Create(createLoraDevicesV1Payload, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createLoraDevicesV1Payload** | [**CreateLoraDevicesV1Payload**](CreateLoraDevicesV1Payload.md)|  | 
 **xOrganization** | **String**| Organization space identifer (optional) | [optional] 

### Return type

[**ArduinoLoradevicev1**](ArduinoLoradevicev1.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/vnd.arduino.loradevicev1+json

