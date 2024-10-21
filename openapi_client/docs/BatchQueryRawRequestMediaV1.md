# ArduinoIotClient.BatchQueryRawRequestMediaV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_from** | **datetime** | From timestamp | [optional] 
**q** | **str** | Data selection query (e.g. property.2a99729d-2556-4220-a139-023348a1e6b5 or thing.95717675-4786-4ffc-afcc-799777755391) | 
**series_limit** | **int** | Maximum number of values returned, if any (default/limit: 1000, 10000 in case of thing query) | [optional] 
**sort** | **str** | Sorting | [optional] [default to &#39;DESC&#39;]
**to** | **datetime** | To timestamp | [optional] 



## Enum: SortEnum


* `&#39;ASC&#39;` (value: `'ASC'`)

* `&#39;DESC&#39;` (value: `'DESC'`)




