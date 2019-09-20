/**
 * Iot API
 * Collection of all public API endpoints.
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
    factory(root.expect, root.IotApi);
  }
}(this, function(expect, IotApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new IotApi.BatchLastValueRequestsMediaV1();
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

  describe('BatchLastValueRequestsMediaV1', function() {
    it('should create an instance of BatchLastValueRequestsMediaV1', function() {
      // uncomment below and update the code to test BatchLastValueRequestsMediaV1
      //var instane = new IotApi.BatchLastValueRequestsMediaV1();
      //expect(instance).to.be.a(IotApi.BatchLastValueRequestsMediaV1);
    });

    it('should have the property requests (base name: "requests")', function() {
      // uncomment below and update the code to test the property requests
      //var instane = new IotApi.BatchLastValueRequestsMediaV1();
      //expect(instance).to.be();
    });

  });

}));
