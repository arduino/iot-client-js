# ArduinoIotClient.LoraFreqPlanV1Api

All URIs are relative to *https://api2.arduino.cc*

Method | HTTP request | Description
------------- | ------------- | -------------
[**loraFreqPlanV1List**](LoraFreqPlanV1Api.md#loraFreqPlanV1List) | **GET** /iot/v1/lora-freq-plans/ | list lora_freq_plan_v1



## loraFreqPlanV1List

> ArduinoLorafreqplansv1 loraFreqPlanV1List()

list lora_freq_plan_v1

List the lora frequency plans supported

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.LoraFreqPlanV1Api();
apiInstance.loraFreqPlanV1List().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ArduinoLorafreqplansv1**](ArduinoLorafreqplansv1.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.arduino.lorafreqplansv1+json, application/vnd.goa.error+json

