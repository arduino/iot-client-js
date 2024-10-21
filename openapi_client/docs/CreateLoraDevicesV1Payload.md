# ArduinoIotClient.CreateLoraDevicesV1Payload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app** | **str** | The app name | 
**app_eui** | **str** | The app eui of the lora device | [optional] 
**app_key** | **str** | The app key of the lora device | [optional] 
**eui** | **str** | The eui of the lora device | 
**frequency_plan** | **str** | The frequency plan required by your country  | 
**name** | **str** | A common name for the device | 
**serial** | **str** | The optional serial number | [optional] 
**type** | **str** | The type of device | 
**user_id** | **str** | The id of the user. Can be the special string &#39;me&#39; | 



## Enum: Frequency_planEnum


* `&#39;EU_863_870_TTN&#39;` (value: `'EU_863_870_TTN'`)

* `&#39;US_902_928_FSB_2&#39;` (value: `'US_902_928_FSB_2'`)

* `&#39;EU_433&#39;` (value: `'EU_433'`)

* `&#39;AU_915_928_FSB_2&#39;` (value: `'AU_915_928_FSB_2'`)

* `&#39;CN_470_510_FSB_11&#39;` (value: `'CN_470_510_FSB_11'`)

* `&#39;AS_920_923&#39;` (value: `'AS_920_923'`)

* `&#39;AS_920_923_TTN_AU&#39;` (value: `'AS_920_923_TTN_AU'`)

* `&#39;AS_923_925&#39;` (value: `'AS_923_925'`)

* `&#39;AS_923_925_TTN_AU&#39;` (value: `'AS_923_925_TTN_AU'`)

* `&#39;KR_920_923_TTN&#39;` (value: `'KR_920_923_TTN'`)

* `&#39;IN_865_867&#39;` (value: `'IN_865_867'`)





## Enum: TypeEnum


* `&#39;lora-device&#39;` (value: `'lora-device'`)

* `&#39;mkrwan1300&#39;` (value: `'mkrwan1300'`)

* `&#39;mkrwan1310&#39;` (value: `'mkrwan1310'`)




