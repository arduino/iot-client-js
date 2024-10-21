# ArduinoIotClient.BatchQueryRawRequestMediaV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**from** | **Date** | From timestamp | [optional] 
**q** | **String** | Data selection query (e.g. property.2a99729d-2556-4220-a139-023348a1e6b5 or thing.95717675-4786-4ffc-afcc-799777755391) | 
**seriesLimit** | **Number** | Maximum number of values returned, if any (default/limit: 1000, 10000 in case of thing query) | [optional] 
**sort** | **String** | Sorting | [optional] [default to &#39;DESC&#39;]
**to** | **Date** | To timestamp | [optional] 



## Enum: SortEnum


* `ASC` (value: `"ASC"`)

* `DESC` (value: `"DESC"`)




