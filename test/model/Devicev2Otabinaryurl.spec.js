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
    instance = new ArduinoIotClient.Devicev2Otabinaryurl();
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

  describe('Devicev2Otabinaryurl', function() {
    it('should create an instance of Devicev2Otabinaryurl', function() {
      // uncomment below and update the code to test Devicev2Otabinaryurl
      //var instance = new ArduinoIotClient.Devicev2Otabinaryurl();
      //expect(instance).to.be.a(ArduinoIotClient.Devicev2Otabinaryurl);
    });

    it('should have the property async (base name: "async")', function() {
      // uncomment below and update the code to test the property async
      //var instance = new ArduinoIotClient.Devicev2Otabinaryurl();
      //expect(instance).to.be();
    });

    it('should have the property binaryKey (base name: "binary_key")', function() {
      // uncomment below and update the code to test the property binaryKey
      //var instance = new ArduinoIotClient.Devicev2Otabinaryurl();
      //expect(instance).to.be();
    });

    it('should have the property expireInMins (base name: "expire_in_mins")', function() {
      // uncomment below and update the code to test the property expireInMins
      //var instance = new ArduinoIotClient.Devicev2Otabinaryurl();
      //expect(instance).to.be();
    });

  });

}));
