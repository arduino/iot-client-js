# ArduinoIotClient.PropertiesV2Api

All URIs are relative to *https://api2.arduino.cc/iot*

Method | HTTP request | Description
------------- | ------------- | -------------
[**properties_v2_create**](PropertiesV2Api.md#properties_v2_create) | **PUT** /v2/things/{id}/properties | create properties_v2
[**properties_v2_delete**](PropertiesV2Api.md#properties_v2_delete) | **DELETE** /v2/things/{id}/properties/{pid} | delete properties_v2
[**properties_v2_list**](PropertiesV2Api.md#properties_v2_list) | **GET** /v2/things/{id}/properties | list properties_v2
[**properties_v2_publish**](PropertiesV2Api.md#properties_v2_publish) | **PUT** /v2/things/{id}/properties/{pid}/publish | publish properties_v2
[**properties_v2_show**](PropertiesV2Api.md#properties_v2_show) | **GET** /v2/things/{id}/properties/{pid} | show properties_v2
[**properties_v2_timeseries**](PropertiesV2Api.md#properties_v2_timeseries) | **GET** /v2/things/{id}/properties/{pid}/timeseries | timeseries properties_v2
[**properties_v2_update**](PropertiesV2Api.md#properties_v2_update) | **POST** /v2/things/{id}/properties/{pid} | update properties_v2



## properties_v2_create

> ArduinoProperty properties_v2_create(id, model_property, opts)

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
let id = 'id_example'; // str | The id of the thing
let model_property = openapi_client.ModelProperty(); // ModelProperty | PropertyPayload describes a property of a thing. No field is mandatory
let opts = {
  'x_organization': 'x_organization_example' // str | The id of the organization
};
apiInstance.properties_v2_create(id, model_property, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the thing | 
 **model_property** | [**ModelProperty**](ModelProperty.md)| PropertyPayload describes a property of a thing. No field is mandatory | 
 **x_organization** | **str**| The id of the organization | [optional] 

### Return type

[**ArduinoProperty**](ArduinoProperty.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/vnd.arduino.property+json, application/vnd.goa.error+json


## properties_v2_delete

> properties_v2_delete(id, pid, opts)

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
let id = 'id_example'; // str | The id of the thing
let pid = 'pid_example'; // str | The id of the property
let opts = {
  'force': False, // bool | If true, hard delete the property
  'x_organization': 'x_organization_example' // str | The id of the organization
};
apiInstance.properties_v2_delete(id, pid, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the thing | 
 **pid** | **str**| The id of the property | 
 **force** | **bool**| If true, hard delete the property | [optional] [default to False]
 **x_organization** | **str**| The id of the organization | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.goa.error+json, text/plain


## properties_v2_list

> List[ArduinoProperty] properties_v2_list(id, opts)

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
let id = 'id_example'; // str | The id of the thing
let opts = {
  'show_deleted': False, // bool | If true, shows the soft deleted properties
  'x_organization': 'x_organization_example' // str | The id of the organization
};
apiInstance.properties_v2_list(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the thing | 
 **show_deleted** | **bool**| If true, shows the soft deleted properties | [optional] [default to False]
 **x_organization** | **str**| The id of the organization | [optional] 

### Return type

[**List[ArduinoProperty]**](ArduinoProperty.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.arduino.property+json; type=collection, application/vnd.goa.error+json


## properties_v2_publish

> properties_v2_publish(id, pid, property_value, opts)

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
let id = 'id_example'; // str | The id of the thing
let pid = 'pid_example'; // str | The id of the property
let property_value = openapi_client.PropertyValue(); // PropertyValue | PropertyValuePayload describes a property value
let opts = {
  'x_organization': 'x_organization_example' // str | The id of the organization
};
apiInstance.properties_v2_publish(id, pid, property_value, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the thing | 
 **pid** | **str**| The id of the property | 
 **property_value** | [**PropertyValue**](PropertyValue.md)| PropertyValuePayload describes a property value | 
 **x_organization** | **str**| The id of the organization | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/vnd.goa.error+json, text/plain


## properties_v2_show

> ArduinoProperty properties_v2_show(id, pid, opts)

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
let id = 'id_example'; // str | The id of the thing
let pid = 'pid_example'; // str | The id of the property
let opts = {
  'show_deleted': False, // bool | If true, shows the soft deleted properties
  'x_organization': 'x_organization_example' // str | The id of the organization
};
apiInstance.properties_v2_show(id, pid, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the thing | 
 **pid** | **str**| The id of the property | 
 **show_deleted** | **bool**| If true, shows the soft deleted properties | [optional] [default to False]
 **x_organization** | **str**| The id of the organization | [optional] 

### Return type

[**ArduinoProperty**](ArduinoProperty.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.arduino.property+json, application/vnd.goa.error+json


## properties_v2_timeseries

> ArduinoTimeseriesmedia properties_v2_timeseries(id, pid, opts)

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
let id = 'id_example'; // str | The id of the thing
let pid = 'pid_example'; // str | ID of a numerical property
let opts = {
  'aggregation': 'aggregation_example', // str | Samples aggregation statistic. Supported aggregations AVG|MAX|MIN|COUNT|SUM|PCT_99|PCT_95|PCT_90|PCT_75|PCT_50|PCT_15|PCT_5
  'desc': False, // bool | Whether data's ordering (by time) should be descending
  'var_from': 'var_from_example', // str | Get data with a timestamp >= to this date (default: 2 weeks ago, min: 1842-01-01T00:00:00Z, max: 2242-01-01T00:00:00Z)
  'interval': 56, // int | Binning interval in seconds (defaut: the smallest possible value compatibly with the limit of 1000 data points in the response)
  'to': 'to_example', // str | Get data with a timestamp < to this date (default: now, min: 1842-01-01T00:00:00Z, max: 2242-01-01T00:00:00Z)
  'x_organization': 'x_organization_example' // str | The id of the organization
};
apiInstance.properties_v2_timeseries(id, pid, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the thing | 
 **pid** | **str**| ID of a numerical property | 
 **aggregation** | **str**| Samples aggregation statistic. Supported aggregations AVG|MAX|MIN|COUNT|SUM|PCT_99|PCT_95|PCT_90|PCT_75|PCT_50|PCT_15|PCT_5 | [optional] 
 **desc** | **bool**| Whether data&#39;s ordering (by time) should be descending | [optional] [default to False]
 **var_from** | **str**| Get data with a timestamp &gt;&#x3D; to this date (default: 2 weeks ago, min: 1842-01-01T00:00:00Z, max: 2242-01-01T00:00:00Z) | [optional] 
 **interval** | **int**| Binning interval in seconds (defaut: the smallest possible value compatibly with the limit of 1000 data points in the response) | [optional] 
 **to** | **str**| Get data with a timestamp &lt; to this date (default: now, min: 1842-01-01T00:00:00Z, max: 2242-01-01T00:00:00Z) | [optional] 
 **x_organization** | **str**| The id of the organization | [optional] 

### Return type

[**ArduinoTimeseriesmedia**](ArduinoTimeseriesmedia.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.arduino.timeseriesmedia+json, application/vnd.goa.error+json


## properties_v2_update

> ArduinoProperty properties_v2_update(id, pid, model_property, opts)

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
let id = 'id_example'; // str | The id of the thing
let pid = 'pid_example'; // str | The id of the property
let model_property = openapi_client.ModelProperty(); // ModelProperty | PropertyPayload describes a property of a thing. No field is mandatory
let opts = {
  'x_organization': 'x_organization_example' // str | The id of the organization
};
apiInstance.properties_v2_update(id, pid, model_property, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the thing | 
 **pid** | **str**| The id of the property | 
 **model_property** | [**ModelProperty**](ModelProperty.md)| PropertyPayload describes a property of a thing. No field is mandatory | 
 **x_organization** | **str**| The id of the organization | [optional] 

### Return type

[**ArduinoProperty**](ArduinoProperty.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/vnd.arduino.property+json, application/vnd.goa.error+json

