# ArduinoIotClient.ArduinoPropertytype

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assistants** | **[String]** | The voice assistants available for this type | [optional] 
**declaration** | **String** | The c++ type we are using for this variable type | 
**deprecated** | **Boolean** | Tell if this type is deprecated | 
**example** | **String** | Example of use | [optional] 
**name** | **String** | The friendly name of the property type | 
**rw** | **Boolean** | Tell if the type allow a R/W permission | 
**supersededBy** | **String** | The type of property to use if it&#39;s deprecated | [optional] 
**tags** | **[String]** | The tags related to the type | [optional] 
**type** | **String** | The api reference of this type | 
**units** | **[String]** | The measure units available for this type | [optional] 



## Enum: TypeEnum


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

* `HEART_BEATS` (value: `"HEART_BEATS"`)

* `COUNT` (value: `"COUNT"`)

* `ACCELERATION` (value: `"ACCELERATION"`)

* `AREA` (value: `"AREA"`)

* `LENGTH` (value: `"LENGTH"`)

* `VELOCITY` (value: `"VELOCITY"`)

* `LOCATION` (value: `"LOCATION"`)

* `MASS` (value: `"MASS"`)

* `VOLUME` (value: `"VOLUME"`)

* `FLOW_RATE` (value: `"FLOW_RATE"`)

* `ANGLE` (value: `"ANGLE"`)

* `ILLUMINANCE` (value: `"ILLUMINANCE"`)

* `LUMINOUS_FLUX` (value: `"LUMINOUS_FLUX"`)

* `LUMINANCE` (value: `"LUMINANCE"`)

* `LUMINOUS_INTENSITY` (value: `"LUMINOUS_INTENSITY"`)

* `COLOR_HSB` (value: `"COLOR_HSB"`)

* `LOGARITHMIC_QUANTITY` (value: `"LOGARITHMIC_QUANTITY"`)

* `PRESSURE` (value: `"PRESSURE"`)

* `INFORMATION_CONTENT` (value: `"INFORMATION_CONTENT"`)

* `PERCENTAGE` (value: `"PERCENTAGE"`)

* `PERCENTAGE_RELATIVE_HUMIDITY` (value: `"PERCENTAGE_RELATIVE_HUMIDITY"`)

* `GENERIC_COMPLEX_PROPERTY` (value: `"GENERIC_COMPLEX_PROPERTY"`)

* `HOME_LIGHT` (value: `"HOME_LIGHT"`)

* `HOME_DIMMED_LIGHT` (value: `"HOME_DIMMED_LIGHT"`)

* `HOME_COLORED_LIGHT` (value: `"HOME_COLORED_LIGHT"`)

* `HOME_CONTACT_SENSOR` (value: `"HOME_CONTACT_SENSOR"`)

* `HOME_SMART_PLUG` (value: `"HOME_SMART_PLUG"`)

* `HOME_SWITCH` (value: `"HOME_SWITCH"`)

* `HOME_MOTION_SENSOR` (value: `"HOME_MOTION_SENSOR"`)

* `HOME_TEMPERATURE_C` (value: `"HOME_TEMPERATURE_C"`)

* `HOME_TEMPERATURE_F` (value: `"HOME_TEMPERATURE_F"`)

* `HOME_TELEVISION` (value: `"HOME_TELEVISION"`)

* `SCHEDULE` (value: `"SCHEDULE"`)

* `CHARSTRING` (value: `"CHARSTRING"`)

* `FLOAT` (value: `"FLOAT"`)

* `INT` (value: `"INT"`)

* `STATUS` (value: `"STATUS"`)

* `AMPERE` (value: `"AMPERE"`)

* `BECQUEREL` (value: `"BECQUEREL"`)

* `BEL` (value: `"BEL"`)

* `BIT` (value: `"BIT"`)

* `BIT_PER_SECOND` (value: `"BIT_PER_SECOND"`)

* `CANDELA` (value: `"CANDELA"`)

* `CANDELA_PER_SQUARE_METER` (value: `"CANDELA_PER_SQUARE_METER"`)

* `COULOMB` (value: `"COULOMB"`)

* `CUBIC_METER` (value: `"CUBIC_METER"`)

* `CUBIC_METER_PER_SECOND` (value: `"CUBIC_METER_PER_SECOND"`)

* `DECIBEL` (value: `"DECIBEL"`)

* `DECIBEL_1W` (value: `"DECIBEL_1W"`)

* `DEGREES_LATITUDE` (value: `"DEGREES_LATITUDE"`)

* `DEGREES_LONGITUDE` (value: `"DEGREES_LONGITUDE"`)

* `EVENT_RATE_MINUTE` (value: `"EVENT_RATE_MINUTE"`)

* `EVENT_RATE_SECOND` (value: `"EVENT_RATE_SECOND"`)

* `FARAD` (value: `"FARAD"`)

* `GRAM` (value: `"GRAM"`)

* `GRAY` (value: `"GRAY"`)

* `HEART_RATE` (value: `"HEART_RATE"`)

* `HENRY` (value: `"HENRY"`)

* `HERTZ` (value: `"HERTZ"`)

* `JOULE` (value: `"JOULE"`)

* `KATAL` (value: `"KATAL"`)

* `KELVIN` (value: `"KELVIN"`)

* `KILOGRAM` (value: `"KILOGRAM"`)

* `LENGHT_C` (value: `"LENGHT_C"`)

* `LENGHT_I` (value: `"LENGHT_I"`)

* `LENGHT_M` (value: `"LENGHT_M"`)

* `LITER` (value: `"LITER"`)

* `LITER_PER_SECOND` (value: `"LITER_PER_SECOND"`)

* `LUMEN` (value: `"LUMEN"`)

* `LUX` (value: `"LUX"`)

* `METER_PER_SECOND` (value: `"METER_PER_SECOND"`)

* `METER_PER_SQUARE_SECOND` (value: `"METER_PER_SQUARE_SECOND"`)

* `MOLE` (value: `"MOLE"`)

* `NEWTON` (value: `"NEWTON"`)

* `OHM` (value: `"OHM"`)

* `PASCAL` (value: `"PASCAL"`)

* `PERCENTAGE_BATTERY_LEVEL` (value: `"PERCENTAGE_BATTERY_LEVEL"`)

* `PH_VALUE` (value: `"PH_VALUE"`)

* `RADIAN` (value: `"RADIAN"`)

* `RATIO_DIV` (value: `"RATIO_DIV"`)

* `SECONDS_BATTERY_LEVEL` (value: `"SECONDS_BATTERY_LEVEL"`)

* `SIEMENS` (value: `"SIEMENS"`)

* `SIEMENS_PER_METER` (value: `"SIEMENS_PER_METER"`)

* `SIEVERT` (value: `"SIEVERT"`)

* `SQUARE_METER` (value: `"SQUARE_METER"`)

* `STERADIAN` (value: `"STERADIAN"`)

* `TEMPERATURE_C` (value: `"TEMPERATURE_C"`)

* `TEMPERATURE_F` (value: `"TEMPERATURE_F"`)

* `TESLA` (value: `"TESLA"`)

* `VOLT` (value: `"VOLT"`)

* `WATT` (value: `"WATT"`)

* `WATT_PER_SQUARE_METER` (value: `"WATT_PER_SQUARE_METER"`)

* `WEBER` (value: `"WEBER"`)




