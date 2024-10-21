# ArduinoIotClient.ArduinoWidgetv2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**has_permission_incompatibility** | **bool** | True if the linked variables permissions are incompatible with the widget | [optional] 
**has_type_incompatibility** | **bool** | True if the linked variables types are incompatible with the widget | [optional] 
**has_unlinked_variable** | **bool** | If it&#39;s true the widget is linked to a soft-deleted variable | [optional] 
**height** | **int** | Widget current height for desktop | 
**height_mobile** | **int** | Widget current height for mobile | [optional] 
**id** | **str** | The UUID of the widget, set by client | 
**name** | **str** | The name of the widget | [optional] 
**options** | **Dict[str, object]** | Widget options | 
**type** | **str** | The type of the widget | 
**variables** | [**List[ArduinoLinkedvariable]**](ArduinoLinkedvariable.md) | ArduinoLinkedvariableCollection is the media type for an array of ArduinoLinkedvariable (default view) | [optional] 
**width** | **int** | Widget current width for desktop | 
**width_mobile** | **int** | Widget current width for mobile | [optional] 
**x** | **int** | Widget x position for desktop | 
**x_mobile** | **int** | Widget x position for mobile | [optional] 
**y** | **int** | Widget y position for desktop | 
**y_mobile** | **int** | Widget y position for mobile | [optional] 


