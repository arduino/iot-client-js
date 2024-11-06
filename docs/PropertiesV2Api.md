# ArduinoIotClient.PropertiesV2Api

All URIs are relative to *https://api2.arduino.cc*

Method | HTTP request | Description
------------- | ------------- | -------------
[**propertiesV2Create**](PropertiesV2Api.md#propertiesV2Create) | **PUT** /iot/v2/things/{id}/properties | create properties_v2
[**propertiesV2Delete**](PropertiesV2Api.md#propertiesV2Delete) | **DELETE** /iot/v2/things/{id}/properties/{pid} | delete properties_v2
[**propertiesV2List**](PropertiesV2Api.md#propertiesV2List) | **GET** /iot/v2/things/{id}/properties | list properties_v2
[**propertiesV2Publish**](PropertiesV2Api.md#propertiesV2Publish) | **PUT** /iot/v2/things/{id}/properties/{pid}/publish | publish properties_v2
[**propertiesV2Show**](PropertiesV2Api.md#propertiesV2Show) | **GET** /iot/v2/things/{id}/properties/{pid} | show properties_v2
[**propertiesV2Timeseries**](PropertiesV2Api.md#propertiesV2Timeseries) | **GET** /iot/v2/things/{id}/properties/{pid}/timeseries | timeseries properties_v2
[**propertiesV2Update**](PropertiesV2Api.md#propertiesV2Update) | **POST** /iot/v2/things/{id}/properties/{pid} | update properties_v2



## propertiesV2Create

> ArduinoProperty propertiesV2Create(id, property, opts)

create properties_v2

Creates a new property associated to a thing

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.PropertiesV2Api();
let id = "id_example"; // String | The id of the thing
let property = new ArduinoIotClient.Property(); // Property | PropertyPayload describes a property of a thing. No field is mandatory
let opts = {
  'xOrganization': "xOrganization_example" // String | Organization space identifer (optional)
};
apiInstance.propertiesV2Create(id, property, opts).then((data) => {
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
 **xOrganization** | **String**| Organization space identifer (optional) | [optional] 

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
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.PropertiesV2Api();
let id = "id_example"; // String | The id of the thing
let pid = "pid_example"; // String | The id of the property
let opts = {
  'force': false, // Boolean | If true, hard delete the property
  'xOrganization': "xOrganization_example" // String | Organization space identifer (optional)
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
 **xOrganization** | **String**| Organization space identifer (optional) | [optional] 

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
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.PropertiesV2Api();
let id = "id_example"; // String | The id of the thing
let opts = {
  'showDeleted': false, // Boolean | If true, shows the soft deleted properties
  'xOrganization': "xOrganization_example" // String | Organization space identifer (optional)
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
 **xOrganization** | **String**| Organization space identifer (optional) | [optional] 

### Return type

[**[ArduinoProperty]**](ArduinoProperty.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.arduino.property+json; type=collection, application/vnd.goa.error+json


## propertiesV2Publish

> propertiesV2Publish(id, pid, propertyValue, opts)

publish properties_v2

Publish a property value to MQTT

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.PropertiesV2Api();
let id = "id_example"; // String | The id of the thing
let pid = "pid_example"; // String | The id of the property
let propertyValue = new ArduinoIotClient.PropertyValue(); // PropertyValue | PropertyValuePayload describes a property value
let opts = {
  'xOrganization': "xOrganization_example" // String | Organization space identifer (optional)
};
apiInstance.propertiesV2Publish(id, pid, propertyValue, opts).then(() => {
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
 **xOrganization** | **String**| Organization space identifer (optional) | [optional] 

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
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.PropertiesV2Api();
let id = "id_example"; // String | The id of the thing
let pid = "pid_example"; // String | The id of the property
let opts = {
  'showDeleted': false, // Boolean | If true, shows the soft deleted properties
  'xOrganization': "xOrganization_example" // String | Organization space identifer (optional)
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
 **xOrganization** | **String**| Organization space identifer (optional) | [optional] 

### Return type

[**ArduinoProperty**](ArduinoProperty.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.arduino.property+json, application/vnd.goa.error+json


## propertiesV2Timeseries

> ArduinoTimeseriesmedia propertiesV2Timeseries(id, pid, opts)

timeseries properties_v2

Get numerical property&#39;s historic data binned on a specified time interval (note: the total number of data points should NOT be greater than 1000 otherwise the result will be truncated)

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.PropertiesV2Api();
let id = "id_example"; // String | The id of the thing
let pid = "pid_example"; // String | ID of a numerical property
let opts = {
  'aggregation': "aggregation_example", // String | Samples aggregation statistic. Supported aggregations AVG|MAX|MIN|COUNT|SUM|PCT_99|PCT_95|PCT_90|PCT_75|PCT_50|PCT_15|PCT_5
  'desc': false, // Boolean | Whether data's ordering (by time) should be descending
  'from': "from_example", // String | Get data with a timestamp >= to this date (default: 2 weeks ago, min: 1842-01-01T00:00:00Z, max: 2242-01-01T00:00:00Z)
  'interval': 56, // Number | Binning interval in seconds (defaut: the smallest possible value compatibly with the limit of 1000 data points in the response)
  'to': "to_example", // String | Get data with a timestamp < to this date (default: now, min: 1842-01-01T00:00:00Z, max: 2242-01-01T00:00:00Z)
  'xOrganization': "xOrganization_example" // String | Organization space identifer (optional)
};
apiInstance.propertiesV2Timeseries(id, pid, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the thing | 
 **pid** | **String**| ID of a numerical property | 
 **aggregation** | **String**| Samples aggregation statistic. Supported aggregations AVG|MAX|MIN|COUNT|SUM|PCT_99|PCT_95|PCT_90|PCT_75|PCT_50|PCT_15|PCT_5 | [optional] 
 **desc** | **Boolean**| Whether data&#39;s ordering (by time) should be descending | [optional] [default to false]
 **from** | **String**| Get data with a timestamp &gt;&#x3D; to this date (default: 2 weeks ago, min: 1842-01-01T00:00:00Z, max: 2242-01-01T00:00:00Z) | [optional] 
 **interval** | **Number**| Binning interval in seconds (defaut: the smallest possible value compatibly with the limit of 1000 data points in the response) | [optional] 
 **to** | **String**| Get data with a timestamp &lt; to this date (default: now, min: 1842-01-01T00:00:00Z, max: 2242-01-01T00:00:00Z) | [optional] 
 **xOrganization** | **String**| Organization space identifer (optional) | [optional] 

### Return type

[**ArduinoTimeseriesmedia**](ArduinoTimeseriesmedia.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.arduino.timeseriesmedia+json, application/vnd.goa.error+json


## propertiesV2Update

> ArduinoProperty propertiesV2Update(id, pid, property, opts)

update properties_v2

Updates a property associated to a thing

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.PropertiesV2Api();
let id = "id_example"; // String | The id of the thing
let pid = "pid_example"; // String | The id of the property
let property = new ArduinoIotClient.Property(); // Property | PropertyPayload describes a property of a thing. No field is mandatory
let opts = {
  'xOrganization': "xOrganization_example" // String | Organization space identifer (optional)
};
apiInstance.propertiesV2Update(id, pid, property, opts).then((data) => {
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
 **xOrganization** | **String**| Organization space identifer (optional) | [optional] 

### Return type

[**ArduinoProperty**](ArduinoProperty.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/vnd.arduino.property+json, application/vnd.goa.error+json

