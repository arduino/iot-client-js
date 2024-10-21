# ArduinoIotClient.LoraDevicesV1Api

All URIs are relative to *https://api2.arduino.cc/iot*

Method | HTTP request | Description
------------- | ------------- | -------------
[**lora_devices_v1_create**](LoraDevicesV1Api.md#lora_devices_v1_create) | **PUT** /v1/lora-devices/ | create lora_devices_v1



## lora_devices_v1_create

> ArduinoLoradevicev1 lora_devices_v1_create(create_lora_devices_v1_payload, opts)

create lora_devices_v1

Create a new lora device. Its info are saved on our database, and on the lora provider network. Creates a device_v2 automatically

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';

let apiInstance = new ArduinoIotClient.LoraDevicesV1Api();
let create_lora_devices_v1_payload = openapi_client.CreateLoraDevicesV1Payload(); // CreateLoraDevicesV1Payload | 
let opts = {
  'x_organization': 'x_organization_example' // str | 
};
apiInstance.lora_devices_v1_create(create_lora_devices_v1_payload, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_lora_devices_v1_payload** | [**CreateLoraDevicesV1Payload**](CreateLoraDevicesV1Payload.md)|  | 
 **x_organization** | **str**|  | [optional] 

### Return type

[**ArduinoLoradevicev1**](ArduinoLoradevicev1.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/vnd.arduino.loradevicev1+json

