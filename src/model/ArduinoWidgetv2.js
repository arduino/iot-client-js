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

import ApiClient from '../ApiClient';
import ArduinoLinkedvariable from './ArduinoLinkedvariable';

/**
 * The ArduinoWidgetv2 model module.
 * @module model/ArduinoWidgetv2
 * @version 2.0.6
 */
class ArduinoWidgetv2 {
    /**
     * Constructs a new <code>ArduinoWidgetv2</code>.
     * ArduinoWidgetv2 media type (default view)
     * @alias module:model/ArduinoWidgetv2
     * @param height {Number} Widget current height for desktop
     * @param id {String} The UUID of the widget, set by client
     * @param options {Object.<String, Object>} Widget options
     * @param type {String} The type of the widget
     * @param width {Number} Widget current width for desktop
     * @param x {Number} Widget x position for desktop
     * @param y {Number} Widget y position for desktop
     */
    constructor(height, id, options, type, width, x, y) { 
        
        ArduinoWidgetv2.initialize(this, height, id, options, type, width, x, y);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, height, id, options, type, width, x, y) { 
        obj['height'] = height;
        obj['id'] = id;
        obj['options'] = options;
        obj['type'] = type;
        obj['width'] = width;
        obj['x'] = x;
        obj['y'] = y;
    }

    /**
     * Constructs a <code>ArduinoWidgetv2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArduinoWidgetv2} obj Optional instance to populate.
     * @return {module:model/ArduinoWidgetv2} The populated <code>ArduinoWidgetv2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArduinoWidgetv2();

            if (data.hasOwnProperty('has_permission_incompatibility')) {
                obj['has_permission_incompatibility'] = ApiClient.convertToType(data['has_permission_incompatibility'], 'Boolean');
            }
            if (data.hasOwnProperty('has_type_incompatibility')) {
                obj['has_type_incompatibility'] = ApiClient.convertToType(data['has_type_incompatibility'], 'Boolean');
            }
            if (data.hasOwnProperty('has_unlinked_variable')) {
                obj['has_unlinked_variable'] = ApiClient.convertToType(data['has_unlinked_variable'], 'Boolean');
            }
            if (data.hasOwnProperty('height')) {
                obj['height'] = ApiClient.convertToType(data['height'], 'Number');
            }
            if (data.hasOwnProperty('height_mobile')) {
                obj['height_mobile'] = ApiClient.convertToType(data['height_mobile'], 'Number');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('options')) {
                obj['options'] = ApiClient.convertToType(data['options'], {'String': Object});
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('variables')) {
                obj['variables'] = ApiClient.convertToType(data['variables'], [ArduinoLinkedvariable]);
            }
            if (data.hasOwnProperty('width')) {
                obj['width'] = ApiClient.convertToType(data['width'], 'Number');
            }
            if (data.hasOwnProperty('width_mobile')) {
                obj['width_mobile'] = ApiClient.convertToType(data['width_mobile'], 'Number');
            }
            if (data.hasOwnProperty('x')) {
                obj['x'] = ApiClient.convertToType(data['x'], 'Number');
            }
            if (data.hasOwnProperty('x_mobile')) {
                obj['x_mobile'] = ApiClient.convertToType(data['x_mobile'], 'Number');
            }
            if (data.hasOwnProperty('y')) {
                obj['y'] = ApiClient.convertToType(data['y'], 'Number');
            }
            if (data.hasOwnProperty('y_mobile')) {
                obj['y_mobile'] = ApiClient.convertToType(data['y_mobile'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ArduinoWidgetv2</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ArduinoWidgetv2</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ArduinoWidgetv2.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        if (data['variables']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['variables'])) {
                throw new Error("Expected the field `variables` to be an array in the JSON data but got " + data['variables']);
            }
            // validate the optional field `variables` (array)
            for (const item of data['variables']) {
                ArduinoLinkedvariable.validateJSON(item);
            };
        }

        return true;
    }


}

ArduinoWidgetv2.RequiredProperties = ["height", "id", "options", "type", "width", "x", "y"];

/**
 * True if the linked variables permissions are incompatible with the widget
 * @member {Boolean} has_permission_incompatibility
 */
ArduinoWidgetv2.prototype['has_permission_incompatibility'] = undefined;

/**
 * True if the linked variables types are incompatible with the widget
 * @member {Boolean} has_type_incompatibility
 */
ArduinoWidgetv2.prototype['has_type_incompatibility'] = undefined;

/**
 * If it's true the widget is linked to a soft-deleted variable
 * @member {Boolean} has_unlinked_variable
 */
ArduinoWidgetv2.prototype['has_unlinked_variable'] = undefined;

/**
 * Widget current height for desktop
 * @member {Number} height
 */
ArduinoWidgetv2.prototype['height'] = undefined;

/**
 * Widget current height for mobile
 * @member {Number} height_mobile
 */
ArduinoWidgetv2.prototype['height_mobile'] = undefined;

/**
 * The UUID of the widget, set by client
 * @member {String} id
 */
ArduinoWidgetv2.prototype['id'] = undefined;

/**
 * The name of the widget
 * @member {String} name
 */
ArduinoWidgetv2.prototype['name'] = undefined;

/**
 * Widget options
 * @member {Object.<String, Object>} options
 */
ArduinoWidgetv2.prototype['options'] = undefined;

/**
 * The type of the widget
 * @member {String} type
 */
ArduinoWidgetv2.prototype['type'] = undefined;

/**
 * ArduinoLinkedvariableCollection is the media type for an array of ArduinoLinkedvariable (default view)
 * @member {Array.<module:model/ArduinoLinkedvariable>} variables
 */
ArduinoWidgetv2.prototype['variables'] = undefined;

/**
 * Widget current width for desktop
 * @member {Number} width
 */
ArduinoWidgetv2.prototype['width'] = undefined;

/**
 * Widget current width for mobile
 * @member {Number} width_mobile
 */
ArduinoWidgetv2.prototype['width_mobile'] = undefined;

/**
 * Widget x position for desktop
 * @member {Number} x
 */
ArduinoWidgetv2.prototype['x'] = undefined;

/**
 * Widget x position for mobile
 * @member {Number} x_mobile
 */
ArduinoWidgetv2.prototype['x_mobile'] = undefined;

/**
 * Widget y position for desktop
 * @member {Number} y
 */
ArduinoWidgetv2.prototype['y'] = undefined;

/**
 * Widget y position for mobile
 * @member {Number} y_mobile
 */
ArduinoWidgetv2.prototype['y_mobile'] = undefined;






export default ArduinoWidgetv2;

