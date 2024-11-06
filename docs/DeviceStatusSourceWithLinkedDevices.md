# ArduinoIotClient.DeviceStatusSourceWithLinkedDevices

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**criteria** | **String** | The criteria of the trigger, could be INCLUDE or EXCLUDE | 
**gracePeriodOffline** | **Number** | The amount of seconds the trigger will wait before considering a matching device as offline | [optional] 
**gracePeriodOnline** | **Number** | The amount of seconds the trigger will wait before considering a matching device as online | [optional] 
**linkedDevices** | [**[ArduinoLinkedDevice]**](ArduinoLinkedDevice.md) | A list of devices the trigger is associated to | [optional] 


