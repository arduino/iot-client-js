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
    define(['ApiClient', 'model/ArduinoProperty'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ArduinoProperty'));
  } else {
    // Browser globals (root is window)
    if (!root.IotApi) {
      root.IotApi = {};
    }
    root.IotApi.ArduinoDevicev2properties = factory(root.IotApi.ApiClient, root.IotApi.ArduinoProperty);
  }
}(this, function(ApiClient, ArduinoProperty) {
  'use strict';



  /**
   * The ArduinoDevicev2properties model module.
   * @module model/ArduinoDevicev2properties
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>ArduinoDevicev2properties</code>.
   * ArduinoDevicev2properties media type (default view)
   * @alias module:model/ArduinoDevicev2properties
   * @class
   * @param dataRetentionDays {Number} How many days the data will be kept
   * @param deviceId {String} The device of the property
   * @param properties {Array.<module:model/ArduinoProperty>} ArduinoPropertyCollection is the media type for an array of ArduinoProperty (default view)
   * @param userId {String} The user id of the owner
   */
  var exports = function(dataRetentionDays, deviceId, properties, userId) {
    var _this = this;

    _this['data_retention_days'] = dataRetentionDays;
    _this['deviceId'] = deviceId;
    _this['properties'] = properties;
    _this['user_id'] = userId;
  };

  /**
   * Constructs a <code>ArduinoDevicev2properties</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ArduinoDevicev2properties} obj Optional instance to populate.
   * @return {module:model/ArduinoDevicev2properties} The populated <code>ArduinoDevicev2properties</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('data_retention_days')) {
        obj['data_retention_days'] = ApiClient.convertToType(data['data_retention_days'], 'Number');
      }
      if (data.hasOwnProperty('deviceId')) {
        obj['deviceId'] = ApiClient.convertToType(data['deviceId'], 'String');
      }
      if (data.hasOwnProperty('properties')) {
        obj['properties'] = ApiClient.convertToType(data['properties'], [ArduinoProperty]);
      }
      if (data.hasOwnProperty('user_id')) {
        obj['user_id'] = ApiClient.convertToType(data['user_id'], 'String');
      }
    }
    return obj;
  }

  /**
   * How many days the data will be kept
   * @member {Number} data_retention_days
   */
  exports.prototype['data_retention_days'] = undefined;
  /**
   * The device of the property
   * @member {String} deviceId
   */
  exports.prototype['deviceId'] = undefined;
  /**
   * ArduinoPropertyCollection is the media type for an array of ArduinoProperty (default view)
   * @member {Array.<module:model/ArduinoProperty>} properties
   */
  exports.prototype['properties'] = undefined;
  /**
   * The user id of the owner
   * @member {String} user_id
   */
  exports.prototype['user_id'] = undefined;



  return exports;
}));


