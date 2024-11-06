# ArduinoIotClient.ArduinoDevicev2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connectionType** | **String** | The type of the connections selected by the user when multiple connections are available | [optional] 
**createdAt** | **Date** | Creation date of the device | [optional] 
**deletedAt** | **Date** | Deletion date of the trigger | [optional] 
**deviceStatus** | **String** | The connection status of the device | [optional] 
**events** | [**[ArduinoDevicev2SimpleProperties]**](ArduinoDevicev2SimpleProperties.md) | ArduinoDevicev2SimplePropertiesCollection is the media type for an array of ArduinoDevicev2SimpleProperties (default view) | [optional] 
**fqbn** | **String** | The fully qualified board name | [optional] 
**href** | **String** | The api reference of this device | 
**id** | **String** | The arn of the device | 
**label** | **String** | The label of the device | 
**lastActivityAt** | **Date** | Last activity date | [optional] 
**latestWifiFwVersion** | **String** | The latest version of the NINA/WIFI101 firmware available for this device | [optional] 
**metadata** | **{String: Object}** | The metadata of the device | [optional] 
**name** | **String** | The friendly name of the device | 
**noSketch** | **Boolean** | True if the device type can not have an associated sketch | [optional] 
**organizationId** | **String** | Id of the organization the device belongs to | [optional] 
**otaAvailable** | **Boolean** | True if the device type is ready to receive OTA updated | [optional] 
**otaCompatible** | **Boolean** | True if the device type is OTA compatible | [optional] 
**requiredWifiFwVersion** | **String** | The required version of the NINA/WIFI101 firmware needed by IoT Cloud | [optional] 
**serial** | **String** | The serial uuid of the device | 
**tags** | **{String: Object}** | Tags belonging to the device | [optional] 
**thing** | [**ArduinoThing**](ArduinoThing.md) |  | [optional] 
**type** | **String** | The type of the device | 
**updatedAt** | **Date** | Update date of the trigger | [optional] 
**userId** | **String** | The id of the user | 
**webhooks** | [**[ArduinoDevicev2Webhook]**](ArduinoDevicev2Webhook.md) | ArduinoDevicev2WebhookCollection is the media type for an array of ArduinoDevicev2Webhook (default view) | [optional] 
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





## Enum: DeviceStatusEnum


* `ONLINE` (value: `"ONLINE"`)

* `OFFLINE` (value: `"OFFLINE"`)

* `UNKNOWN` (value: `"UNKNOWN"`)




