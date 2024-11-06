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
 * The UpdateAction model module.
 * @module model/UpdateAction
 * @version 3.0.0
 */
class UpdateAction {
    /**
     * Constructs a new <code>UpdateAction</code>.
     * @alias module:model/UpdateAction
     */
    constructor() { 
        
        UpdateAction.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateAction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateAction} obj Optional instance to populate.
     * @return {module:model/UpdateAction} The populated <code>UpdateAction</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateAction();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = EmailAction.constructFromObject(data['email']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
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
     * Validates the JSON data with respect to <code>UpdateAction</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateAction</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // validate the optional field `email`
        if (data['email']) { // data not null
          EmailAction.validateJSON(data['email']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
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
 * The description of the trigger
 * @member {String} description
 */
UpdateAction.prototype['description'] = undefined;

/**
 * @member {module:model/EmailAction} email
 */
UpdateAction.prototype['email'] = undefined;

/**
 * The name of the action
 * @member {String} name
 */
UpdateAction.prototype['name'] = undefined;

/**
 * @member {module:model/PushAction} push_notification
 */
UpdateAction.prototype['push_notification'] = undefined;

/**
 * Id of the trigger the action is associated to
 * @member {String} trigger_id
 */
UpdateAction.prototype['trigger_id'] = undefined;






export default UpdateAction;
