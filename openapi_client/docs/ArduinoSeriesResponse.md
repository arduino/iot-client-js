# ArduinoIotClient.ArduinoSeriesResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregation** | **str** | Aggregation statistic function. For numeric values, AVG statistic is used by default. PCT_X compute the Xth approximate percentile (e.g. PCT_95 is the 95th approximate percentile). For boolean, BOOL_OR statistic is used as default. | [optional] 
**count_values** | **int** | Total number of values in the array &#39;values&#39; | 
**from_date** | **datetime** | From date | 
**interval** | **int** | Resolution in seconds | 
**message** | **str** | If the response is different than &#39;ok&#39; | [optional] [default to &#39;&#39;]
**property_id** | **str** | Property id | [optional] 
**property_name** | **str** | Property name | [optional] 
**property_type** | **str** | Property type | [optional] 
**query** | **str** | Query of for the data | 
**resp_version** | **int** | Response version | 
**series_limit** | **int** | Maximum number of values returned after data aggregation, if any | [optional] 
**status** | **str** | Status of the response | 
**thing_id** | **str** | Thing id | [optional] 
**times** | **List[datetime]** | Timestamp in RFC3339 | 
**to_date** | **datetime** | To date | 
**values** | **List[float]** | Values in Float | 



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




