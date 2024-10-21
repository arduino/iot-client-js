# ArduinoIotClient.BatchQueryRequestMediaV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregation** | **str** | Aggregation statistic function. For numeric values, AVG statistic is used by default. PCT_X compute the Xth approximate percentile (e.g. PCT_95 is the 95th approximate percentile). For boolean, BOOL_OR statistic is used as default. | [optional] 
**var_from** | **datetime** | From timestamp | 
**interval** | **int** | Resolution in seconds (max allowed: 86400) | [optional] 
**q** | **str** | Data selection query (e.g. property.2a99729d-2556-4220-a139-023348a1e6b5 or thing.95717675-4786-4ffc-afcc-799777755391) | 
**series_limit** | **int** | Maximum number of values returned after data aggregation, if any (default: 300, limit: 1000 - 10000 in case of thing query) | [optional] 
**to** | **datetime** | To timestamp | 



## Enum: AggregationEnum


* `&#39;AVG&#39;` (value: `'AVG'`)

* `&#39;MIN&#39;` (value: `'MIN'`)

* `&#39;MAX&#39;` (value: `'MAX'`)

* `&#39;SUM&#39;` (value: `'SUM'`)

* `&#39;COUNT&#39;` (value: `'COUNT'`)

* `&#39;PCT_99&#39;` (value: `'PCT_99'`)

* `&#39;PCT_95&#39;` (value: `'PCT_95'`)

* `&#39;PCT_90&#39;` (value: `'PCT_90'`)

* `&#39;PCT_75&#39;` (value: `'PCT_75'`)

* `&#39;PCT_50&#39;` (value: `'PCT_50'`)

* `&#39;PCT_15&#39;` (value: `'PCT_15'`)

* `&#39;PCT_5&#39;` (value: `'PCT_5'`)

* `&#39;BOOL_OR&#39;` (value: `'BOOL_OR'`)

* `&#39;BOOL_AND&#39;` (value: `'BOOL_AND'`)




