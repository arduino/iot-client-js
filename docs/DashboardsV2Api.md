# ArduinoIotClient.DashboardsV2Api

All URIs are relative to *https://api2.arduino.cc*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dashboardsV2Clone**](DashboardsV2Api.md#dashboardsV2Clone) | **PUT** /iot/v2/dashboards/{id}/clone | clone dashboards_v2
[**dashboardsV2Create**](DashboardsV2Api.md#dashboardsV2Create) | **POST** /iot/v2/dashboards | create dashboards_v2
[**dashboardsV2Delete**](DashboardsV2Api.md#dashboardsV2Delete) | **DELETE** /iot/v2/dashboards/{id} | delete dashboards_v2
[**dashboardsV2DeleteShare**](DashboardsV2Api.md#dashboardsV2DeleteShare) | **DELETE** /iot/v2/dashboards/{id}/shares/{user_id} | deleteShare dashboards_v2
[**dashboardsV2Link**](DashboardsV2Api.md#dashboardsV2Link) | **PUT** /iot/v2/dashboards/{id}/widgets/{widgetId}/variables | link dashboards_v2
[**dashboardsV2List**](DashboardsV2Api.md#dashboardsV2List) | **GET** /iot/v2/dashboards | list dashboards_v2
[**dashboardsV2ListShares**](DashboardsV2Api.md#dashboardsV2ListShares) | **GET** /iot/v2/dashboards/{id}/shares | listShares dashboards_v2
[**dashboardsV2Patch**](DashboardsV2Api.md#dashboardsV2Patch) | **PATCH** /iot/v2/dashboards/{id} | patch dashboards_v2
[**dashboardsV2RequestAccess**](DashboardsV2Api.md#dashboardsV2RequestAccess) | **PUT** /iot/v2/dashboards/{id}/share_request | requestAccess dashboards_v2
[**dashboardsV2Share**](DashboardsV2Api.md#dashboardsV2Share) | **PUT** /iot/v2/dashboards/{id}/shares | share dashboards_v2
[**dashboardsV2Show**](DashboardsV2Api.md#dashboardsV2Show) | **GET** /iot/v2/dashboards/{id} | show dashboards_v2
[**dashboardsV2Template**](DashboardsV2Api.md#dashboardsV2Template) | **GET** /iot/v2/dashboards/{id}/template | template dashboards_v2
[**dashboardsV2Update**](DashboardsV2Api.md#dashboardsV2Update) | **PUT** /iot/v2/dashboards/{id} | update dashboards_v2



## dashboardsV2Clone

> ArduinoDashboardv2 dashboardsV2Clone(id, clone, opts)

clone dashboards_v2

Clone an existing dashboard

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure Bearer access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ArduinoIotClient.DashboardsV2Api();
let id = "id_example"; // String | The id of the dashboard
let clone = new ArduinoIotClient.Clone(); // Clone | Add overrides used when performing a clone of a dashboard
let opts = {
  'xOrganization': "xOrganization_example" // String | Organization space identifer (optional)
};
apiInstance.dashboardsV2Clone(id, clone, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the dashboard | 
 **clone** | [**Clone**](Clone.md)| Add overrides used when performing a clone of a dashboard | 
 **xOrganization** | **String**| Organization space identifer (optional) | [optional] 

### Return type

[**ArduinoDashboardv2**](ArduinoDashboardv2.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/vnd.arduino.dashboardv2+json, application/vnd.goa.error+json


## dashboardsV2Create

> ArduinoDashboardv2 dashboardsV2Create(dashboardv2, opts)

create dashboards_v2

Create a new dashboard

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure Bearer access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ArduinoIotClient.DashboardsV2Api();
let dashboardv2 = new ArduinoIotClient.Dashboardv2(); // Dashboardv2 | Describes a dashboard
let opts = {
  'xOrganization': "xOrganization_example" // String | Organization space identifer (optional)
};
apiInstance.dashboardsV2Create(dashboardv2, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dashboardv2** | [**Dashboardv2**](Dashboardv2.md)| Describes a dashboard | 
 **xOrganization** | **String**| Organization space identifer (optional) | [optional] 

### Return type

[**ArduinoDashboardv2**](ArduinoDashboardv2.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/vnd.arduino.dashboardv2+json, application/vnd.goa.error+json


## dashboardsV2Delete

> dashboardsV2Delete(id, opts)

delete dashboards_v2

Delete a dashboard

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure Bearer access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ArduinoIotClient.DashboardsV2Api();
let id = "id_example"; // String | The id of the dashboard
let opts = {
  'force': false, // Boolean | If true, hard delete the thing
  'xOrganization': "xOrganization_example" // String | Organization space identifer (optional)
};
apiInstance.dashboardsV2Delete(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the dashboard | 
 **force** | **Boolean**| If true, hard delete the thing | [optional] [default to false]
 **xOrganization** | **String**| Organization space identifer (optional) | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.goa.error+json, text/plain


## dashboardsV2DeleteShare

> dashboardsV2DeleteShare(id, userId, opts)

deleteShare dashboards_v2

Delete a user the dashboard has been shared with

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure Bearer access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ArduinoIotClient.DashboardsV2Api();
let id = "id_example"; // String | The id of the dashboard
let userId = "userId_example"; // String | The id of the user
let opts = {
  'xOrganization': "xOrganization_example" // String | Organization space identifer (optional)
};
apiInstance.dashboardsV2DeleteShare(id, userId, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the dashboard | 
 **userId** | **String**| The id of the user | 
 **xOrganization** | **String**| Organization space identifer (optional) | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.goa.error+json, text/plain


## dashboardsV2Link

> ArduinoVariableslinks dashboardsV2Link(id, widgetId, widgetlink, opts)

link dashboards_v2

Link or detach widget variables

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure Bearer access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ArduinoIotClient.DashboardsV2Api();
let id = "id_example"; // String | The id of the dashboard
let widgetId = "widgetId_example"; // String | The id of the widget
let widgetlink = new ArduinoIotClient.Widgetlink(); // Widgetlink | 
let opts = {
  'xOrganization': "xOrganization_example" // String | Organization space identifer (optional)
};
apiInstance.dashboardsV2Link(id, widgetId, widgetlink, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the dashboard | 
 **widgetId** | **String**| The id of the widget | 
 **widgetlink** | [**Widgetlink**](Widgetlink.md)|  | 
 **xOrganization** | **String**| Organization space identifer (optional) | [optional] 

### Return type

[**ArduinoVariableslinks**](ArduinoVariableslinks.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/vnd.arduino.variableslinks+json, application/vnd.goa.error+json


## dashboardsV2List

> [ArduinoDashboardv2] dashboardsV2List(opts)

list dashboards_v2

Returns the list of dashboards

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure Bearer access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ArduinoIotClient.DashboardsV2Api();
let opts = {
  'name': "name_example", // String | Filter by name of the dashboard. It support like matching.
  'userId': "userId_example", // String | Filter by user_id of the dashboard's owner
  'xOrganization': "xOrganization_example" // String | Organization space identifer (optional)
};
apiInstance.dashboardsV2List(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Filter by name of the dashboard. It support like matching. | [optional] 
 **userId** | **String**| Filter by user_id of the dashboard&#39;s owner | [optional] 
 **xOrganization** | **String**| Organization space identifer (optional) | [optional] 

### Return type

[**[ArduinoDashboardv2]**](ArduinoDashboardv2.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.arduino.dashboardv2+json; type=collection, application/vnd.goa.error+json


## dashboardsV2ListShares

> [ArduinoDashboardshare] dashboardsV2ListShares(id, opts)

listShares dashboards_v2

List of users the dashboard has been shared with

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure Bearer access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ArduinoIotClient.DashboardsV2Api();
let id = "id_example"; // String | The id of the dashboard
let opts = {
  'xOrganization': "xOrganization_example" // String | Organization space identifer (optional)
};
apiInstance.dashboardsV2ListShares(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the dashboard | 
 **xOrganization** | **String**| Organization space identifer (optional) | [optional] 

### Return type

[**[ArduinoDashboardshare]**](ArduinoDashboardshare.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.arduino.dashboardshare+json; type=collection, application/vnd.goa.error+json


## dashboardsV2Patch

> ArduinoDashboardv2 dashboardsV2Patch(id, dashboardv2, opts)

patch dashboards_v2

Updates an existing dashboard field without overwriting the existing data

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure Bearer access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ArduinoIotClient.DashboardsV2Api();
let id = "id_example"; // String | The id of the dashboard
let dashboardv2 = new ArduinoIotClient.Dashboardv2(); // Dashboardv2 | Describes a dashboard
let opts = {
  'xOrganization': "xOrganization_example" // String | Organization space identifer (optional)
};
apiInstance.dashboardsV2Patch(id, dashboardv2, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the dashboard | 
 **dashboardv2** | [**Dashboardv2**](Dashboardv2.md)| Describes a dashboard | 
 **xOrganization** | **String**| Organization space identifer (optional) | [optional] 

### Return type

[**ArduinoDashboardv2**](ArduinoDashboardv2.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/vnd.arduino.dashboardv2+json, application/vnd.goa.error+json


## dashboardsV2RequestAccess

> dashboardsV2RequestAccess(id, sharerequest, opts)

requestAccess dashboards_v2

Request access to a dashboard

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure Bearer access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ArduinoIotClient.DashboardsV2Api();
let id = "id_example"; // String | The id of the dashboard
let sharerequest = new ArduinoIotClient.Sharerequest(); // Sharerequest | 
let opts = {
  'xOrganization': "xOrganization_example" // String | Organization space identifer (optional)
};
apiInstance.dashboardsV2RequestAccess(id, sharerequest, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the dashboard | 
 **sharerequest** | [**Sharerequest**](Sharerequest.md)|  | 
 **xOrganization** | **String**| Organization space identifer (optional) | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/vnd.goa.error+json, text/plain


## dashboardsV2Share

> dashboardsV2Share(id, dashboardshare, opts)

share dashboards_v2

Share a dashboard

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure Bearer access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ArduinoIotClient.DashboardsV2Api();
let id = "id_example"; // String | The id of the dashboard
let dashboardshare = new ArduinoIotClient.Dashboardshare(); // Dashboardshare | 
let opts = {
  'xOrganization': "xOrganization_example" // String | Organization space identifer (optional)
};
apiInstance.dashboardsV2Share(id, dashboardshare, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the dashboard | 
 **dashboardshare** | [**Dashboardshare**](Dashboardshare.md)|  | 
 **xOrganization** | **String**| Organization space identifer (optional) | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/vnd.goa.error+json, text/plain


## dashboardsV2Show

> ArduinoDashboardv2 dashboardsV2Show(id, opts)

show dashboards_v2

Show a dashboard by id

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure Bearer access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ArduinoIotClient.DashboardsV2Api();
let id = "id_example"; // String | The id of the dashboard
let opts = {
  'xOrganization': "xOrganization_example" // String | Organization space identifer (optional)
};
apiInstance.dashboardsV2Show(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the dashboard | 
 **xOrganization** | **String**| Organization space identifer (optional) | [optional] 

### Return type

[**ArduinoDashboardv2**](ArduinoDashboardv2.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.arduino.dashboardv2+json, application/vnd.goa.error+json


## dashboardsV2Template

> ArduinoDashboardv2template dashboardsV2Template(id, opts)

template dashboards_v2

Get a template of the dashboard

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure Bearer access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ArduinoIotClient.DashboardsV2Api();
let id = "id_example"; // String | The id of the dashboard
let opts = {
  'xOrganization': "xOrganization_example" // String | Organization space identifer (optional)
};
apiInstance.dashboardsV2Template(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the dashboard | 
 **xOrganization** | **String**| Organization space identifer (optional) | [optional] 

### Return type

[**ArduinoDashboardv2template**](ArduinoDashboardv2template.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.arduino.dashboardv2template+json, application/vnd.goa.error+json


## dashboardsV2Update

> ArduinoDashboardv2 dashboardsV2Update(id, dashboardv2, opts)

update dashboards_v2

Updates an existing dashboard

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure Bearer access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ArduinoIotClient.DashboardsV2Api();
let id = "id_example"; // String | The id of the dashboard
let dashboardv2 = new ArduinoIotClient.Dashboardv2(); // Dashboardv2 | Describes a dashboard
let opts = {
  'xOrganization': "xOrganization_example" // String | Organization space identifer (optional)
};
apiInstance.dashboardsV2Update(id, dashboardv2, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the dashboard | 
 **dashboardv2** | [**Dashboardv2**](Dashboardv2.md)| Describes a dashboard | 
 **xOrganization** | **String**| Organization space identifer (optional) | [optional] 

### Return type

[**ArduinoDashboardv2**](ArduinoDashboardv2.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/vnd.arduino.dashboardv2+json, application/vnd.goa.error+json

