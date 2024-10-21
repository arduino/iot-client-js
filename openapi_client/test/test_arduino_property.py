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
    instance = new ArduinoIotClient.ArduinoProperty();
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

  describe('ArduinoProperty', function() {
    it('should create an instance of ArduinoProperty', function() {
      // uncomment below and update the code to test ArduinoProperty
      //var instance = new ArduinoIotClient.ArduinoProperty();
      //expect(instance).to.be.a(ArduinoIotClient.ArduinoProperty);
    });

    it('should have the property created_at (base name: "created_at")', function() {
      // uncomment below and update the code to test the property created_at
      //var instance = new ArduinoIotClient.ArduinoProperty();
      //expect(instance).to.be();
    });

    it('should have the property deleted_at (base name: "deleted_at")', function() {
      // uncomment below and update the code to test the property deleted_at
      //var instance = new ArduinoIotClient.ArduinoProperty();
      //expect(instance).to.be();
    });

    it('should have the property href (base name: "href")', function() {
      // uncomment below and update the code to test the property href
      //var instance = new ArduinoIotClient.ArduinoProperty();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new ArduinoIotClient.ArduinoProperty();
      //expect(instance).to.be();
    });

    it('should have the property last_value (base name: "last_value")', function() {
      // uncomment below and update the code to test the property last_value
      //var instance = new ArduinoIotClient.ArduinoProperty();
      //expect(instance).to.be();
    });

    it('should have the property linked_to_trigger (base name: "linked_to_trigger")', function() {
      // uncomment below and update the code to test the property linked_to_trigger
      //var instance = new ArduinoIotClient.ArduinoProperty();
      //expect(instance).to.be();
    });

    it('should have the property max_value (base name: "max_value")', function() {
      // uncomment below and update the code to test the property max_value
      //var instance = new ArduinoIotClient.ArduinoProperty();
      //expect(instance).to.be();
    });

    it('should have the property min_value (base name: "min_value")', function() {
      // uncomment below and update the code to test the property min_value
      //var instance = new ArduinoIotClient.ArduinoProperty();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new ArduinoIotClient.ArduinoProperty();
      //expect(instance).to.be();
    });

    it('should have the property permission (base name: "permission")', function() {
      // uncomment below and update the code to test the property permission
      //var instance = new ArduinoIotClient.ArduinoProperty();
      //expect(instance).to.be();
    });

    it('should have the property persist (base name: "persist")', function() {
      // uncomment below and update the code to test the property persist
      //var instance = new ArduinoIotClient.ArduinoProperty();
      //expect(instance).to.be();
    });

    it('should have the property sync_id (base name: "sync_id")', function() {
      // uncomment below and update the code to test the property sync_id
      //var instance = new ArduinoIotClient.ArduinoProperty();
      //expect(instance).to.be();
    });

    it('should have the property tag (base name: "tag")', function() {
      // uncomment below and update the code to test the property tag
      //var instance = new ArduinoIotClient.ArduinoProperty();
      //expect(instance).to.be();
    });

    it('should have the property thing_id (base name: "thing_id")', function() {
      // uncomment below and update the code to test the property thing_id
      //var instance = new ArduinoIotClient.ArduinoProperty();
      //expect(instance).to.be();
    });

    it('should have the property thing_name (base name: "thing_name")', function() {
      // uncomment below and update the code to test the property thing_name
      //var instance = new ArduinoIotClient.ArduinoProperty();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new ArduinoIotClient.ArduinoProperty();
      //expect(instance).to.be();
    });

    it('should have the property update_parameter (base name: "update_parameter")', function() {
      // uncomment below and update the code to test the property update_parameter
      //var instance = new ArduinoIotClient.ArduinoProperty();
      //expect(instance).to.be();
    });

    it('should have the property update_strategy (base name: "update_strategy")', function() {
      // uncomment below and update the code to test the property update_strategy
      //var instance = new ArduinoIotClient.ArduinoProperty();
      //expect(instance).to.be();
    });

    it('should have the property updated_at (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updated_at
      //var instance = new ArduinoIotClient.ArduinoProperty();
      //expect(instance).to.be();
    });

    it('should have the property value_updated_at (base name: "value_updated_at")', function() {
      // uncomment below and update the code to test the property value_updated_at
      //var instance = new ArduinoIotClient.ArduinoProperty();
      //expect(instance).to.be();
    });

    it('should have the property variable_name (base name: "variable_name")', function() {
      // uncomment below and update the code to test the property variable_name
      //var instance = new ArduinoIotClient.ArduinoProperty();
      //expect(instance).to.be();
    });

  });

}));
