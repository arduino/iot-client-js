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
    instance = new ArduinoIotClient.DashboardsV2Api();
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

  describe('DashboardsV2Api', function() {
    describe('dashboards_v2_clone', function() {
      it('should call dashboards_v2_clone successfully', function(done) {
        //uncomment below and update the code to test dashboards_v2_clone
        //instance.dashboards_v2_clone(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('dashboards_v2_create', function() {
      it('should call dashboards_v2_create successfully', function(done) {
        //uncomment below and update the code to test dashboards_v2_create
        //instance.dashboards_v2_create(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('dashboards_v2_delete', function() {
      it('should call dashboards_v2_delete successfully', function(done) {
        //uncomment below and update the code to test dashboards_v2_delete
        //instance.dashboards_v2_delete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('dashboards_v2_delete_share', function() {
      it('should call dashboards_v2_delete_share successfully', function(done) {
        //uncomment below and update the code to test dashboards_v2_delete_share
        //instance.dashboards_v2_delete_share(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('dashboards_v2_link', function() {
      it('should call dashboards_v2_link successfully', function(done) {
        //uncomment below and update the code to test dashboards_v2_link
        //instance.dashboards_v2_link(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('dashboards_v2_list', function() {
      it('should call dashboards_v2_list successfully', function(done) {
        //uncomment below and update the code to test dashboards_v2_list
        //instance.dashboards_v2_list(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('dashboards_v2_list_shares', function() {
      it('should call dashboards_v2_list_shares successfully', function(done) {
        //uncomment below and update the code to test dashboards_v2_list_shares
        //instance.dashboards_v2_list_shares(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('dashboards_v2_request_access', function() {
      it('should call dashboards_v2_request_access successfully', function(done) {
        //uncomment below and update the code to test dashboards_v2_request_access
        //instance.dashboards_v2_request_access(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('dashboards_v2_share', function() {
      it('should call dashboards_v2_share successfully', function(done) {
        //uncomment below and update the code to test dashboards_v2_share
        //instance.dashboards_v2_share(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('dashboards_v2_show', function() {
      it('should call dashboards_v2_show successfully', function(done) {
        //uncomment below and update the code to test dashboards_v2_show
        //instance.dashboards_v2_show(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('dashboards_v2_template', function() {
      it('should call dashboards_v2_template successfully', function(done) {
        //uncomment below and update the code to test dashboards_v2_template
        //instance.dashboards_v2_template(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('dashboards_v2_update', function() {
      it('should call dashboards_v2_update successfully', function(done) {
        //uncomment below and update the code to test dashboards_v2_update
        //instance.dashboards_v2_update(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
