# ArduinoIotClient.ArduinoSeriesSampledResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
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
**values** | **List[object]** | Values in Float | 


