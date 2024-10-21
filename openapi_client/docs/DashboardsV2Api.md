# ArduinoIotClient.DashboardsV2Api

All URIs are relative to *https://api2.arduino.cc/iot*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dashboards_v2_clone**](DashboardsV2Api.md#dashboards_v2_clone) | **PUT** /v2/dashboards/{id}/clone | clone dashboards_v2
[**dashboards_v2_create**](DashboardsV2Api.md#dashboards_v2_create) | **POST** /v2/dashboards | create dashboards_v2
[**dashboards_v2_delete**](DashboardsV2Api.md#dashboards_v2_delete) | **DELETE** /v2/dashboards/{id} | delete dashboards_v2
[**dashboards_v2_delete_share**](DashboardsV2Api.md#dashboards_v2_delete_share) | **DELETE** /v2/dashboards/{id}/shares/{user_id} | deleteShare dashboards_v2
[**dashboards_v2_link**](DashboardsV2Api.md#dashboards_v2_link) | **PUT** /v2/dashboards/{id}/widgets/{widgetId}/variables | link dashboards_v2
[**dashboards_v2_list**](DashboardsV2Api.md#dashboards_v2_list) | **GET** /v2/dashboards | list dashboards_v2
[**dashboards_v2_list_shares**](DashboardsV2Api.md#dashboards_v2_list_shares) | **GET** /v2/dashboards/{id}/shares | listShares dashboards_v2
[**dashboards_v2_request_access**](DashboardsV2Api.md#dashboards_v2_request_access) | **PUT** /v2/dashboards/{id}/share_request | requestAccess dashboards_v2
[**dashboards_v2_share**](DashboardsV2Api.md#dashboards_v2_share) | **PUT** /v2/dashboards/{id}/shares | share dashboards_v2
[**dashboards_v2_show**](DashboardsV2Api.md#dashboards_v2_show) | **GET** /v2/dashboards/{id} | show dashboards_v2
[**dashboards_v2_template**](DashboardsV2Api.md#dashboards_v2_template) | **GET** /v2/dashboards/{id}/template | template dashboards_v2
[**dashboards_v2_update**](DashboardsV2Api.md#dashboards_v2_update) | **PUT** /v2/dashboards/{id} | update dashboards_v2



## dashboards_v2_clone

> ArduinoDashboardv2 dashboards_v2_clone(id, clone, opts)

clone dashboards_v2

Clone an existing dashboard

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.DashboardsV2Api();
let id = 'id_example'; // str | The id of the dashboard
let clone = openapi_client.Clone(); // Clone | 
let opts = {
  'x_organization': 'x_organization_example' // str | 
};
apiInstance.dashboards_v2_clone(id, clone, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the dashboard | 
 **clone** | [**Clone**](Clone.md)|  | 
 **x_organization** | **str**|  | [optional] 

### Return type

[**ArduinoDashboardv2**](ArduinoDashboardv2.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/vnd.arduino.dashboardv2+json, application/vnd.goa.error+json


## dashboards_v2_create

> ArduinoDashboardv2 dashboards_v2_create(dashboardv2, opts)

create dashboards_v2

Create a new dashboard

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.DashboardsV2Api();
let dashboardv2 = openapi_client.Dashboardv2(); // Dashboardv2 | DashboardV2Payload describes a dashboard
let opts = {
  'x_organization': 'x_organization_example' // str | 
};
apiInstance.dashboards_v2_create(dashboardv2, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dashboardv2** | [**Dashboardv2**](Dashboardv2.md)| DashboardV2Payload describes a dashboard | 
 **x_organization** | **str**|  | [optional] 

### Return type

[**ArduinoDashboardv2**](ArduinoDashboardv2.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/vnd.arduino.dashboardv2+json, application/vnd.goa.error+json


## dashboards_v2_delete

> dashboards_v2_delete(id, opts)

delete dashboards_v2

Delete a dashboard

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.DashboardsV2Api();
let id = 'id_example'; // str | The id of the dashboard
let opts = {
  'x_organization': 'x_organization_example' // str | 
};
apiInstance.dashboards_v2_delete(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the dashboard | 
 **x_organization** | **str**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.goa.error+json, text/plain


## dashboards_v2_delete_share

> dashboards_v2_delete_share(id, user_id, opts)

deleteShare dashboards_v2

Delete a user the dashboard has been shared with

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.DashboardsV2Api();
let id = 'id_example'; // str | The id of the dashboard
let user_id = 'user_id_example'; // str | The id of the user
let opts = {
  'x_organization': 'x_organization_example' // str | 
};
apiInstance.dashboards_v2_delete_share(id, user_id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the dashboard | 
 **user_id** | **str**| The id of the user | 
 **x_organization** | **str**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.goa.error+json, text/plain


## dashboards_v2_link

> ArduinoVariableslinks dashboards_v2_link(id, widget_id, widgetlink, opts)

link dashboards_v2

Link or detach widget variables

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.DashboardsV2Api();
let id = 'id_example'; // str | The id of the dashboard
let widget_id = 'widget_id_example'; // str | The id of the widget
let widgetlink = openapi_client.Widgetlink(); // Widgetlink | 
let opts = {
  'x_organization': 'x_organization_example' // str | 
};
apiInstance.dashboards_v2_link(id, widget_id, widgetlink, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the dashboard | 
 **widget_id** | **str**| The id of the widget | 
 **widgetlink** | [**Widgetlink**](Widgetlink.md)|  | 
 **x_organization** | **str**|  | [optional] 

### Return type

[**ArduinoVariableslinks**](ArduinoVariableslinks.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/vnd.arduino.variableslinks+json, application/vnd.goa.error+json


## dashboards_v2_list

> List[ArduinoDashboardv2] dashboards_v2_list(opts)

list dashboards_v2

Returns the list of dashboards

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.DashboardsV2Api();
let opts = {
  'name': 'name_example', // str | The name of the dashboard
  'user_id': 'user_id_example', // str | The user_id of the dashboard's owner
  'x_organization': 'x_organization_example' // str | 
};
apiInstance.dashboards_v2_list(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| The name of the dashboard | [optional] 
 **user_id** | **str**| The user_id of the dashboard&#39;s owner | [optional] 
 **x_organization** | **str**|  | [optional] 

### Return type

[**List[ArduinoDashboardv2]**](ArduinoDashboardv2.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.arduino.dashboardv2+json; type=collection, application/vnd.goa.error+json


## dashboards_v2_list_shares

> List[ArduinoDashboardshare] dashboards_v2_list_shares(id, opts)

listShares dashboards_v2

List of users the dashboard has been shared with

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.DashboardsV2Api();
let id = 'id_example'; // str | The id of the dashboard
let opts = {
  'x_organization': 'x_organization_example' // str | 
};
apiInstance.dashboards_v2_list_shares(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the dashboard | 
 **x_organization** | **str**|  | [optional] 

### Return type

[**List[ArduinoDashboardshare]**](ArduinoDashboardshare.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.arduino.dashboardshare+json; type=collection, application/vnd.goa.error+json


## dashboards_v2_request_access

> dashboards_v2_request_access(id, sharerequest, opts)

requestAccess dashboards_v2

Request access to a dashboard

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.DashboardsV2Api();
let id = 'id_example'; // str | The id of the dashboard
let sharerequest = openapi_client.Sharerequest(); // Sharerequest | 
let opts = {
  'x_organization': 'x_organization_example' // str | 
};
apiInstance.dashboards_v2_request_access(id, sharerequest, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the dashboard | 
 **sharerequest** | [**Sharerequest**](Sharerequest.md)|  | 
 **x_organization** | **str**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/vnd.goa.error+json, text/plain


## dashboards_v2_share

> dashboards_v2_share(id, dashboardshare, opts)

share dashboards_v2

Share a dashboard

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.DashboardsV2Api();
let id = 'id_example'; // str | The id of the dashboard
let dashboardshare = openapi_client.Dashboardshare(); // Dashboardshare | 
let opts = {
  'x_organization': 'x_organization_example' // str | 
};
apiInstance.dashboards_v2_share(id, dashboardshare, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the dashboard | 
 **dashboardshare** | [**Dashboardshare**](Dashboardshare.md)|  | 
 **x_organization** | **str**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/vnd.goa.error+json, text/plain


## dashboards_v2_show

> ArduinoDashboardv2 dashboards_v2_show(id, opts)

show dashboards_v2

Show a dashboard

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.DashboardsV2Api();
let id = 'id_example'; // str | The id of the dashboard
let opts = {
  'x_organization': 'x_organization_example' // str | 
};
apiInstance.dashboards_v2_show(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the dashboard | 
 **x_organization** | **str**|  | [optional] 

### Return type

[**ArduinoDashboardv2**](ArduinoDashboardv2.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.arduino.dashboardv2+json, application/vnd.goa.error+json


## dashboards_v2_template

> ArduinoDashboardv2template dashboards_v2_template(id, opts)

template dashboards_v2

Get a template of the dashboard

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.DashboardsV2Api();
let id = 'id_example'; // str | The id of the dashboard
let opts = {
  'x_organization': 'x_organization_example' // str | 
};
apiInstance.dashboards_v2_template(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the dashboard | 
 **x_organization** | **str**|  | [optional] 

### Return type

[**ArduinoDashboardv2template**](ArduinoDashboardv2template.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.arduino.dashboardv2template+json, application/vnd.goa.error+json


## dashboards_v2_update

> ArduinoDashboardv2 dashboards_v2_update(id, dashboardv2, opts)

update dashboards_v2

Updates an existing dashboard

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.DashboardsV2Api();
let id = 'id_example'; // str | The id of the dashboard
let dashboardv2 = openapi_client.Dashboardv2(); // Dashboardv2 | DashboardV2Payload describes a dashboard
let opts = {
  'x_organization': 'x_organization_example' // str | 
};
apiInstance.dashboards_v2_update(id, dashboardv2, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The id of the dashboard | 
 **dashboardv2** | [**Dashboardv2**](Dashboardv2.md)| DashboardV2Payload describes a dashboard | 
 **x_organization** | **str**|  | [optional] 

### Return type

[**ArduinoDashboardv2**](ArduinoDashboardv2.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/vnd.arduino.dashboardv2+json, application/vnd.goa.error+json

