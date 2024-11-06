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
import EmailAction from './EmailAction';
import PushAction from './PushAction';

/**
 * The ArduinoAction model module.
 * @module model/ArduinoAction
 * @version 3.0.0
 */
class ArduinoAction {
    /**
     * Constructs a new <code>ArduinoAction</code>.
     * ArduinoAction media type (default view)
     * @alias module:model/ArduinoAction
     */
    constructor() { 
        
        ArduinoAction.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ArduinoAction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArduinoAction} obj Optional instance to populate.
     * @return {module:model/ArduinoAction} The populated <code>ArduinoAction</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArduinoAction();

            if (data.hasOwnProperty('created_by')) {
                obj['created_by'] = ApiClient.convertToType(data['created_by'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = EmailAction.constructFromObject(data['email']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('organization_id')) {
                obj['organization_id'] = ApiClient.convertToType(data['organization_id'], 'String');
            }
            if (data.hasOwnProperty('push_notification')) {
                obj['push_notification'] = PushAction.constructFromObject(data['push_notification']);
            }
            if (data.hasOwnProperty('trigger_id')) {
                obj['trigger_id'] = ApiClient.convertToType(data['trigger_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ArduinoAction</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ArduinoAction</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['created_by'] && !(typeof data['created_by'] === 'string' || data['created_by'] instanceof String)) {
            throw new Error("Expected the field `created_by` to be a primitive type in the JSON string but got " + data['created_by']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // validate the optional field `email`
        if (data['email']) { // data not null
          EmailAction.validateJSON(data['email']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['kind'] && !(typeof data['kind'] === 'string' || data['kind'] instanceof String)) {
            throw new Error("Expected the field `kind` to be a primitive type in the JSON string but got " + data['kind']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['organization_id'] && !(typeof data['organization_id'] === 'string' || data['organization_id'] instanceof String)) {
            throw new Error("Expected the field `organization_id` to be a primitive type in the JSON string but got " + data['organization_id']);
        }
        // validate the optional field `push_notification`
        if (data['push_notification']) { // data not null
          PushAction.validateJSON(data['push_notification']);
        }
        // ensure the json data is a string
        if (data['trigger_id'] && !(typeof data['trigger_id'] === 'string' || data['trigger_id'] instanceof String)) {
            throw new Error("Expected the field `trigger_id` to be a primitive type in the JSON string but got " + data['trigger_id']);
        }

        return true;
    }


}



/**
 * Id of the user who created the action
 * @member {String} created_by
 */
ArduinoAction.prototype['created_by'] = undefined;

/**
 * The description of the action
 * @member {String} description
 */
ArduinoAction.prototype['description'] = undefined;

/**
 * @member {module:model/EmailAction} email
 */
ArduinoAction.prototype['email'] = undefined;

/**
 * The id of the action
 * @member {String} id
 */
ArduinoAction.prototype['id'] = undefined;

/**
 * The kind of the action
 * @member {module:model/ArduinoAction.KindEnum} kind
 */
ArduinoAction.prototype['kind'] = undefined;

/**
 * The name of the action
 * @member {String} name
 */
ArduinoAction.prototype['name'] = undefined;

/**
 * Id of the organization the trigger belongs to
 * @member {String} organization_id
 */
ArduinoAction.prototype['organization_id'] = undefined;

/**
 * @member {module:model/PushAction} push_notification
 */
ArduinoAction.prototype['push_notification'] = undefined;

/**
 * Id of the trigger the action is associated to
 * @member {String} trigger_id
 */
ArduinoAction.prototype['trigger_id'] = undefined;





/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
ArduinoAction['KindEnum'] = {

    /**
     * value: "NOTIFY-EMAIL"
     * @const
     */
    "EMAIL": "NOTIFY-EMAIL",

    /**
     * value: "NOTIFY-PUSH"
     * @const
     */
    "PUSH": "NOTIFY-PUSH"
};



export default ArduinoAction;
