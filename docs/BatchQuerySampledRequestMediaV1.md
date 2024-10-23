# ArduinoIotClient.BatchQuerySampledRequestMediaV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**from** | **Date** | From timestamp (default: now UTC - 24h) | [optional] 
**interval** | **Number** | Resolution in seconds (allowed min:60, max:86400) | [optional] [default to 300]
**q** | **String** | Data selection query (e.g. property.2a99729d-2556-4220-a139-023348a1e6b5) | 
**seriesLimit** | **Number** | Maximum number of values returned after data aggregation, if any (default: 300, limit: 1000) | [optional] 
**to** | **Date** | To timestamp (default: now UTC) | [optional] 


