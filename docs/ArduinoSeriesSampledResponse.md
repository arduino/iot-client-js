# ArduinoIotClient.ArduinoSeriesSampledResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
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
**values** | **[Object]** | Values in Float | 


