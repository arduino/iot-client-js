# ArduinoIotClient.Property

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**maxValue** | **Number** | Maximum value of this property | [optional] 
**minValue** | **Number** | Minimum value of this property | [optional] 
**name** | **String** | The friendly name of the property | 
**permission** | **String** | The permission of the property | 
**persist** | **Boolean** | If true, data will persist into a timeseries database | [optional] [default to false]
**type** | **String** | The type of the property | 
**updateParameter** | **Number** | The update frequency in seconds, or the amount of the property has to change in order to trigger an update | [optional] 
**updateStrategy** | **String** | The update strategy for the property value | 
**variableName** | **String** | The  sketch variable name of the property | [optional] 



## Enum: PermissionEnum


* `ONLY` (value: `"READ_ONLY"`)

* `WRITE` (value: `"READ_WRITE"`)





## Enum: TypeEnum


* `ANALOG` (value: `"ANALOG"`)

* `CHARSTRING` (value: `"CHARSTRING"`)

* `FLOAT` (value: `"FLOAT"`)

* `INT` (value: `"INT"`)

* `LENGHT_C` (value: `"LENGHT_C"`)

* `LENGHT_I` (value: `"LENGHT_I"`)

* `LENGHT_M` (value: `"LENGHT_M"`)

* `PERCENTAGE` (value: `"PERCENTAGE"`)

* `STATUS` (value: `"STATUS"`)

* `TEMPERATURE_C` (value: `"TEMPERATURE_C"`)

* `TEMPERATURE_F` (value: `"TEMPERATURE_F"`)

* `METER` (value: `"METER"`)

* `KILOGRAM` (value: `"KILOGRAM"`)

* `GRAM` (value: `"GRAM"`)

* `SECOND` (value: `"SECOND"`)

* `AMPERE` (value: `"AMPERE"`)

* `KELVIN` (value: `"KELVIN"`)

* `CANDELA` (value: `"CANDELA"`)

* `MOLE` (value: `"MOLE"`)

* `HERTZ` (value: `"HERTZ"`)

* `RADIAN` (value: `"RADIAN"`)

* `STERADIAN` (value: `"STERADIAN"`)

* `NEWTON` (value: `"NEWTON"`)

* `PASCAL` (value: `"PASCAL"`)

* `JOULE` (value: `"JOULE"`)

* `WATT` (value: `"WATT"`)

* `COULOMB` (value: `"COULOMB"`)

* `VOLT` (value: `"VOLT"`)

* `FARAD` (value: `"FARAD"`)

* `OHM` (value: `"OHM"`)

* `SIEMENS` (value: `"SIEMENS"`)

* `WEBER` (value: `"WEBER"`)

* `TESLA` (value: `"TESLA"`)

* `HENRY` (value: `"HENRY"`)

* `DEGREES_CELSIUS` (value: `"DEGREES_CELSIUS"`)

* `LUMEN` (value: `"LUMEN"`)

* `LUX` (value: `"LUX"`)

* `BECQUEREL` (value: `"BECQUEREL"`)

* `GRAY` (value: `"GRAY"`)

* `SIEVERT` (value: `"SIEVERT"`)

* `KATAL` (value: `"KATAL"`)

* `SQUARE_METER` (value: `"SQUARE_METER"`)

* `CUBIC_METER` (value: `"CUBIC_METER"`)

* `LITER` (value: `"LITER"`)

* `METER_PER_SECOND` (value: `"METER_PER_SECOND"`)

* `METER_PER_SQUARE_SECOND` (value: `"METER_PER_SQUARE_SECOND"`)

* `CUBIC_METER_PER_SECOND` (value: `"CUBIC_METER_PER_SECOND"`)

* `LITER_PER_SECOND` (value: `"LITER_PER_SECOND"`)

* `WATT_PER_SQUARE_METER` (value: `"WATT_PER_SQUARE_METER"`)

* `CANDELA_PER_SQUARE_METER` (value: `"CANDELA_PER_SQUARE_METER"`)

* `BIT` (value: `"BIT"`)

* `BIT_PER_SECOND` (value: `"BIT_PER_SECOND"`)

* `DEGREES_LATITUDE` (value: `"DEGREES_LATITUDE"`)

* `DEGREES_LONGITUDE` (value: `"DEGREES_LONGITUDE"`)

* `PH_VALUE` (value: `"PH_VALUE"`)

* `DECIBEL` (value: `"DECIBEL"`)

* `DECIBEL_1W` (value: `"DECIBEL_1W"`)

* `BEL` (value: `"BEL"`)

* `COUNT` (value: `"COUNT"`)

* `RATIO_DIV` (value: `"RATIO_DIV"`)

* `RATIO_MOD` (value: `"RATIO_MOD"`)

* `PERCENTAGE_RELATIVE_HUMIDITY` (value: `"PERCENTAGE_RELATIVE_HUMIDITY"`)

* `PERCENTAGE_BATTERY_LEVEL` (value: `"PERCENTAGE_BATTERY_LEVEL"`)

* `SECONDS_BATTERY_LEVEL` (value: `"SECONDS_BATTERY_LEVEL"`)

* `EVENT_RATE_SECOND` (value: `"EVENT_RATE_SECOND"`)

* `EVENT_RATE_MINUTE` (value: `"EVENT_RATE_MINUTE"`)

* `HEART_RATE` (value: `"HEART_RATE"`)

* `HEART_BEATS` (value: `"HEART_BEATS"`)

* `SIEMENS_PER_METER` (value: `"SIEMENS_PER_METER"`)

* `LOCATION` (value: `"LOCATION"`)

* `COLOR_HSB` (value: `"COLOR_HSB"`)

* `COLOR_RGB` (value: `"COLOR_RGB"`)

* `GENERIC_COMPLEX_PROPERTY` (value: `"GENERIC_COMPLEX_PROPERTY"`)

* `HOME_COLORED_LIGHT` (value: `"HOME_COLORED_LIGHT"`)

* `HOME_DIMMERED_LIGHT` (value: `"HOME_DIMMERED_LIGHT"`)

* `HOME_LIGHT` (value: `"HOME_LIGHT"`)

* `HOME_CONTACT_SENSOR` (value: `"HOME_CONTACT_SENSOR"`)

* `HOME_MOTION_SENSOR` (value: `"HOME_MOTION_SENSOR"`)

* `HOME_SMART_PLUG` (value: `"HOME_SMART_PLUG"`)

* `HOME_TEMPERATURE` (value: `"HOME_TEMPERATURE"`)

* `HOME_SWITCH` (value: `"HOME_SWITCH"`)





## Enum: UpdateStrategyEnum


* `ON_CHANGE` (value: `"ON_CHANGE"`)

* `TIMED` (value: `"TIMED"`)




