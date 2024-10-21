# ArduinoIotClient.LoraFreqPlanV1Api

All URIs are relative to *https://api2.arduino.cc/iot*

Method | HTTP request | Description
------------- | ------------- | -------------
[**lora_freq_plan_v1_list**](LoraFreqPlanV1Api.md#lora_freq_plan_v1_list) | **GET** /v1/lora-freq-plans/ | list lora_freq_plan_v1



## lora_freq_plan_v1_list

> ArduinoLorafreqplansv1 lora_freq_plan_v1_list()

list lora_freq_plan_v1

List the lora frequency plans supported

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';

let apiInstance = new ArduinoIotClient.LoraFreqPlanV1Api();
apiInstance.lora_freq_plan_v1_list().then((data) => {
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

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.arduino.lorafreqplansv1+json, application/vnd.goa.error+json

