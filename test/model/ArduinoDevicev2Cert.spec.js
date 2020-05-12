/**
 * Arduino IoT Cloud API
 *  Provides a set of endpoints to manage Arduino IoT Cloud **Devices**, **Things**, **Properties** and **Timeseries**. This API can be called just with any HTTP Client, or using one of these clients:  * [Javascript NPM package](https://www.npmjs.com/package/@arduino/arduino-iot-client)  * [Python PYPI Package](https://pypi.org/project/arduino-iot-client/)  * [Golang Module](https://github.com/arduino/iot-client-go)
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
    instance = new ArduinoIotClient.ArduinoDevicev2Cert();
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

  describe('ArduinoDevicev2Cert', function() {
    it('should create an instance of ArduinoDevicev2Cert', function() {
      // uncomment below and update the code to test ArduinoDevicev2Cert
      //var instane = new ArduinoIotClient.ArduinoDevicev2Cert();
      //expect(instance).to.be.a(ArduinoIotClient.ArduinoDevicev2Cert);
    });

    it('should have the property ca (base name: "ca")', function() {
      // uncomment below and update the code to test the property ca
      //var instane = new ArduinoIotClient.ArduinoDevicev2Cert();
      //expect(instance).to.be();
    });

    it('should have the property compressed (base name: "compressed")', function() {
      // uncomment below and update the code to test the property compressed
      //var instane = new ArduinoIotClient.ArduinoDevicev2Cert();
      //expect(instance).to.be();
    });

    it('should have the property der (base name: "der")', function() {
      // uncomment below and update the code to test the property der
      //var instane = new ArduinoIotClient.ArduinoDevicev2Cert();
      //expect(instance).to.be();
    });

    it('should have the property deviceId (base name: "device_id")', function() {
      // uncomment below and update the code to test the property deviceId
      //var instane = new ArduinoIotClient.ArduinoDevicev2Cert();
      //expect(instance).to.be();
    });

    it('should have the property enabled (base name: "enabled")', function() {
      // uncomment below and update the code to test the property enabled
      //var instane = new ArduinoIotClient.ArduinoDevicev2Cert();
      //expect(instance).to.be();
    });

    it('should have the property href (base name: "href")', function() {
      // uncomment below and update the code to test the property href
      //var instane = new ArduinoIotClient.ArduinoDevicev2Cert();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ArduinoIotClient.ArduinoDevicev2Cert();
      //expect(instance).to.be();
    });

    it('should have the property pem (base name: "pem")', function() {
      // uncomment below and update the code to test the property pem
      //var instane = new ArduinoIotClient.ArduinoDevicev2Cert();
      //expect(instance).to.be();
    });

  });

}));
