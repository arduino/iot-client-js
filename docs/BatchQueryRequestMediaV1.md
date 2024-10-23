# ArduinoIotClient.BatchQueryRequestMediaV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregation** | **String** | Aggregation statistic function. For numeric values, AVG statistic is used by default. PCT_X compute the Xth approximate percentile (e.g. PCT_95 is the 95th approximate percentile). For boolean, BOOL_OR statistic is used as default. | [optional] 
**from** | **Date** | From timestamp | 
**interval** | **Number** | Resolution in seconds (max allowed: 86400) | [optional] 
**q** | **String** | Data selection query (e.g. property.2a99729d-2556-4220-a139-023348a1e6b5 or thing.95717675-4786-4ffc-afcc-799777755391) | 
**seriesLimit** | **Number** | Maximum number of values returned after data aggregation, if any (default: 300, limit: 1000 - 10000 in case of thing query) | [optional] 
**to** | **Date** | To timestamp | 



## Enum: AggregationEnum


* `AVG` (value: `"AVG"`)

* `MIN` (value: `"MIN"`)

* `MAX` (value: `"MAX"`)

* `SUM` (value: `"SUM"`)

* `COUNT` (value: `"COUNT"`)

* `PCT_99` (value: `"PCT_99"`)

* `PCT_95` (value: `"PCT_95"`)

* `PCT_90` (value: `"PCT_90"`)

* `PCT_75` (value: `"PCT_75"`)

* `PCT_50` (value: `"PCT_50"`)

* `PCT_15` (value: `"PCT_15"`)

* `PCT_5` (value: `"PCT_5"`)

* `BOOL_OR` (value: `"BOOL_OR"`)

* `BOOL_AND` (value: `"BOOL_AND"`)




