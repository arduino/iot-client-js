# ArduinoIotClient.TemplatesApi

All URIs are relative to *https://api2.arduino.cc/iot*

Method | HTTP request | Description
------------- | ------------- | -------------
[**templates_apply**](TemplatesApi.md#templates_apply) | **PUT** /v1/templates | apply templates



## templates_apply

> ArduinoTemplate templates_apply(template, opts)

apply templates

Apply an existing cloud template and generate all the needed resources

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';

let apiInstance = new ArduinoIotClient.TemplatesApi();
let template = openapi_client.Template(); // Template | TemplatePayload describes the needed attribute to apply a template
let opts = {
  'x_organization': 'x_organization_example' // str | 
};
apiInstance.templates_apply(template, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template** | [**Template**](Template.md)| TemplatePayload describes the needed attribute to apply a template | 
 **x_organization** | **str**|  | [optional] 

### Return type

[**ArduinoTemplate**](ArduinoTemplate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/vnd.arduino.template+json, application/vnd.goa.error+json

