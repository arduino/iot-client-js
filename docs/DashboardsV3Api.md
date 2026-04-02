# ArduinoIotClient.DashboardsV3Api

All URIs are relative to *https://api2.arduino.cc*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dashboardsV3Clone**](DashboardsV3Api.md#dashboardsV3Clone) | **PUT** /iot/v3/dashboards/{id}/clone | clone dashboards_v3
[**dashboardsV3Create**](DashboardsV3Api.md#dashboardsV3Create) | **POST** /iot/v3/dashboards | create dashboards_v3
[**dashboardsV3List**](DashboardsV3Api.md#dashboardsV3List) | **GET** /iot/v3/dashboards | list dashboards_v3
[**dashboardsV3Patch**](DashboardsV3Api.md#dashboardsV3Patch) | **PATCH** /iot/v3/dashboards/{id} | patch dashboards_v3
[**dashboardsV3Show**](DashboardsV3Api.md#dashboardsV3Show) | **GET** /iot/v3/dashboards/{id} | show dashboards_v3
[**dashboardsV3Template**](DashboardsV3Api.md#dashboardsV3Template) | **GET** /iot/v3/dashboards/{id}/template | template dashboards_v3
[**dashboardsV3Update**](DashboardsV3Api.md#dashboardsV3Update) | **PUT** /iot/v3/dashboards/{id} | update dashboards_v3



## dashboardsV3Clone

> ArduinoDashboardv3 dashboardsV3Clone(id, clone, opts)

clone dashboards_v3

Clone an existing dashboard

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.DashboardsV3Api();
let id = "id_example"; // String | The id of the dashboard
let clone = new ArduinoIotClient.Clone(); // Clone | 
let opts = {
  'xOrganization': "xOrganization_example" // String | 
};
apiInstance.dashboardsV3Clone(id, clone, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the dashboard | 
 **clone** | [**Clone**](Clone.md)|  | 
 **xOrganization** | **String**|  | [optional] 

### Return type

[**ArduinoDashboardv3**](ArduinoDashboardv3.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/vnd.arduino.dashboardv3+json, application/vnd.goa.error+json


## dashboardsV3Create

> ArduinoDashboardv3 dashboardsV3Create(dashboardv3, opts)

create dashboards_v3

Create a new dashboard

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.DashboardsV3Api();
let dashboardv3 = new ArduinoIotClient.Dashboardv3(); // Dashboardv3 | DashboardV3Payload describes a dashboard
let opts = {
  'xOrganization': "xOrganization_example" // String | 
};
apiInstance.dashboardsV3Create(dashboardv3, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dashboardv3** | [**Dashboardv3**](Dashboardv3.md)| DashboardV3Payload describes a dashboard | 
 **xOrganization** | **String**|  | [optional] 

### Return type

[**ArduinoDashboardv3**](ArduinoDashboardv3.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/vnd.arduino.dashboardv3+json, application/vnd.goa.error+json


## dashboardsV3List

> [ArduinoDashboardv3] dashboardsV3List(opts)

list dashboards_v3

Returns the list of dashboards

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.DashboardsV3Api();
let opts = {
  'name': "name_example", // String | The name of the dashboard
  'thingId': "thingId_example", // String | The thing_id of the dashboard's properties
  'userId': "userId_example", // String | The user_id of the dashboard's owner
  'xOrganization': "xOrganization_example" // String | 
};
apiInstance.dashboardsV3List(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| The name of the dashboard | [optional] 
 **thingId** | **String**| The thing_id of the dashboard&#39;s properties | [optional] 
 **userId** | **String**| The user_id of the dashboard&#39;s owner | [optional] 
 **xOrganization** | **String**|  | [optional] 

### Return type

[**[ArduinoDashboardv3]**](ArduinoDashboardv3.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.arduino.dashboardv3+json; type=collection, application/vnd.goa.error+json


## dashboardsV3Patch

> ArduinoDashboardv3 dashboardsV3Patch(id, dashboardv3, opts)

patch dashboards_v3

Updates an existing dashboard field without overwriting the existing data

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.DashboardsV3Api();
let id = "id_example"; // String | The id of the dashboard
let dashboardv3 = new ArduinoIotClient.Dashboardv3(); // Dashboardv3 | DashboardV3Payload describes a dashboard
let opts = {
  'xOrganization': "xOrganization_example" // String | 
};
apiInstance.dashboardsV3Patch(id, dashboardv3, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the dashboard | 
 **dashboardv3** | [**Dashboardv3**](Dashboardv3.md)| DashboardV3Payload describes a dashboard | 
 **xOrganization** | **String**|  | [optional] 

### Return type

[**ArduinoDashboardv3**](ArduinoDashboardv3.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/vnd.arduino.dashboardv3+json, application/vnd.goa.error+json


## dashboardsV3Show

> ArduinoDashboardv3 dashboardsV3Show(id, opts)

show dashboards_v3

Show a dashboard

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.DashboardsV3Api();
let id = "id_example"; // String | The id of the dashboard
let opts = {
  'xOrganization': "xOrganization_example" // String | 
};
apiInstance.dashboardsV3Show(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the dashboard | 
 **xOrganization** | **String**|  | [optional] 

### Return type

[**ArduinoDashboardv3**](ArduinoDashboardv3.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.arduino.dashboardv3+json, application/vnd.goa.error+json


## dashboardsV3Template

> ArduinoDashboardv3template dashboardsV3Template(id, opts)

template dashboards_v3

Get a template of the dashboard

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.DashboardsV3Api();
let id = "id_example"; // String | The id of the dashboard
let opts = {
  'xOrganization': "xOrganization_example" // String | 
};
apiInstance.dashboardsV3Template(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the dashboard | 
 **xOrganization** | **String**|  | [optional] 

### Return type

[**ArduinoDashboardv3template**](ArduinoDashboardv3template.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.arduino.dashboardv3template+json, application/vnd.goa.error+json


## dashboardsV3Update

> ArduinoDashboardv3 dashboardsV3Update(id, dashboardv3, opts)

update dashboards_v3

Updates an existing dashboard

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.DashboardsV3Api();
let id = "id_example"; // String | The id of the dashboard
let dashboardv3 = new ArduinoIotClient.Dashboardv3(); // Dashboardv3 | DashboardV3Payload describes a dashboard
let opts = {
  'xOrganization': "xOrganization_example" // String | 
};
apiInstance.dashboardsV3Update(id, dashboardv3, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the dashboard | 
 **dashboardv3** | [**Dashboardv3**](Dashboardv3.md)| DashboardV3Payload describes a dashboard | 
 **xOrganization** | **String**|  | [optional] 

### Return type

[**ArduinoDashboardv3**](ArduinoDashboardv3.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/vnd.arduino.dashboardv3+json, application/vnd.goa.error+json

