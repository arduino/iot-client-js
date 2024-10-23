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
    instance = new ArduinoIotClient.ArduinoTemplatevariable();
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

  describe('ArduinoTemplatevariable', function() {
    it('should create an instance of ArduinoTemplatevariable', function() {
      // uncomment below and update the code to test ArduinoTemplatevariable
      //var instance = new ArduinoIotClient.ArduinoTemplatevariable();
      //expect(instance).to.be.a(ArduinoIotClient.ArduinoTemplatevariable);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new ArduinoIotClient.ArduinoTemplatevariable();
      //expect(instance).to.be();
    });

    it('should have the property permission (base name: "permission")', function() {
      // uncomment below and update the code to test the property permission
      //var instance = new ArduinoIotClient.ArduinoTemplatevariable();
      //expect(instance).to.be();
    });

    it('should have the property thingId (base name: "thing_id")', function() {
      // uncomment below and update the code to test the property thingId
      //var instance = new ArduinoIotClient.ArduinoTemplatevariable();
      //expect(instance).to.be();
    });

    it('should have the property thingTimezone (base name: "thing_timezone")', function() {
      // uncomment below and update the code to test the property thingTimezone
      //var instance = new ArduinoIotClient.ArduinoTemplatevariable();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new ArduinoIotClient.ArduinoTemplatevariable();
      //expect(instance).to.be();
    });

    it('should have the property variableId (base name: "variable_id")', function() {
      // uncomment below and update the code to test the property variableId
      //var instance = new ArduinoIotClient.ArduinoTemplatevariable();
      //expect(instance).to.be();
    });

  });

}));
