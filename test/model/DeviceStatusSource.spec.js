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
    instance = new ArduinoIotClient.DeviceStatusSource();
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

  describe('DeviceStatusSource', function() {
    it('should create an instance of DeviceStatusSource', function() {
      // uncomment below and update the code to test DeviceStatusSource
      //var instance = new ArduinoIotClient.DeviceStatusSource();
      //expect(instance).to.be.a(ArduinoIotClient.DeviceStatusSource);
    });

    it('should have the property criteria (base name: "criteria")', function() {
      // uncomment below and update the code to test the property criteria
      //var instance = new ArduinoIotClient.DeviceStatusSource();
      //expect(instance).to.be();
    });

    it('should have the property deviceIds (base name: "device_ids")', function() {
      // uncomment below and update the code to test the property deviceIds
      //var instance = new ArduinoIotClient.DeviceStatusSource();
      //expect(instance).to.be();
    });

    it('should have the property gracePeriodOffline (base name: "grace_period_offline")', function() {
      // uncomment below and update the code to test the property gracePeriodOffline
      //var instance = new ArduinoIotClient.DeviceStatusSource();
      //expect(instance).to.be();
    });

    it('should have the property gracePeriodOnline (base name: "grace_period_online")', function() {
      // uncomment below and update the code to test the property gracePeriodOnline
      //var instance = new ArduinoIotClient.DeviceStatusSource();
      //expect(instance).to.be();
    });

  });

}));
