# ArduinoIotClient.ArduinoSeriesRawResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count_values** | **int** | Total number of values in the array &#39;values&#39; | 
**from_date** | **datetime** | From date | 
**message** | **str** | If the response is different than &#39;ok&#39; | [optional] [default to &#39;&#39;]
**property_id** | **str** | Property id | [optional] 
**property_name** | **str** | Property name | [optional] 
**property_type** | **str** | Property type | [optional] 
**query** | **str** | Query of for the data | 
**resp_version** | **int** | Response version | 
**series** | [**BatchQueryRawResponseSeriesMediaV1**](BatchQueryRawResponseSeriesMediaV1.md) |  | 
**series_limit** | **int** | Max of values | [optional] 
**sort** | **str** | Sorting | 
**status** | **str** | Status of the response | 
**thing_id** | **str** | Thing id | [optional] 
**times** | **List[datetime]** | Timestamp in RFC3339 | 
**to_date** | **datetime** | To date | 
**values** | **List[object]** | Values can be in Float, String, Bool, Object | 



## Enum: SortEnum


* `&#39;ASC&#39;` (value: `'ASC'`)

* `&#39;DESC&#39;` (value: `'DESC'`)




