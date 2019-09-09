# IotApi.ArduinoSeriesRawResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**countValues** | **Number** | Total number of values in the array &#39;values&#39; | 
**fromDate** | **Date** | From date | 
**message** | **String** | If the response is different than &#39;ok&#39; | [optional] [default to &#39;&#39;]
**query** | **String** | Query of for the data | 
**respVersion** | **Number** | Response version | 
**series** | [**BatchQueryRawResponseSeriesMediaV1**](BatchQueryRawResponseSeriesMediaV1.md) |  | 
**seriesLimit** | **Number** | Max of values | [optional] 
**sort** | **String** | Sorting | 
**status** | **String** | Status of the response | 
**times** | **[Date]** | Timestamp in RFC3339 | 
**toDate** | **Date** | To date | 
**values** | **[Object]** | Values can be in Float, String, Bool, Object | 



## Enum: SortEnum


* `ASC` (value: `"ASC"`)

* `DESC` (value: `"DESC"`)




