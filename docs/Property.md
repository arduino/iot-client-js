# ArduinoIotClient.Property

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**maxValue** | **Number** | Maximum value of this property | [optional] 
**minValue** | **Number** | Minimum value of this property | [optional] 
**name** | **String** | The friendly name of the property | 
**permission** | **String** | The permission of the property | 
**persist** | **Boolean** | If true, data will persist into a timeseries database | [optional] [default to true]
**tag** | **Number** | The integer id of the property | [optional] 
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

* `HOME_DIMMED_LIGHT` (value: `"HOME_DIMMED_LIGHT"`)

* `HOME_LIGHT` (value: `"HOME_LIGHT"`)

* `HOME_CONTACT_SENSOR` (value: `"HOME_CONTACT_SENSOR"`)

* `HOME_MOTION_SENSOR` (value: `"HOME_MOTION_SENSOR"`)

* `HOME_SMART_PLUG` (value: `"HOME_SMART_PLUG"`)

* `HOME_TEMPERATURE` (value: `"HOME_TEMPERATURE"`)

* `HOME_TEMPERATURE_C` (value: `"HOME_TEMPERATURE_C"`)

* `HOME_TEMPERATURE_F` (value: `"HOME_TEMPERATURE_F"`)

* `HOME_SWITCH` (value: `"HOME_SWITCH"`)

* `HOME_TELEVISION` (value: `"HOME_TELEVISION"`)

* `GOOGLE_HOME_COLORED_LIGHT` (value: `"GOOGLE_HOME_COLORED_LIGHT"`)

* `GOOGLE_HOME_DIMMED_LIGHT` (value: `"GOOGLE_HOME_DIMMED_LIGHT"`)

* `GOOGLE_HOME_LIGHT` (value: `"GOOGLE_HOME_LIGHT"`)

* `GOOGLE_HOME_CONTACT_SENSOR` (value: `"GOOGLE_HOME_CONTACT_SENSOR"`)

* `GOOGLE_HOME_MOTION_SENSOR` (value: `"GOOGLE_HOME_MOTION_SENSOR"`)

* `GOOGLE_HOME_SMART_PLUG` (value: `"GOOGLE_HOME_SMART_PLUG"`)

* `GOOGLE_HOME_TEMPERATURE` (value: `"GOOGLE_HOME_TEMPERATURE"`)

* `GOOGLE_HOME_TEMPERATURE_C` (value: `"GOOGLE_HOME_TEMPERATURE_C"`)

* `GOOGLE_HOME_TEMPERATURE_F` (value: `"GOOGLE_HOME_TEMPERATURE_F"`)

* `GOOGLE_HOME_SWITCH` (value: `"GOOGLE_HOME_SWITCH"`)

* `SMART_HOME_COLORED_LIGHT` (value: `"SMART_HOME_COLORED_LIGHT"`)

* `SMART_HOME_DIMMED_LIGHT` (value: `"SMART_HOME_DIMMED_LIGHT"`)

* `SMART_HOME_LIGHT` (value: `"SMART_HOME_LIGHT"`)

* `SMART_HOME_CONTACT_SENSOR` (value: `"SMART_HOME_CONTACT_SENSOR"`)

* `SMART_HOME_MOTION_SENSOR` (value: `"SMART_HOME_MOTION_SENSOR"`)

* `SMART_HOME_SMART_PLUG` (value: `"SMART_HOME_SMART_PLUG"`)

* `SMART_HOME_TEMPERATURE` (value: `"SMART_HOME_TEMPERATURE"`)

* `SMART_HOME_TEMPERATURE_C` (value: `"SMART_HOME_TEMPERATURE_C"`)

* `SMART_HOME_TEMPERATURE_F` (value: `"SMART_HOME_TEMPERATURE_F"`)

* `SMART_HOME_SWITCH` (value: `"SMART_HOME_SWITCH"`)

* `SMART_HOME_TELEVISION` (value: `"SMART_HOME_TELEVISION"`)

* `ENERGY` (value: `"ENERGY"`)

* `FORCE` (value: `"FORCE"`)

* `TEMPERATURE` (value: `"TEMPERATURE"`)

* `POWER` (value: `"POWER"`)

* `ELECTRIC_CURRENT` (value: `"ELECTRIC_CURRENT"`)

* `ELECTRIC_POTENTIAL` (value: `"ELECTRIC_POTENTIAL"`)

* `ELECTRICAL_RESISTANCE` (value: `"ELECTRICAL_RESISTANCE"`)

* `CAPACITANCE` (value: `"CAPACITANCE"`)

* `TIME` (value: `"TIME"`)

* `FREQUENCY` (value: `"FREQUENCY"`)

* `DATA_RATE` (value: `"DATA_RATE"`)

* `ACCELERATION` (value: `"ACCELERATION"`)

* `AREA` (value: `"AREA"`)

* `LENGTH` (value: `"LENGTH"`)

* `VELOCITY` (value: `"VELOCITY"`)

* `MASS` (value: `"MASS"`)

* `VOLUME` (value: `"VOLUME"`)

* `FLOW_RATE` (value: `"FLOW_RATE"`)

* `ANGLE` (value: `"ANGLE"`)

* `ILLUMINANCE` (value: `"ILLUMINANCE"`)

* `LUMINOUS_FLUX` (value: `"LUMINOUS_FLUX"`)

* `LUMINANCE` (value: `"LUMINANCE"`)

* `LUMINOUS_INTENSITY` (value: `"LUMINOUS_INTENSITY"`)

* `LOGARITHMIC_QUANTITY` (value: `"LOGARITHMIC_QUANTITY"`)

* `PRESSURE` (value: `"PRESSURE"`)

* `INFORMATION_CONTENT` (value: `"INFORMATION_CONTENT"`)

* `SCHEDULE` (value: `"SCHEDULE"`)





## Enum: UpdateStrategyEnum


* `ON_CHANGE` (value: `"ON_CHANGE"`)

* `TIMED` (value: `"TIMED"`)




