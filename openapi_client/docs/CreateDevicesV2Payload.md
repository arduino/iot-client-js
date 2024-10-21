# ArduinoIotClient.CreateDevicesV2Payload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_type** | **str** | The type of the connections selected by the user when multiple connections are available | [optional] 
**fqbn** | **str** | The fully qualified board name | [optional] 
**name** | **str** | The friendly name of the device | [optional] 
**serial** | **str** | The serial uuid of the device | [optional] 
**type** | **str** | The type of the device | 
**user_id** | **str** | The user_id associated to the device. If absent it will be inferred from the authentication header | [optional] 
**wifi_fw_version** | **str** | The version of the NINA/WIFI101 firmware running on the device | [optional] 



## Enum: Connection_typeEnum


* `&#39;wifi&#39;` (value: `'wifi'`)

* `&#39;eth&#39;` (value: `'eth'`)

* `&#39;wifiandsecret&#39;` (value: `'wifiandsecret'`)

* `&#39;gsm&#39;` (value: `'gsm'`)

* `&#39;nb&#39;` (value: `'nb'`)

* `&#39;lora&#39;` (value: `'lora'`)

* `&#39;catm1&#39;` (value: `'catm1'`)

* `&#39;cellular&#39;` (value: `'cellular'`)





## Enum: TypeEnum


* `&#39;mkrwifi1010&#39;` (value: `'mkrwifi1010'`)

* `&#39;mkr1000&#39;` (value: `'mkr1000'`)

* `&#39;nano_33_iot&#39;` (value: `'nano_33_iot'`)

* `&#39;mkrgsm1400&#39;` (value: `'mkrgsm1400'`)

* `&#39;mkrnb1500&#39;` (value: `'mkrnb1500'`)

* `&#39;login_and_secretkey_wifi&#39;` (value: `'login_and_secretkey_wifi'`)

* `&#39;envie_m7&#39;` (value: `'envie_m7'`)

* `&#39;nanorp2040connect&#39;` (value: `'nanorp2040connect'`)

* `&#39;nicla_vision&#39;` (value: `'nicla_vision'`)

* `&#39;phone&#39;` (value: `'phone'`)

* `&#39;portenta_x8&#39;` (value: `'portenta_x8'`)

* `&#39;opta&#39;` (value: `'opta'`)

* `&#39;giga&#39;` (value: `'giga'`)

* `&#39;generic_device_secretkey&#39;` (value: `'generic_device_secretkey'`)

* `&#39;portenta_c33&#39;` (value: `'portenta_c33'`)

* `&#39;unor4wifi&#39;` (value: `'unor4wifi'`)

* `&#39;nano_nora&#39;` (value: `'nano_nora'`)




