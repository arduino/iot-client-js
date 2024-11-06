# ArduinoIotClient.ArduinoTriggerTemplate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | [**[ArduinoActionTemplate]**](ArduinoActionTemplate.md) | A list of actions associated with the trigger | [optional] 
**active** | **Boolean** | Is true if the trigger is enabled | [optional] 
**criteria** | **String** | The criteria of the trigger, could be INCLUDE or EXCLUDE | [optional] 
**description** | **String** | The description of the trigger | [optional] 
**gracePeriodOffline** | **Number** | The amount of seconds the trigger will wait before considering a matching device as offline | [optional] 
**gracePeriodOnline** | **Number** | The amount of seconds the trigger will wait before considering a matching device as online | [optional] 
**id** | **String** | The id of the trigger | 
**linkedDevices** | [**[ArduinoLinkedDeviceTemplate]**](ArduinoLinkedDeviceTemplate.md) | A list of devices the trigger is associated to | [optional] 
**linkedProperty** | [**ArduinoLinkedPropertyTemplate**](ArduinoLinkedPropertyTemplate.md) |  | [optional] 
**name** | **String** | The name of the trigger | 
**organizationId** | **String** | Id of the organization the trigger belongs to | [optional] 


