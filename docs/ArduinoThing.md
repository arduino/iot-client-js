# ArduinoIotClient.ArduinoThing

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assistant** | **String** | The kind of voice assistant the thing is connected to, it can be ALEXA | GOOGLE | NONE | [optional] 
**createdAt** | **Date** | Creation date of the thing | [optional] 
**deletedAt** | **Date** | Delete date of the thing | [optional] 
**deviceFqbn** | **String** | The fqbn of the attached device, if any | [optional] 
**deviceId** | **String** | The id of the device | [optional] 
**deviceName** | **String** | The name of the attached device, if any | [optional] 
**deviceType** | **String** | The type of the attached device, if any | [optional] 
**href** | **String** | The api reference of this thing | 
**id** | **String** | The id of the thing | 
**name** | **String** | The friendly name of the thing | 
**organizationId** | **String** | Id of the organization the thing belongs to | [optional] 
**properties** | [**[ArduinoProperty]**](ArduinoProperty.md) | ArduinoPropertyCollection is the media type for an array of ArduinoProperty (default view) | [optional] 
**propertiesCount** | **Number** | The number of properties of the thing | [optional] 
**sketchId** | **String** | The id of the attached sketch | [optional] 
**tags** | **{String: Object}** | Tags of the thing | [optional] 
**timezone** | **String** | Time zone of the thing | 
**updatedAt** | **Date** | Update date of the thing | [optional] 
**userId** | **String** | The user id of the owner | 
**webhookActive** | **Boolean** | Webhook uri | [optional] 
**webhookUri** | **String** | Webhook uri | [optional] 



## Enum: AssistantEnum


* `ALEXA` (value: `"ALEXA"`)

* `GOOGLE` (value: `"GOOGLE"`)

* `NONE` (value: `"NONE"`)




