# ArduinoIotClient.ModelProperty

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_value** | **float** | Maximum value of this property | [optional] 
**min_value** | **float** | Minimum value of this property | [optional] 
**name** | **str** | The friendly name of the property | 
**permission** | **str** | The permission of the property | 
**persist** | **bool** | If true, data will persist into a timeseries database | [optional] [default to True]
**tag** | **int** | The integer id of the property | [optional] 
**type** | **str** | The type of the property | 
**update_parameter** | **float** | The update frequency in seconds, or the amount of the property has to change in order to trigger an update | [optional] 
**update_strategy** | **str** | The update strategy for the property value | 
**variable_name** | **str** | The  sketch variable name of the property | [optional] 



## Enum: PermissionEnum


* `&#39;ONLY&#39;` (value: `'READ_ONLY'`)

* `&#39;WRITE&#39;` (value: `'READ_WRITE'`)





## Enum: TypeEnum


* `&#39;ANALOG&#39;` (value: `'ANALOG'`)

* `&#39;CHARSTRING&#39;` (value: `'CHARSTRING'`)

* `&#39;FLOAT&#39;` (value: `'FLOAT'`)

* `&#39;INT&#39;` (value: `'INT'`)

* `&#39;LENGHT_C&#39;` (value: `'LENGHT_C'`)

* `&#39;LENGHT_I&#39;` (value: `'LENGHT_I'`)

* `&#39;LENGHT_M&#39;` (value: `'LENGHT_M'`)

* `&#39;PERCENTAGE&#39;` (value: `'PERCENTAGE'`)

* `&#39;STATUS&#39;` (value: `'STATUS'`)

* `&#39;TEMPERATURE_C&#39;` (value: `'TEMPERATURE_C'`)

* `&#39;TEMPERATURE_F&#39;` (value: `'TEMPERATURE_F'`)

* `&#39;METER&#39;` (value: `'METER'`)

* `&#39;KILOGRAM&#39;` (value: `'KILOGRAM'`)

* `&#39;GRAM&#39;` (value: `'GRAM'`)

* `&#39;SECOND&#39;` (value: `'SECOND'`)

* `&#39;AMPERE&#39;` (value: `'AMPERE'`)

* `&#39;KELVIN&#39;` (value: `'KELVIN'`)

* `&#39;CANDELA&#39;` (value: `'CANDELA'`)

* `&#39;MOLE&#39;` (value: `'MOLE'`)

* `&#39;HERTZ&#39;` (value: `'HERTZ'`)

* `&#39;RADIAN&#39;` (value: `'RADIAN'`)

* `&#39;STERADIAN&#39;` (value: `'STERADIAN'`)

* `&#39;NEWTON&#39;` (value: `'NEWTON'`)

* `&#39;PASCAL&#39;` (value: `'PASCAL'`)

* `&#39;JOULE&#39;` (value: `'JOULE'`)

* `&#39;WATT&#39;` (value: `'WATT'`)

* `&#39;COULOMB&#39;` (value: `'COULOMB'`)

* `&#39;VOLT&#39;` (value: `'VOLT'`)

* `&#39;FARAD&#39;` (value: `'FARAD'`)

* `&#39;OHM&#39;` (value: `'OHM'`)

* `&#39;SIEMENS&#39;` (value: `'SIEMENS'`)

* `&#39;WEBER&#39;` (value: `'WEBER'`)

* `&#39;TESLA&#39;` (value: `'TESLA'`)

* `&#39;HENRY&#39;` (value: `'HENRY'`)

* `&#39;DEGREES_CELSIUS&#39;` (value: `'DEGREES_CELSIUS'`)

* `&#39;LUMEN&#39;` (value: `'LUMEN'`)

* `&#39;LUX&#39;` (value: `'LUX'`)

* `&#39;BECQUEREL&#39;` (value: `'BECQUEREL'`)

* `&#39;GRAY&#39;` (value: `'GRAY'`)

* `&#39;SIEVERT&#39;` (value: `'SIEVERT'`)

* `&#39;KATAL&#39;` (value: `'KATAL'`)

* `&#39;SQUARE_METER&#39;` (value: `'SQUARE_METER'`)

* `&#39;CUBIC_METER&#39;` (value: `'CUBIC_METER'`)

* `&#39;LITER&#39;` (value: `'LITER'`)

* `&#39;METER_PER_SECOND&#39;` (value: `'METER_PER_SECOND'`)

* `&#39;METER_PER_SQUARE_SECOND&#39;` (value: `'METER_PER_SQUARE_SECOND'`)

* `&#39;CUBIC_METER_PER_SECOND&#39;` (value: `'CUBIC_METER_PER_SECOND'`)

* `&#39;LITER_PER_SECOND&#39;` (value: `'LITER_PER_SECOND'`)

* `&#39;WATT_PER_SQUARE_METER&#39;` (value: `'WATT_PER_SQUARE_METER'`)

* `&#39;CANDELA_PER_SQUARE_METER&#39;` (value: `'CANDELA_PER_SQUARE_METER'`)

* `&#39;BIT&#39;` (value: `'BIT'`)

* `&#39;BIT_PER_SECOND&#39;` (value: `'BIT_PER_SECOND'`)

* `&#39;DEGREES_LATITUDE&#39;` (value: `'DEGREES_LATITUDE'`)

* `&#39;DEGREES_LONGITUDE&#39;` (value: `'DEGREES_LONGITUDE'`)

* `&#39;PH_VALUE&#39;` (value: `'PH_VALUE'`)

* `&#39;DECIBEL&#39;` (value: `'DECIBEL'`)

* `&#39;DECIBEL_1W&#39;` (value: `'DECIBEL_1W'`)

* `&#39;BEL&#39;` (value: `'BEL'`)

* `&#39;COUNT&#39;` (value: `'COUNT'`)

* `&#39;RATIO_DIV&#39;` (value: `'RATIO_DIV'`)

* `&#39;RATIO_MOD&#39;` (value: `'RATIO_MOD'`)

* `&#39;PERCENTAGE_RELATIVE_HUMIDITY&#39;` (value: `'PERCENTAGE_RELATIVE_HUMIDITY'`)

* `&#39;PERCENTAGE_BATTERY_LEVEL&#39;` (value: `'PERCENTAGE_BATTERY_LEVEL'`)

* `&#39;SECONDS_BATTERY_LEVEL&#39;` (value: `'SECONDS_BATTERY_LEVEL'`)

* `&#39;EVENT_RATE_SECOND&#39;` (value: `'EVENT_RATE_SECOND'`)

* `&#39;EVENT_RATE_MINUTE&#39;` (value: `'EVENT_RATE_MINUTE'`)

* `&#39;HEART_RATE&#39;` (value: `'HEART_RATE'`)

* `&#39;HEART_BEATS&#39;` (value: `'HEART_BEATS'`)

* `&#39;SIEMENS_PER_METER&#39;` (value: `'SIEMENS_PER_METER'`)

* `&#39;LOCATION&#39;` (value: `'LOCATION'`)

* `&#39;COLOR_HSB&#39;` (value: `'COLOR_HSB'`)

* `&#39;COLOR_RGB&#39;` (value: `'COLOR_RGB'`)

* `&#39;GENERIC_COMPLEX_PROPERTY&#39;` (value: `'GENERIC_COMPLEX_PROPERTY'`)

* `&#39;HOME_COLORED_LIGHT&#39;` (value: `'HOME_COLORED_LIGHT'`)

* `&#39;HOME_DIMMED_LIGHT&#39;` (value: `'HOME_DIMMED_LIGHT'`)

* `&#39;HOME_LIGHT&#39;` (value: `'HOME_LIGHT'`)

* `&#39;HOME_CONTACT_SENSOR&#39;` (value: `'HOME_CONTACT_SENSOR'`)

* `&#39;HOME_MOTION_SENSOR&#39;` (value: `'HOME_MOTION_SENSOR'`)

* `&#39;HOME_SMART_PLUG&#39;` (value: `'HOME_SMART_PLUG'`)

* `&#39;HOME_TEMPERATURE&#39;` (value: `'HOME_TEMPERATURE'`)

* `&#39;HOME_TEMPERATURE_C&#39;` (value: `'HOME_TEMPERATURE_C'`)

* `&#39;HOME_TEMPERATURE_F&#39;` (value: `'HOME_TEMPERATURE_F'`)

* `&#39;HOME_SWITCH&#39;` (value: `'HOME_SWITCH'`)

* `&#39;HOME_TELEVISION&#39;` (value: `'HOME_TELEVISION'`)

* `&#39;GOOGLE_HOME_COLORED_LIGHT&#39;` (value: `'GOOGLE_HOME_COLORED_LIGHT'`)

* `&#39;GOOGLE_HOME_DIMMED_LIGHT&#39;` (value: `'GOOGLE_HOME_DIMMED_LIGHT'`)

* `&#39;GOOGLE_HOME_LIGHT&#39;` (value: `'GOOGLE_HOME_LIGHT'`)

* `&#39;GOOGLE_HOME_CONTACT_SENSOR&#39;` (value: `'GOOGLE_HOME_CONTACT_SENSOR'`)

* `&#39;GOOGLE_HOME_MOTION_SENSOR&#39;` (value: `'GOOGLE_HOME_MOTION_SENSOR'`)

* `&#39;GOOGLE_HOME_SMART_PLUG&#39;` (value: `'GOOGLE_HOME_SMART_PLUG'`)

* `&#39;GOOGLE_HOME_TEMPERATURE&#39;` (value: `'GOOGLE_HOME_TEMPERATURE'`)

* `&#39;GOOGLE_HOME_TEMPERATURE_C&#39;` (value: `'GOOGLE_HOME_TEMPERATURE_C'`)

* `&#39;GOOGLE_HOME_TEMPERATURE_F&#39;` (value: `'GOOGLE_HOME_TEMPERATURE_F'`)

* `&#39;GOOGLE_HOME_SWITCH&#39;` (value: `'GOOGLE_HOME_SWITCH'`)

* `&#39;SMART_HOME_COLORED_LIGHT&#39;` (value: `'SMART_HOME_COLORED_LIGHT'`)

* `&#39;SMART_HOME_DIMMED_LIGHT&#39;` (value: `'SMART_HOME_DIMMED_LIGHT'`)

* `&#39;SMART_HOME_LIGHT&#39;` (value: `'SMART_HOME_LIGHT'`)

* `&#39;SMART_HOME_CONTACT_SENSOR&#39;` (value: `'SMART_HOME_CONTACT_SENSOR'`)

* `&#39;SMART_HOME_MOTION_SENSOR&#39;` (value: `'SMART_HOME_MOTION_SENSOR'`)

* `&#39;SMART_HOME_SMART_PLUG&#39;` (value: `'SMART_HOME_SMART_PLUG'`)

* `&#39;SMART_HOME_TEMPERATURE&#39;` (value: `'SMART_HOME_TEMPERATURE'`)

* `&#39;SMART_HOME_TEMPERATURE_C&#39;` (value: `'SMART_HOME_TEMPERATURE_C'`)

* `&#39;SMART_HOME_TEMPERATURE_F&#39;` (value: `'SMART_HOME_TEMPERATURE_F'`)

* `&#39;SMART_HOME_SWITCH&#39;` (value: `'SMART_HOME_SWITCH'`)

* `&#39;SMART_HOME_TELEVISION&#39;` (value: `'SMART_HOME_TELEVISION'`)

* `&#39;ENERGY&#39;` (value: `'ENERGY'`)

* `&#39;FORCE&#39;` (value: `'FORCE'`)

* `&#39;TEMPERATURE&#39;` (value: `'TEMPERATURE'`)

* `&#39;POWER&#39;` (value: `'POWER'`)

* `&#39;ELECTRIC_CURRENT&#39;` (value: `'ELECTRIC_CURRENT'`)

* `&#39;ELECTRIC_POTENTIAL&#39;` (value: `'ELECTRIC_POTENTIAL'`)

* `&#39;ELECTRICAL_RESISTANCE&#39;` (value: `'ELECTRICAL_RESISTANCE'`)

* `&#39;CAPACITANCE&#39;` (value: `'CAPACITANCE'`)

* `&#39;TIME&#39;` (value: `'TIME'`)

* `&#39;FREQUENCY&#39;` (value: `'FREQUENCY'`)

* `&#39;DATA_RATE&#39;` (value: `'DATA_RATE'`)

* `&#39;ACCELERATION&#39;` (value: `'ACCELERATION'`)

* `&#39;AREA&#39;` (value: `'AREA'`)

* `&#39;LENGTH&#39;` (value: `'LENGTH'`)

* `&#39;VELOCITY&#39;` (value: `'VELOCITY'`)

* `&#39;MASS&#39;` (value: `'MASS'`)

* `&#39;VOLUME&#39;` (value: `'VOLUME'`)

* `&#39;FLOW_RATE&#39;` (value: `'FLOW_RATE'`)

* `&#39;ANGLE&#39;` (value: `'ANGLE'`)

* `&#39;ILLUMINANCE&#39;` (value: `'ILLUMINANCE'`)

* `&#39;LUMINOUS_FLUX&#39;` (value: `'LUMINOUS_FLUX'`)

* `&#39;LUMINANCE&#39;` (value: `'LUMINANCE'`)

* `&#39;LUMINOUS_INTENSITY&#39;` (value: `'LUMINOUS_INTENSITY'`)

* `&#39;LOGARITHMIC_QUANTITY&#39;` (value: `'LOGARITHMIC_QUANTITY'`)

* `&#39;PRESSURE&#39;` (value: `'PRESSURE'`)

* `&#39;INFORMATION_CONTENT&#39;` (value: `'INFORMATION_CONTENT'`)

* `&#39;SCHEDULE&#39;` (value: `'SCHEDULE'`)





## Enum: Update_strategyEnum


* `&#39;ON_CHANGE&#39;` (value: `'ON_CHANGE'`)

* `&#39;TIMED&#39;` (value: `'TIMED'`)




