# ArduinoIotClient.ThingCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assistant** | **String** | The kind of voice assistant the thing is connected to, it can be ALEXA | GOOGLE | NONE | [optional] 
**deviceId** | **String** | The arn of the associated device | [optional] 
**id** | **String** | The id of the thing | [optional] 
**name** | **String** | The friendly name of the thing | [optional] 
**properties** | [**[Property]**](Property.md) | The properties of the thing | [optional] 
**tags** | [**[Tag]**](Tag.md) | Optional set of tags | [optional] 
**timezone** | **String** | A time zone name Check /v2/timezones for a list of valid names. | [optional] [default to &#39;America/New_York&#39;]
**webhookActive** | **Boolean** | Webhook uri | [optional] 
**webhookUri** | **String** | Webhook uri | [optional] 



## Enum: AssistantEnum


* `ALEXA` (value: `"ALEXA"`)

* `GOOGLE` (value: `"GOOGLE"`)

* `NONE` (value: `"NONE"`)




