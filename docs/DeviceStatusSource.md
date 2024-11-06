# ArduinoIotClient.DeviceStatusSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**criteria** | **String** | The matching criteria of the trigger, this allows to interpret device_ids as an inclusion or exclusion list | 
**deviceIds** | **[String]** | A list of device IDs to be included in or excluded from the trigger (see criteria). Mutually exclusive with property_id. | [optional] 
**gracePeriodOffline** | **Number** | Amount of seconds the trigger will wait before the device will be considered disconnected (requires &#39;device_id&#39;) | [optional] 
**gracePeriodOnline** | **Number** | Amount of seconds the trigger will wait before the device will be considered connected (requires &#39;device_id&#39;) | [optional] 



## Enum: CriteriaEnum


* `INCLUDE` (value: `"INCLUDE"`)

* `EXCLUDE` (value: `"EXCLUDE"`)




