# ArduinoIotClient.BatchQuerySampledRequestMediaV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_from** | **datetime** | From timestamp (default: now UTC - 24h) | [optional] 
**interval** | **int** | Resolution in seconds (allowed min:60, max:86400) | [optional] [default to 300]
**q** | **str** | Data selection query (e.g. property.2a99729d-2556-4220-a139-023348a1e6b5) | 
**series_limit** | **int** | Maximum number of values returned after data aggregation, if any (default: 300, limit: 1000) | [optional] 
**to** | **datetime** | To timestamp (default: now UTC) | [optional] 


