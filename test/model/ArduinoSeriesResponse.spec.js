/**
 * Arduino IoT Cloud API
 * Provides a set of endpoints to manage Arduino IoT Cloud **Devices**, **Things**, **Properties** and **Timeseries**. This API can be called just with any HTTP Client, or using one of these clients:  * [Javascript NPM package](https://www.npmjs.com/package/@arduino/arduino-iot-client)  * [Python PYPI Package](https://pypi.org/project/arduino-iot-client/)  * [Golang Module](https://github.com/arduino/iot-client-go)
 *
 * The version of the OpenAPI document: 2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ArduinoIotClient);
  }
}(this, function(expect, ArduinoIotClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ArduinoIotClient.ArduinoSeriesResponse();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ArduinoSeriesResponse', function() {
    it('should create an instance of ArduinoSeriesResponse', function() {
      // uncomment below and update the code to test ArduinoSeriesResponse
      //var instance = new ArduinoIotClient.ArduinoSeriesResponse();
      //expect(instance).to.be.a(ArduinoIotClient.ArduinoSeriesResponse);
    });

    it('should have the property aggregation (base name: "aggregation")', function() {
      // uncomment below and update the code to test the property aggregation
      //var instance = new ArduinoIotClient.ArduinoSeriesResponse();
      //expect(instance).to.be();
    });

    it('should have the property countValues (base name: "count_values")', function() {
      // uncomment below and update the code to test the property countValues
      //var instance = new ArduinoIotClient.ArduinoSeriesResponse();
      //expect(instance).to.be();
    });

    it('should have the property fromDate (base name: "from_date")', function() {
      // uncomment below and update the code to test the property fromDate
      //var instance = new ArduinoIotClient.ArduinoSeriesResponse();
      //expect(instance).to.be();
    });

    it('should have the property interval (base name: "interval")', function() {
      // uncomment below and update the code to test the property interval
      //var instance = new ArduinoIotClient.ArduinoSeriesResponse();
      //expect(instance).to.be();
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instance = new ArduinoIotClient.ArduinoSeriesResponse();
      //expect(instance).to.be();
    });

    it('should have the property propertyId (base name: "property_id")', function() {
      // uncomment below and update the code to test the property propertyId
      //var instance = new ArduinoIotClient.ArduinoSeriesResponse();
      //expect(instance).to.be();
    });

    it('should have the property propertyName (base name: "property_name")', function() {
      // uncomment below and update the code to test the property propertyName
      //var instance = new ArduinoIotClient.ArduinoSeriesResponse();
      //expect(instance).to.be();
    });

    it('should have the property propertyType (base name: "property_type")', function() {
      // uncomment below and update the code to test the property propertyType
      //var instance = new ArduinoIotClient.ArduinoSeriesResponse();
      //expect(instance).to.be();
    });

    it('should have the property query (base name: "query")', function() {
      // uncomment below and update the code to test the property query
      //var instance = new ArduinoIotClient.ArduinoSeriesResponse();
      //expect(instance).to.be();
    });

    it('should have the property respVersion (base name: "resp_version")', function() {
      // uncomment below and update the code to test the property respVersion
      //var instance = new ArduinoIotClient.ArduinoSeriesResponse();
      //expect(instance).to.be();
    });

    it('should have the property seriesLimit (base name: "series_limit")', function() {
      // uncomment below and update the code to test the property seriesLimit
      //var instance = new ArduinoIotClient.ArduinoSeriesResponse();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new ArduinoIotClient.ArduinoSeriesResponse();
      //expect(instance).to.be();
    });

    it('should have the property thingId (base name: "thing_id")', function() {
      // uncomment below and update the code to test the property thingId
      //var instance = new ArduinoIotClient.ArduinoSeriesResponse();
      //expect(instance).to.be();
    });

    it('should have the property times (base name: "times")', function() {
      // uncomment below and update the code to test the property times
      //var instance = new ArduinoIotClient.ArduinoSeriesResponse();
      //expect(instance).to.be();
    });

    it('should have the property toDate (base name: "to_date")', function() {
      // uncomment below and update the code to test the property toDate
      //var instance = new ArduinoIotClient.ArduinoSeriesResponse();
      //expect(instance).to.be();
    });

    it('should have the property values (base name: "values")', function() {
      // uncomment below and update the code to test the property values
      //var instance = new ArduinoIotClient.ArduinoSeriesResponse();
      //expect(instance).to.be();
    });

  });

}));
