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
    instance = new ArduinoIotClient.ArduinoDevicev2propertyvalues();
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

  describe('ArduinoDevicev2propertyvalues', function() {
    it('should create an instance of ArduinoDevicev2propertyvalues', function() {
      // uncomment below and update the code to test ArduinoDevicev2propertyvalues
      //var instance = new ArduinoIotClient.ArduinoDevicev2propertyvalues();
      //expect(instance).to.be.a(ArduinoIotClient.ArduinoDevicev2propertyvalues);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new ArduinoIotClient.ArduinoDevicev2propertyvalues();
      //expect(instance).to.be();
    });

    it('should have the property last_evaluated_key (base name: "last_evaluated_key")', function() {
      // uncomment below and update the code to test the property last_evaluated_key
      //var instance = new ArduinoIotClient.ArduinoDevicev2propertyvalues();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new ArduinoIotClient.ArduinoDevicev2propertyvalues();
      //expect(instance).to.be();
    });

    it('should have the property values (base name: "values")', function() {
      // uncomment below and update the code to test the property values
      //var instance = new ArduinoIotClient.ArduinoDevicev2propertyvalues();
      //expect(instance).to.be();
    });

  });

}));
