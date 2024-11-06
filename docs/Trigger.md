# ArduinoIotClient.Trigger

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | [**[CreateAction]**](CreateAction.md) | A list of actions to be associated with the trigger | [optional] 
**active** | **Boolean** | Is true if the trigger is enabled | [optional] 
**description** | **String** | The description of the trigger | [optional] 
**deviceStatusSource** | [**DeviceStatusSource**](DeviceStatusSource.md) |  | [optional] 
**id** | **String** | The id of the trigger | [optional] 
**name** | **String** | The name of the trigger | [optional] 
**propertyId** | **String** | Id of the property the trigger is associated to (mutually exclusive with &#39;device_status_source&#39;) | [optional] 
**softDeleted** | **Boolean** | If false, restore the thing from the soft deletion | [optional] [default to false]


