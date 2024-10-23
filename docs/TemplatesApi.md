# ArduinoIotClient.TemplatesApi

All URIs are relative to *https://api2.arduino.cc*

Method | HTTP request | Description
------------- | ------------- | -------------
[**templatesApply**](TemplatesApi.md#templatesApply) | **PUT** /iot/v1/templates | apply templates



## templatesApply

> ArduinoTemplate templatesApply(template, opts)

apply templates

Apply an existing cloud template and generate all the needed resources

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';

let apiInstance = new ArduinoIotClient.TemplatesApi();
let template = new ArduinoIotClient.Template(); // Template | TemplatePayload describes the needed attribute to apply a template
let opts = {
  'xOrganization': "xOrganization_example" // String | 
};
apiInstance.templatesApply(template, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template** | [**Template**](Template.md)| TemplatePayload describes the needed attribute to apply a template | 
 **xOrganization** | **String**|  | [optional] 

### Return type

[**ArduinoTemplate**](ArduinoTemplate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/vnd.arduino.template+json, application/vnd.goa.error+json

