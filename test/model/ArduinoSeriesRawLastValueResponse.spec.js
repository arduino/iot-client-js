/**
 * Iot API
 * Collection of all public API endpoints.
 *
 * The version of the OpenAPI document: 2.0
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.1.2
 *
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
    factory(root.expect, root.IotApi);
  }
}(this, function(expect, IotApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new IotApi.ArduinoSeriesRawLastValueResponse();
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

  describe('ArduinoSeriesRawLastValueResponse', function() {
    it('should create an instance of ArduinoSeriesRawLastValueResponse', function() {
      // uncomment below and update the code to test ArduinoSeriesRawLastValueResponse
      //var instance = new IotApi.ArduinoSeriesRawLastValueResponse();
      //expect(instance).to.be.a(IotApi.ArduinoSeriesRawLastValueResponse);
    });

    it('should have the property countValues (base name: "count_values")', function() {
      // uncomment below and update the code to test the property countValues
      //var instance = new IotApi.ArduinoSeriesRawLastValueResponse();
      //expect(instance).to.be();
    });

    it('should have the property propertyId (base name: "property_id")', function() {
      // uncomment below and update the code to test the property propertyId
      //var instance = new IotApi.ArduinoSeriesRawLastValueResponse();
      //expect(instance).to.be();
    });

    it('should have the property thingId (base name: "thing_id")', function() {
      // uncomment below and update the code to test the property thingId
      //var instance = new IotApi.ArduinoSeriesRawLastValueResponse();
      //expect(instance).to.be();
    });

    it('should have the property times (base name: "times")', function() {
      // uncomment below and update the code to test the property times
      //var instance = new IotApi.ArduinoSeriesRawLastValueResponse();
      //expect(instance).to.be();
    });

    it('should have the property values (base name: "values")', function() {
      // uncomment below and update the code to test the property values
      //var instance = new IotApi.ArduinoSeriesRawLastValueResponse();
      //expect(instance).to.be();
    });

  });

}));
