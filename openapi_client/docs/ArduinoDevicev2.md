# ArduinoIotClient.ArduinoDevicev2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_type** | **str** | The type of the connections selected by the user when multiple connections are available | [optional] 
**created_at** | **datetime** | Creation date of the device | [optional] 
**device_status** | **str** | The connection status of the device | [optional] 
**events** | [**List[ArduinoDevicev2SimpleProperties]**](ArduinoDevicev2SimpleProperties.md) | ArduinoDevicev2SimplePropertiesCollection is the media type for an array of ArduinoDevicev2SimpleProperties (default view) | [optional] 
**fqbn** | **str** | The fully qualified board name | [optional] 
**href** | **str** | The api reference of this device | 
**id** | **str** | The arn of the device | 
**label** | **str** | The label of the device | 
**last_activity_at** | **datetime** | Last activity date | [optional] 
**latest_wifi_fw_version** | **str** | The latest version of the NINA/WIFI101 firmware available for this device | [optional] 
**metadata** | **Dict[str, object]** | The metadata of the device | [optional] 
**name** | **str** | The friendly name of the device | 
**no_sketch** | **bool** | True if the device type can not have an associated sketch | [optional] 
**organization_id** | **str** | Id of the organization the device belongs to | [optional] 
**ota_available** | **bool** | True if the device type is ready to receive OTA updated | [optional] 
**ota_compatible** | **bool** | True if the device type is OTA compatible | [optional] 
**required_wifi_fw_version** | **str** | The required version of the NINA/WIFI101 firmware needed by IoT Cloud | [optional] 
**serial** | **str** | The serial uuid of the device | 
**tags** | **Dict[str, object]** | Tags belonging to the device | [optional] 
**thing** | [**ArduinoThing**](ArduinoThing.md) |  | [optional] 
**type** | **str** | The type of the device | 
**user_id** | **str** | The id of the user | 
**webhooks** | [**List[ArduinoDevicev2Webhook]**](ArduinoDevicev2Webhook.md) | ArduinoDevicev2WebhookCollection is the media type for an array of ArduinoDevicev2Webhook (default view) | [optional] 
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





## Enum: Device_statusEnum


* `&#39;ONLINE&#39;` (value: `'ONLINE'`)

* `&#39;OFFLINE&#39;` (value: `'OFFLINE'`)

* `&#39;UNKNOWN&#39;` (value: `'UNKNOWN'`)




