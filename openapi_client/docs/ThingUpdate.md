# ArduinoIotClient.ThingUpdate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assistant** | **str** | The kind of voice assistant the thing is connected to, it can be ALEXA | GOOGLE | NONE | [optional] 
**device_id** | **str** | The arn of the associated device | [optional] 
**id** | **str** | The id of the thing | [optional] 
**name** | **str** | The friendly name of the thing | [optional] 
**properties** | [**List[ModelProperty]**](ModelProperty.md) | The properties of the thing | [optional] 
**timezone** | **str** | A time zone name. Check /v2/timezones for a list of valid names. | [optional] 
**webhook_active** | **bool** | Webhook uri | [optional] 
**webhook_uri** | **str** | Webhook uri | [optional] 



## Enum: AssistantEnum


* `&#39;ALEXA&#39;` (value: `'ALEXA'`)

* `&#39;GOOGLE&#39;` (value: `'GOOGLE'`)

* `&#39;NONE&#39;` (value: `'NONE'`)




