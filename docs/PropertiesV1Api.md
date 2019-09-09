# IotApi.PropertiesV1Api

All URIs are relative to *http://api-dev.arduino.cc/iot*

Method | HTTP request | Description
------------- | ------------- | -------------
[**propertiesV1Create**](PropertiesV1Api.md#propertiesV1Create) | **PUT** /v1/things/{id}/properties | create properties_v1
[**propertiesV1Delete**](PropertiesV1Api.md#propertiesV1Delete) | **DELETE** /v1/things/{id}/properties/{pid} | delete properties_v1
[**propertiesV1List**](PropertiesV1Api.md#propertiesV1List) | **GET** /v1/things/{id}/properties | list properties_v1
[**propertiesV1Publish**](PropertiesV1Api.md#propertiesV1Publish) | **PUT** /v1/things/{id}/properties/{pid}/publish | publish properties_v1
[**propertiesV1Show**](PropertiesV1Api.md#propertiesV1Show) | **GET** /v1/things/{id}/properties/{pid} | show properties_v1
[**propertiesV1Update**](PropertiesV1Api.md#propertiesV1Update) | **POST** /v1/things/{id}/properties/{pid} | update properties_v1



## propertiesV1Create

> ArduinoProperty propertiesV1Create(id, property)

create properties_v1

Creates a new property associated to a thing

### Example

```javascript
import IotApi from 'iot_api';
let defaultClient = IotApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IotApi.PropertiesV1Api();
let id = "id_example"; // String | The id of the thing
let property = new IotApi.Property(); // Property | PropertyPayload describes a property of a thing. No field is mandatory
apiInstance.propertiesV1Create(id, property, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
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


## propertiesV1Delete

> propertiesV1Delete(id, pid, opts)

delete properties_v1

Removes a property associated to a thing

### Example

```javascript
import IotApi from 'iot_api';
let defaultClient = IotApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IotApi.PropertiesV1Api();
let id = "id_example"; // String | The id of the thing
let pid = "pid_example"; // String | The id of the property
let opts = {
  'force': false // Boolean | If true, hard delete the property
};
apiInstance.propertiesV1Delete(id, pid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
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


## propertiesV1List

> [ArduinoProperty] propertiesV1List(id, opts)

list properties_v1

Returns the list of properties associated to the thing

### Example

```javascript
import IotApi from 'iot_api';
let defaultClient = IotApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IotApi.PropertiesV1Api();
let id = "id_example"; // String | The id of the thing
let opts = {
  'showDeleted': false // Boolean | If true, shows the soft deleted properties
};
apiInstance.propertiesV1List(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
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


## propertiesV1Publish

> propertiesV1Publish(id, pid, propertyValue)

publish properties_v1

Publish a property value to MQTT

### Example

```javascript
import IotApi from 'iot_api';
let defaultClient = IotApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IotApi.PropertiesV1Api();
let id = "id_example"; // String | The id of the thing
let pid = "pid_example"; // String | The id of the property
let propertyValue = new IotApi.PropertyValue(); // PropertyValue | PropertyValuePayload describes a property value
apiInstance.propertiesV1Publish(id, pid, propertyValue, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
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


## propertiesV1Show

> ArduinoProperty propertiesV1Show(id, pid, opts)

show properties_v1

Returns the property requested by the user

### Example

```javascript
import IotApi from 'iot_api';
let defaultClient = IotApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IotApi.PropertiesV1Api();
let id = "id_example"; // String | The id of the thing
let pid = "pid_example"; // String | The id of the property
let opts = {
  'showDeleted': false // Boolean | If true, shows the soft deleted properties
};
apiInstance.propertiesV1Show(id, pid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
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


## propertiesV1Update

> ArduinoProperty propertiesV1Update(id, pid, property)

update properties_v1

Updates a property associated to a thing

### Example

```javascript
import IotApi from 'iot_api';
let defaultClient = IotApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IotApi.PropertiesV1Api();
let id = "id_example"; // String | The id of the thing
let pid = "pid_example"; // String | The id of the property
let property = new IotApi.Property(); // Property | PropertyPayload describes a property of a thing. No field is mandatory
apiInstance.propertiesV1Update(id, pid, property, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
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

