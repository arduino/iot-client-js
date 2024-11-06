# ArduinoIotClient.TriggersV1Api

All URIs are relative to *https://api2.arduino.cc*

Method | HTTP request | Description
------------- | ------------- | -------------
[**actionsV1Create**](TriggersV1Api.md#actionsV1Create) | **POST** /iot/v1/actions | create actions_v1
[**actionsV1Delete**](TriggersV1Api.md#actionsV1Delete) | **DELETE** /iot/v1/actions/{id} | delete actions_v1
[**actionsV1List**](TriggersV1Api.md#actionsV1List) | **GET** /iot/v1/actions | list actions_v1
[**actionsV1Show**](TriggersV1Api.md#actionsV1Show) | **GET** /iot/v1/actions/{id} | show actions_v1
[**actionsV1Update**](TriggersV1Api.md#actionsV1Update) | **PUT** /iot/v1/actions/{id} | update actions_v1
[**triggersV1Create**](TriggersV1Api.md#triggersV1Create) | **PUT** /iot/v1/triggers | create triggers_v1
[**triggersV1Delete**](TriggersV1Api.md#triggersV1Delete) | **DELETE** /iot/v1/triggers/{id} | delete triggers_v1
[**triggersV1List**](TriggersV1Api.md#triggersV1List) | **GET** /iot/v1/triggers | list triggers_v1
[**triggersV1Patch**](TriggersV1Api.md#triggersV1Patch) | **PATCH** /iot/v1/triggers/{id} | patch triggers_v1
[**triggersV1Show**](TriggersV1Api.md#triggersV1Show) | **GET** /iot/v1/triggers/{id} | show triggers_v1
[**triggersV1Template**](TriggersV1Api.md#triggersV1Template) | **GET** /iot/v1/triggers/{id}/template | template triggers_v1
[**triggersV1Update**](TriggersV1Api.md#triggersV1Update) | **POST** /iot/v1/triggers/{id} | update triggers_v1



## actionsV1Create

> ArduinoAction actionsV1Create(createAction, opts)

create actions_v1

Creates a new action

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ArduinoIotClient.TriggersV1Api();
let createAction = new ArduinoIotClient.CreateAction(); // CreateAction | 
let opts = {
  'xOrganization': "xOrganization_example" // String | 
};
apiInstance.actionsV1Create(createAction, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createAction** | [**CreateAction**](CreateAction.md)|  | 
 **xOrganization** | **String**|  | [optional] 

### Return type

[**ArduinoAction**](ArduinoAction.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/vnd.arduino.action+json, application/vnd.goa.error+json


## actionsV1Delete

> actionsV1Delete(id, opts)

delete actions_v1

Removes an action

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ArduinoIotClient.TriggersV1Api();
let id = "id_example"; // String | The id of the action
let opts = {
  'xOrganization': "xOrganization_example" // String | 
};
apiInstance.actionsV1Delete(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the action | 
 **xOrganization** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.goa.error+json, text/plain


## actionsV1List

> [ArduinoAction] actionsV1List(opts)

list actions_v1

Returns the list of actions

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ArduinoIotClient.TriggersV1Api();
let opts = {
  'xOrganization': "xOrganization_example" // String | 
};
apiInstance.actionsV1List(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xOrganization** | **String**|  | [optional] 

### Return type

[**[ArduinoAction]**](ArduinoAction.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.arduino.action+json; type=collection, application/vnd.goa.error+json


## actionsV1Show

> ArduinoAction actionsV1Show(id, opts)

show actions_v1

Returns an action

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ArduinoIotClient.TriggersV1Api();
let id = "id_example"; // String | The id of the action
let opts = {
  'xOrganization': "xOrganization_example" // String | 
};
apiInstance.actionsV1Show(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the action | 
 **xOrganization** | **String**|  | [optional] 

### Return type

[**ArduinoAction**](ArduinoAction.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.arduino.action+json, application/vnd.goa.error+json


## actionsV1Update

> ArduinoAction actionsV1Update(id, updateAction, opts)

update actions_v1

Updates an action

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ArduinoIotClient.TriggersV1Api();
let id = "id_example"; // String | The id of the action
let updateAction = new ArduinoIotClient.UpdateAction(); // UpdateAction | 
let opts = {
  'xOrganization': "xOrganization_example" // String | 
};
apiInstance.actionsV1Update(id, updateAction, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the action | 
 **updateAction** | [**UpdateAction**](UpdateAction.md)|  | 
 **xOrganization** | **String**|  | [optional] 

### Return type

[**ArduinoAction**](ArduinoAction.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/vnd.arduino.action+json, application/vnd.goa.error+json


## triggersV1Create

> ArduinoTrigger triggersV1Create(trigger, opts)

create triggers_v1

Creates a new trigger

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ArduinoIotClient.TriggersV1Api();
let trigger = new ArduinoIotClient.Trigger(); // Trigger | 
let opts = {
  'xOrganization': "xOrganization_example" // String | 
};
apiInstance.triggersV1Create(trigger, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trigger** | [**Trigger**](Trigger.md)|  | 
 **xOrganization** | **String**|  | [optional] 

### Return type

[**ArduinoTrigger**](ArduinoTrigger.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/vnd.arduino.trigger+json, application/vnd.goa.error+json


## triggersV1Delete

> triggersV1Delete(id, opts)

delete triggers_v1

Removes a trigger

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ArduinoIotClient.TriggersV1Api();
let id = "id_example"; // String | The id of the trigger
let opts = {
  'force': false, // Boolean | If true, hard delete the trigger
  'xOrganization': "xOrganization_example" // String | 
};
apiInstance.triggersV1Delete(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the trigger | 
 **force** | **Boolean**| If true, hard delete the trigger | [optional] [default to false]
 **xOrganization** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.goa.error+json, text/plain


## triggersV1List

> [ArduinoTrigger] triggersV1List(opts)

list triggers_v1

Returns the list of triggers

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ArduinoIotClient.TriggersV1Api();
let opts = {
  'deviceId': "deviceId_example", // String | The id of the device associated with the triggers (mutually exclusive with 'property_id')
  'propertyId': "propertyId_example", // String | The id of the property associated with the triggers (mutually exclusive with 'device_id')
  'showDeleted': false, // Boolean | If true, shows the soft deleted triggers
  'sourceType': "sourceType_example", // String | The source type of the trigger, could be PROPERTY, DEVICE_INCLUDE or DEVICE_EXCLUDE
  'xOrganization': "xOrganization_example" // String | 
};
apiInstance.triggersV1List(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**| The id of the device associated with the triggers (mutually exclusive with &#39;property_id&#39;) | [optional] 
 **propertyId** | **String**| The id of the property associated with the triggers (mutually exclusive with &#39;device_id&#39;) | [optional] 
 **showDeleted** | **Boolean**| If true, shows the soft deleted triggers | [optional] [default to false]
 **sourceType** | **String**| The source type of the trigger, could be PROPERTY, DEVICE_INCLUDE or DEVICE_EXCLUDE | [optional] 
 **xOrganization** | **String**|  | [optional] 

### Return type

[**[ArduinoTrigger]**](ArduinoTrigger.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.arduino.trigger+json; type=collection, application/vnd.goa.error+json


## triggersV1Patch

> ArduinoTrigger triggersV1Patch(id, trigger, opts)

patch triggers_v1

Patch a trigger

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ArduinoIotClient.TriggersV1Api();
let id = "id_example"; // String | The id of the trigger
let trigger = new ArduinoIotClient.Trigger(); // Trigger | 
let opts = {
  'xOrganization': "xOrganization_example" // String | 
};
apiInstance.triggersV1Patch(id, trigger, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the trigger | 
 **trigger** | [**Trigger**](Trigger.md)|  | 
 **xOrganization** | **String**|  | [optional] 

### Return type

[**ArduinoTrigger**](ArduinoTrigger.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/vnd.arduino.trigger+json, application/vnd.goa.error+json


## triggersV1Show

> ArduinoTriggerWithLinkedEntities triggersV1Show(id, opts)

show triggers_v1

Returns a trigger

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ArduinoIotClient.TriggersV1Api();
let id = "id_example"; // String | The id of the trigger
let opts = {
  'xOrganization': "xOrganization_example" // String | 
};
apiInstance.triggersV1Show(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the trigger | 
 **xOrganization** | **String**|  | [optional] 

### Return type

[**ArduinoTriggerWithLinkedEntities**](ArduinoTriggerWithLinkedEntities.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.arduino.trigger_with_linked_entities+json, application/vnd.goa.error+json


## triggersV1Template

> ArduinoTriggerTemplate triggersV1Template(id, opts)

template triggers_v1

Extract template from the given trigger

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ArduinoIotClient.TriggersV1Api();
let id = "id_example"; // String | The id of the trigger
let opts = {
  'xOrganization': "xOrganization_example" // String | 
};
apiInstance.triggersV1Template(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the trigger | 
 **xOrganization** | **String**|  | [optional] 

### Return type

[**ArduinoTriggerTemplate**](ArduinoTriggerTemplate.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.arduino.trigger_template+json, application/vnd.goa.error+json


## triggersV1Update

> ArduinoTrigger triggersV1Update(id, trigger, opts)

update triggers_v1

Updates a trigger

### Example

```javascript
import ArduinoIotClient from '@arduino/arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ArduinoIotClient.TriggersV1Api();
let id = "id_example"; // String | The id of the trigger
let trigger = new ArduinoIotClient.Trigger(); // Trigger | 
let opts = {
  'xOrganization': "xOrganization_example" // String | 
};
apiInstance.triggersV1Update(id, trigger, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the trigger | 
 **trigger** | [**Trigger**](Trigger.md)|  | 
 **xOrganization** | **String**|  | [optional] 

### Return type

[**ArduinoTrigger**](ArduinoTrigger.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/vnd.arduino.trigger+json, application/vnd.goa.error+json

