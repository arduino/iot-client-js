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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.IotApi) {
      root.IotApi = {};
    }
    root.IotApi.ArduinoProperty = factory(root.IotApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The ArduinoProperty model module.
   * @module model/ArduinoProperty
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>ArduinoProperty</code>.
   * ArduinoProperty media type (default view)
   * @alias module:model/ArduinoProperty
   * @class
   * @param href {String} The api reference of this property
   * @param id {String} The id of the property
   * @param name {String} The friendly name of the property
   * @param permission {String} The permission of the property
   * @param thingId {String} The id of the thing
   * @param type {String} The type of the property
   * @param updateStrategy {String} The update strategy for the property value
   */
  var exports = function(href, id, name, permission, thingId, type, updateStrategy) {
    var _this = this;

    _this['href'] = href;
    _this['id'] = id;
    _this['name'] = name;
    _this['permission'] = permission;
    _this['thing_id'] = thingId;
    _this['type'] = type;
    _this['update_strategy'] = updateStrategy;
  };

  /**
   * Constructs a <code>ArduinoProperty</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ArduinoProperty} obj Optional instance to populate.
   * @return {module:model/ArduinoProperty} The populated <code>ArduinoProperty</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
      }
      if (data.hasOwnProperty('deleted_at')) {
        obj['deleted_at'] = ApiClient.convertToType(data['deleted_at'], 'Date');
      }
      if (data.hasOwnProperty('href')) {
        obj['href'] = ApiClient.convertToType(data['href'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('last_value')) {
        obj['last_value'] = ApiClient.convertToType(data['last_value'], Object);
      }
      if (data.hasOwnProperty('max_value')) {
        obj['max_value'] = ApiClient.convertToType(data['max_value'], 'Number');
      }
      if (data.hasOwnProperty('min_value')) {
        obj['min_value'] = ApiClient.convertToType(data['min_value'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('permission')) {
        obj['permission'] = ApiClient.convertToType(data['permission'], 'String');
      }
      if (data.hasOwnProperty('persist')) {
        obj['persist'] = ApiClient.convertToType(data['persist'], 'Boolean');
      }
      if (data.hasOwnProperty('thing_id')) {
        obj['thing_id'] = ApiClient.convertToType(data['thing_id'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('update_parameter')) {
        obj['update_parameter'] = ApiClient.convertToType(data['update_parameter'], 'Number');
      }
      if (data.hasOwnProperty('update_strategy')) {
        obj['update_strategy'] = ApiClient.convertToType(data['update_strategy'], 'String');
      }
      if (data.hasOwnProperty('updated_at')) {
        obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
      }
      if (data.hasOwnProperty('value_updated_at')) {
        obj['value_updated_at'] = ApiClient.convertToType(data['value_updated_at'], 'Date');
      }
      if (data.hasOwnProperty('variable_name')) {
        obj['variable_name'] = ApiClient.convertToType(data['variable_name'], 'String');
      }
    }
    return obj;
  }

  /**
   * Creation date of the property
   * @member {Date} created_at
   */
  exports.prototype['created_at'] = undefined;
  /**
   * Delete date of the property
   * @member {Date} deleted_at
   */
  exports.prototype['deleted_at'] = undefined;
  /**
   * The api reference of this property
   * @member {String} href
   */
  exports.prototype['href'] = undefined;
  /**
   * The id of the property
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Last value of this property
   * @member {Object} last_value
   */
  exports.prototype['last_value'] = undefined;
  /**
   * Maximum value of this property
   * @member {Number} max_value
   */
  exports.prototype['max_value'] = undefined;
  /**
   * Minimum value of this property
   * @member {Number} min_value
   */
  exports.prototype['min_value'] = undefined;
  /**
   * The friendly name of the property
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The permission of the property
   * @member {String} permission
   */
  exports.prototype['permission'] = undefined;
  /**
   * If true, data will persist into a timeseries database
   * @member {Boolean} persist
   */
  exports.prototype['persist'] = undefined;
  /**
   * The id of the thing
   * @member {String} thing_id
   */
  exports.prototype['thing_id'] = undefined;
  /**
   * The type of the property
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * The update frequency in seconds, or the amount of the property has to change in order to trigger an update
   * @member {Number} update_parameter
   */
  exports.prototype['update_parameter'] = undefined;
  /**
   * The update strategy for the property value
   * @member {String} update_strategy
   */
  exports.prototype['update_strategy'] = undefined;
  /**
   * Update date of the property
   * @member {Date} updated_at
   */
  exports.prototype['updated_at'] = undefined;
  /**
   * Last update timestamp of this property
   * @member {Date} value_updated_at
   */
  exports.prototype['value_updated_at'] = undefined;
  /**
   * The sketch variable name of the property
   * @member {String} variable_name
   */
  exports.prototype['variable_name'] = undefined;



  return exports;
}));


