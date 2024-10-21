# coding: utf-8

# flake8: noqa
"""
    Arduino IoT Cloud API

    Provides a set of endpoints to manage Arduino IoT Cloud **Devices**, **Things**, **Properties** and **Timeseries**. This API can be called just with any HTTP Client, or using one of these clients:  * [Javascript NPM package](https://www.npmjs.com/package/@arduino/arduino-iot-client)  * [Python PYPI Package](https://pypi.org/project/arduino-iot-client/)  * [Golang Module](https://github.com/arduino/iot-client-go)

    The version of the OpenAPI document: 2.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


# import models into model package
from openapi_client.models.arduino_compressedv2 import ArduinoCompressedv2
from openapi_client.models.arduino_credentialsv1 import ArduinoCredentialsv1
from openapi_client.models.arduino_dashboardowner import ArduinoDashboardowner
from openapi_client.models.arduino_dashboardshare import ArduinoDashboardshare
from openapi_client.models.arduino_dashboardv2 import ArduinoDashboardv2
from openapi_client.models.arduino_dashboardv2template import ArduinoDashboardv2template
from openapi_client.models.arduino_devicev2 import ArduinoDevicev2
from openapi_client.models.arduino_devicev2_cert import ArduinoDevicev2Cert
from openapi_client.models.arduino_devicev2_event_properties import ArduinoDevicev2EventProperties
from openapi_client.models.arduino_devicev2_otaupload import ArduinoDevicev2Otaupload
from openapi_client.models.arduino_devicev2_pass import ArduinoDevicev2Pass
from openapi_client.models.arduino_devicev2_simple_properties import ArduinoDevicev2SimpleProperties
from openapi_client.models.arduino_devicev2_status_event import ArduinoDevicev2StatusEvent
from openapi_client.models.arduino_devicev2_status_events import ArduinoDevicev2StatusEvents
from openapi_client.models.arduino_devicev2_webhook import ArduinoDevicev2Webhook
from openapi_client.models.arduino_devicev2properties import ArduinoDevicev2properties
from openapi_client.models.arduino_devicev2propertyvalue import ArduinoDevicev2propertyvalue
from openapi_client.models.arduino_devicev2propertyvalue_value import ArduinoDevicev2propertyvalueValue
from openapi_client.models.arduino_devicev2propertyvalue_value_statistics import ArduinoDevicev2propertyvalueValueStatistics
from openapi_client.models.arduino_devicev2propertyvalues import ArduinoDevicev2propertyvalues
from openapi_client.models.arduino_devicev2propertyvalues_last_evaluated_key import ArduinoDevicev2propertyvaluesLastEvaluatedKey
from openapi_client.models.arduino_devicev2templatedevice import ArduinoDevicev2templatedevice
from openapi_client.models.arduino_linkedvariable import ArduinoLinkedvariable
from openapi_client.models.arduino_loradevicev1 import ArduinoLoradevicev1
from openapi_client.models.arduino_lorafreqplansv1 import ArduinoLorafreqplansv1
from openapi_client.models.arduino_lorafreqplanv1 import ArduinoLorafreqplanv1
from openapi_client.models.arduino_property import ArduinoProperty
from openapi_client.models.arduino_propertytype import ArduinoPropertytype
from openapi_client.models.arduino_series_batch import ArduinoSeriesBatch
from openapi_client.models.arduino_series_batch_sampled import ArduinoSeriesBatchSampled
from openapi_client.models.arduino_series_raw_batch import ArduinoSeriesRawBatch
from openapi_client.models.arduino_series_raw_batch_lastvalue import ArduinoSeriesRawBatchLastvalue
from openapi_client.models.arduino_series_raw_last_value_response import ArduinoSeriesRawLastValueResponse
from openapi_client.models.arduino_series_raw_response import ArduinoSeriesRawResponse
from openapi_client.models.arduino_series_response import ArduinoSeriesResponse
from openapi_client.models.arduino_series_sampled_response import ArduinoSeriesSampledResponse
from openapi_client.models.arduino_tags import ArduinoTags
from openapi_client.models.arduino_template import ArduinoTemplate
from openapi_client.models.arduino_templateproperty import ArduinoTemplateproperty
from openapi_client.models.arduino_templatevariable import ArduinoTemplatevariable
from openapi_client.models.arduino_thing import ArduinoThing
from openapi_client.models.arduino_thingresult import ArduinoThingresult
from openapi_client.models.arduino_thingtemplate import ArduinoThingtemplate
from openapi_client.models.arduino_timeseriesmedia import ArduinoTimeseriesmedia
from openapi_client.models.arduino_timezone import ArduinoTimezone
from openapi_client.models.arduino_variableslinks import ArduinoVariableslinks
from openapi_client.models.arduino_widgetv2 import ArduinoWidgetv2
from openapi_client.models.arduino_widgetv2template import ArduinoWidgetv2template
from openapi_client.models.batch_last_value_requests_media_v1 import BatchLastValueRequestsMediaV1
from openapi_client.models.batch_query_raw_last_value_request_media_v1 import BatchQueryRawLastValueRequestMediaV1
from openapi_client.models.batch_query_raw_request_media_v1 import BatchQueryRawRequestMediaV1
from openapi_client.models.batch_query_raw_requests_media_v1 import BatchQueryRawRequestsMediaV1
from openapi_client.models.batch_query_raw_response_series_media_v1 import BatchQueryRawResponseSeriesMediaV1
from openapi_client.models.batch_query_request_media_v1 import BatchQueryRequestMediaV1
from openapi_client.models.batch_query_requests_media_v1 import BatchQueryRequestsMediaV1
from openapi_client.models.batch_query_sampled_request_media_v1 import BatchQuerySampledRequestMediaV1
from openapi_client.models.batch_query_sampled_requests_media_v1 import BatchQuerySampledRequestsMediaV1
from openapi_client.models.check_devices_v2_pass_payload import CheckDevicesV2PassPayload
from openapi_client.models.clone import Clone
from openapi_client.models.create_devices_v2_certs_payload import CreateDevicesV2CertsPayload
from openapi_client.models.create_devices_v2_payload import CreateDevicesV2Payload
from openapi_client.models.create_lora_devices_v1_payload import CreateLoraDevicesV1Payload
from openapi_client.models.dashboardshare import Dashboardshare
from openapi_client.models.dashboardv2 import Dashboardv2
from openapi_client.models.devicev2 import Devicev2
from openapi_client.models.devicev2_cert import Devicev2Cert
from openapi_client.models.devicev2_otabinaryurl import Devicev2Otabinaryurl
from openapi_client.models.devicev2_otaurlpyalod import Devicev2Otaurlpyalod
from openapi_client.models.devicev2_pass import Devicev2Pass
from openapi_client.models.error import Error
from openapi_client.models.historic_data_request import HistoricDataRequest
from openapi_client.models.model_property import ModelProperty
from openapi_client.models.override import Override
from openapi_client.models.properties_value import PropertiesValue
from openapi_client.models.properties_values import PropertiesValues
from openapi_client.models.property_value import PropertyValue
from openapi_client.models.sharerequest import Sharerequest
from openapi_client.models.tag import Tag
from openapi_client.models.template import Template
from openapi_client.models.thing_clone import ThingClone
from openapi_client.models.thing_create import ThingCreate
from openapi_client.models.thing_sketch import ThingSketch
from openapi_client.models.thing_update import ThingUpdate
from openapi_client.models.timeseries_data_point import TimeseriesDataPoint
from openapi_client.models.update_sketch import UpdateSketch
from openapi_client.models.widget import Widget
from openapi_client.models.widgetlink import Widgetlink
