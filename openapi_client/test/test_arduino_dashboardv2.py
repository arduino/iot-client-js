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
    instance = new ArduinoIotClient.ArduinoDashboardv2();
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

  describe('ArduinoDashboardv2', function() {
    it('should create an instance of ArduinoDashboardv2', function() {
      // uncomment below and update the code to test ArduinoDashboardv2
      //var instance = new ArduinoIotClient.ArduinoDashboardv2();
      //expect(instance).to.be.a(ArduinoIotClient.ArduinoDashboardv2);
    });

    it('should have the property cover_image (base name: "cover_image")', function() {
      // uncomment below and update the code to test the property cover_image
      //var instance = new ArduinoIotClient.ArduinoDashboardv2();
      //expect(instance).to.be();
    });

    it('should have the property created_by (base name: "created_by")', function() {
      // uncomment below and update the code to test the property created_by
      //var instance = new ArduinoIotClient.ArduinoDashboardv2();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new ArduinoIotClient.ArduinoDashboardv2();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new ArduinoIotClient.ArduinoDashboardv2();
      //expect(instance).to.be();
    });

    it('should have the property organization_id (base name: "organization_id")', function() {
      // uncomment below and update the code to test the property organization_id
      //var instance = new ArduinoIotClient.ArduinoDashboardv2();
      //expect(instance).to.be();
    });

    it('should have the property shared_by (base name: "shared_by")', function() {
      // uncomment below and update the code to test the property shared_by
      //var instance = new ArduinoIotClient.ArduinoDashboardv2();
      //expect(instance).to.be();
    });

    it('should have the property shared_with (base name: "shared_with")', function() {
      // uncomment below and update the code to test the property shared_with
      //var instance = new ArduinoIotClient.ArduinoDashboardv2();
      //expect(instance).to.be();
    });

    it('should have the property updated_at (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updated_at
      //var instance = new ArduinoIotClient.ArduinoDashboardv2();
      //expect(instance).to.be();
    });

    it('should have the property widgets (base name: "widgets")', function() {
      // uncomment below and update the code to test the property widgets
      //var instance = new ArduinoIotClient.ArduinoDashboardv2();
      //expect(instance).to.be();
    });

  });

}));
