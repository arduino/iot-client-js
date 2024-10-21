# ArduinoIotClient.CreateLoraDevicesV1Payload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app** | **String** | The app name | 
**appEui** | **String** | The app eui of the lora device | [optional] 
**appKey** | **String** | The app key of the lora device | [optional] 
**eui** | **String** | The eui of the lora device | 
**frequencyPlan** | **String** | The frequency plan required by your country  | 
**name** | **String** | A common name for the device | 
**serial** | **String** | The optional serial number | [optional] 
**type** | **String** | The type of device | 
**userId** | **String** | The id of the user. Can be the special string &#39;me&#39; | 



## Enum: FrequencyPlanEnum


* `EU_863_870_TTN` (value: `"EU_863_870_TTN"`)

* `US_902_928_FSB_2` (value: `"US_902_928_FSB_2"`)

* `EU_433` (value: `"EU_433"`)

* `AU_915_928_FSB_2` (value: `"AU_915_928_FSB_2"`)

* `CN_470_510_FSB_11` (value: `"CN_470_510_FSB_11"`)

* `AS_920_923` (value: `"AS_920_923"`)

* `AS_920_923_TTN_AU` (value: `"AS_920_923_TTN_AU"`)

* `AS_923_925` (value: `"AS_923_925"`)

* `AS_923_925_TTN_AU` (value: `"AS_923_925_TTN_AU"`)

* `KR_920_923_TTN` (value: `"KR_920_923_TTN"`)

* `IN_865_867` (value: `"IN_865_867"`)





## Enum: TypeEnum


* `lora-device` (value: `"lora-device"`)

* `mkrwan1300` (value: `"mkrwan1300"`)

* `mkrwan1310` (value: `"mkrwan1310"`)




