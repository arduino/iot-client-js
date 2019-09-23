# IotApi.PropertiesV2Api

All URIs are relative to *http://api-dev.arduino.cc/iot*

Method | HTTP request | Description
------------- | ------------- | -------------
[**propertiesV2Create**](PropertiesV2Api.md#propertiesV2Create) | **PUT** /v2/things/{id}/properties | create properties_v2
[**propertiesV2Delete**](PropertiesV2Api.md#propertiesV2Delete) | **DELETE** /v2/things/{id}/properties/{pid} | delete properties_v2
[**propertiesV2List**](PropertiesV2Api.md#propertiesV2List) | **GET** /v2/things/{id}/properties | list properties_v2
[**propertiesV2Publish**](PropertiesV2Api.md#propertiesV2Publish) | **PUT** /v2/things/{id}/properties/{pid}/publish | publish properties_v2
[**propertiesV2Show**](PropertiesV2Api.md#propertiesV2Show) | **GET** /v2/things/{id}/properties/{pid} | show properties_v2
[**propertiesV2Update**](PropertiesV2Api.md#propertiesV2Update) | **POST** /v2/things/{id}/properties/{pid} | update properties_v2



## propertiesV2Create

> ArduinoProperty propertiesV2Create(id, property)

create properties_v2

Creates a new property associated to a thing

### Example

```javascript
import IotApi from 'iot_api';
let defaultClient = IotApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IotApi.PropertiesV2Api();
let id = "id_example"; // String | The id of the thing
let property = new IotApi.Property(); // Property | PropertyPayload describes a property of a thing. No field is mandatory
apiInstance.propertiesV2Create(id, property).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the thing | 
 **property** | [**Property**](Property.md)| PropertyPayload describes a property of a thing. No field is mandatory | 

### Return type

[**ArduinoProperty**](ArduinoProperty.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/vnd.arduino.property+json, application/vnd.goa.error+json


## propertiesV2Delete

> propertiesV2Delete(id, pid, opts)

delete properties_v2

Removes a property associated to a thing

### Example

```javascript
import IotApi from 'iot_api';
let defaultClient = IotApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IotApi.PropertiesV2Api();
let id = "id_example"; // String | The id of the thing
let pid = "pid_example"; // String | The id of the property
let opts = {
  'force': false // Boolean | If true, hard delete the property
};
apiInstance.propertiesV2Delete(id, pid, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the thing | 
 **pid** | **String**| The id of the property | 
 **force** | **Boolean**| If true, hard delete the property | [optional] [default to false]

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.goa.error+json, text/plain


## propertiesV2List

> [ArduinoProperty] propertiesV2List(id, opts)

list properties_v2

Returns the list of properties associated to the thing

### Example

```javascript
import IotApi from 'iot_api';
let defaultClient = IotApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IotApi.PropertiesV2Api();
let id = "id_example"; // String | The id of the thing
let opts = {
  'showDeleted': false // Boolean | If true, shows the soft deleted properties
};
apiInstance.propertiesV2List(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the thing | 
 **showDeleted** | **Boolean**| If true, shows the soft deleted properties | [optional] [default to false]

### Return type

[**[ArduinoProperty]**](ArduinoProperty.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.arduino.property+json; type=collection, application/vnd.goa.error+json


## propertiesV2Publish

> propertiesV2Publish(id, pid, propertyValue)

publish properties_v2

Publish a property value to MQTT

### Example

```javascript
import IotApi from 'iot_api';
let defaultClient = IotApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IotApi.PropertiesV2Api();
let id = "id_example"; // String | The id of the thing
let pid = "pid_example"; // String | The id of the property
let propertyValue = new IotApi.PropertyValue(); // PropertyValue | PropertyValuePayload describes a property value
apiInstance.propertiesV2Publish(id, pid, propertyValue).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the thing | 
 **pid** | **String**| The id of the property | 
 **propertyValue** | [**PropertyValue**](PropertyValue.md)| PropertyValuePayload describes a property value | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/vnd.goa.error+json, text/plain


## propertiesV2Show

> ArduinoProperty propertiesV2Show(id, pid, opts)

show properties_v2

Returns the property requested by the user

### Example

```javascript
import IotApi from 'iot_api';
let defaultClient = IotApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IotApi.PropertiesV2Api();
let id = "id_example"; // String | The id of the thing
let pid = "pid_example"; // String | The id of the property
let opts = {
  'showDeleted': false // Boolean | If true, shows the soft deleted properties
};
apiInstance.propertiesV2Show(id, pid, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the thing | 
 **pid** | **String**| The id of the property | 
 **showDeleted** | **Boolean**| If true, shows the soft deleted properties | [optional] [default to false]

### Return type

[**ArduinoProperty**](ArduinoProperty.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.arduino.property+json, application/vnd.goa.error+json


## propertiesV2Update

> ArduinoProperty propertiesV2Update(id, pid, property)

update properties_v2

Updates a property associated to a thing

### Example

```javascript
import IotApi from 'iot_api';
let defaultClient = IotApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IotApi.PropertiesV2Api();
let id = "id_example"; // String | The id of the thing
let pid = "pid_example"; // String | The id of the property
let property = new IotApi.Property(); // Property | PropertyPayload describes a property of a thing. No field is mandatory
apiInstance.propertiesV2Update(id, pid, property).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the thing | 
 **pid** | **String**| The id of the property | 
 **property** | [**Property**](Property.md)| PropertyPayload describes a property of a thing. No field is mandatory | 

### Return type

[**ArduinoProperty**](ArduinoProperty.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/vnd.arduino.property+json, application/vnd.goa.error+json

