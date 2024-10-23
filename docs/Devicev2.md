# ArduinoIotClient.Devicev2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connectionType** | **String** | The type of the connections selected by the user when multiple connections are available | [optional] 
**fqbn** | **String** | The fully qualified board name | [optional] 
**name** | **String** | The friendly name of the device | [optional] 
**serial** | **String** | The serial uuid of the device | [optional] 
**type** | **String** | The type of the device | [optional] 
**userId** | **String** | The user_id associated to the device. If absent it will be inferred from the authentication header | [optional] 
**wifiFwVersion** | **String** | The version of the NINA/WIFI101 firmware running on the device | [optional] 



## Enum: ConnectionTypeEnum


* `wifi` (value: `"wifi"`)

* `eth` (value: `"eth"`)

* `wifiandsecret` (value: `"wifiandsecret"`)

* `gsm` (value: `"gsm"`)

* `nb` (value: `"nb"`)

* `lora` (value: `"lora"`)

* `catm1` (value: `"catm1"`)

* `cellular` (value: `"cellular"`)





## Enum: TypeEnum


* `mkrwifi1010` (value: `"mkrwifi1010"`)

* `mkr1000` (value: `"mkr1000"`)

* `nano_33_iot` (value: `"nano_33_iot"`)

* `mkrgsm1400` (value: `"mkrgsm1400"`)

* `mkrnb1500` (value: `"mkrnb1500"`)

* `login_and_secretkey_wifi` (value: `"login_and_secretkey_wifi"`)

* `envie_m7` (value: `"envie_m7"`)

* `nanorp2040connect` (value: `"nanorp2040connect"`)

* `nicla_vision` (value: `"nicla_vision"`)

* `phone` (value: `"phone"`)

* `portenta_x8` (value: `"portenta_x8"`)

* `opta` (value: `"opta"`)

* `giga` (value: `"giga"`)

* `generic_device_secretkey` (value: `"generic_device_secretkey"`)

* `portenta_c33` (value: `"portenta_c33"`)

* `unor4wifi` (value: `"unor4wifi"`)

* `nano_nora` (value: `"nano_nora"`)




