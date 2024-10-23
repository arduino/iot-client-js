# ArduinoIotClient.ArduinoSeriesResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregation** | **String** | Aggregation statistic function. For numeric values, AVG statistic is used by default. PCT_X compute the Xth approximate percentile (e.g. PCT_95 is the 95th approximate percentile). For boolean, BOOL_OR statistic is used as default. | [optional] 
**countValues** | **Number** | Total number of values in the array &#39;values&#39; | 
**fromDate** | **Date** | From date | 
**interval** | **Number** | Resolution in seconds | 
**message** | **String** | If the response is different than &#39;ok&#39; | [optional] [default to &#39;&#39;]
**propertyId** | **String** | Property id | [optional] 
**propertyName** | **String** | Property name | [optional] 
**propertyType** | **String** | Property type | [optional] 
**query** | **String** | Query of for the data | 
**respVersion** | **Number** | Response version | 
**seriesLimit** | **Number** | Maximum number of values returned after data aggregation, if any | [optional] 
**status** | **String** | Status of the response | 
**thingId** | **String** | Thing id | [optional] 
**times** | **[Date]** | Timestamp in RFC3339 | 
**toDate** | **Date** | To date | 
**values** | **[Number]** | Values in Float | 



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




