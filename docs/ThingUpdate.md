# ArduinoIotClient.ThingUpdate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assistant** | **String** | The kind of voice assistant the thing is connected to, it can be ALEXA | GOOGLE | NONE | [optional] 
**deviceId** | **String** | The arn of the associated device | [optional] 
**id** | **String** | The id of the thing | [optional] 
**name** | **String** | The friendly name of the thing | [optional] 
**properties** | [**[Property]**](Property.md) | The properties of the thing | [optional] 
**softDeleted** | **Boolean** | If false, restore the thing from the soft deletion | [optional] [default to false]
**timezone** | **String** | A time zone name. Check /v2/timezones for a list of valid names. | [optional] 
**webhookActive** | **Boolean** | Webhook uri | [optional] 
**webhookUri** | **String** | Webhook uri | [optional] 



## Enum: AssistantEnum


* `ALEXA` (value: `"ALEXA"`)

* `GOOGLE` (value: `"GOOGLE"`)

* `NONE` (value: `"NONE"`)




