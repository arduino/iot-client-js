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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ArduinoSeriesRawLastValueResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ArduinoSeriesRawLastValueResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.IotApi) {
      root.IotApi = {};
    }
    root.IotApi.ArduinoSeriesRawBatchLastvalue = factory(root.IotApi.ApiClient, root.IotApi.ArduinoSeriesRawLastValueResponse);
  }
}(this, function(ApiClient, ArduinoSeriesRawLastValueResponse) {
  'use strict';



  /**
   * The ArduinoSeriesRawBatchLastvalue model module.
   * @module model/ArduinoSeriesRawBatchLastvalue
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>ArduinoSeriesRawBatchLastvalue</code>.
   * ArduinoSeriesRawBatchLastvalue media type (default view)
   * @alias module:model/ArduinoSeriesRawBatchLastvalue
   * @class
   * @param responses {Array.<module:model/ArduinoSeriesRawLastValueResponse>} Responses of the request
   * @param status {String} Status of the response
   */
  var exports = function(responses, status) {
    var _this = this;

    _this['responses'] = responses;
    _this['status'] = status;
  };

  /**
   * Constructs a <code>ArduinoSeriesRawBatchLastvalue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ArduinoSeriesRawBatchLastvalue} obj Optional instance to populate.
   * @return {module:model/ArduinoSeriesRawBatchLastvalue} The populated <code>ArduinoSeriesRawBatchLastvalue</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('responses')) {
        obj['responses'] = ApiClient.convertToType(data['responses'], [ArduinoSeriesRawLastValueResponse]);
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
    }
    return obj;
  }

  /**
   * Responses of the request
   * @member {Array.<module:model/ArduinoSeriesRawLastValueResponse>} responses
   */
  exports.prototype['responses'] = undefined;
  /**
   * Status of the response
   * @member {String} status
   */
  exports.prototype['status'] = undefined;



  return exports;
}));


