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
 * The ArduinoActionTemplate model module.
 * @module model/ArduinoActionTemplate
 * @version 3.0.0
 */
class ArduinoActionTemplate {
    /**
     * Constructs a new <code>ArduinoActionTemplate</code>.
     * ArduinoAction_template media type (default view)
     * @alias module:model/ArduinoActionTemplate
     */
    constructor() { 
        
        ArduinoActionTemplate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ArduinoActionTemplate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArduinoActionTemplate} obj Optional instance to populate.
     * @return {module:model/ArduinoActionTemplate} The populated <code>ArduinoActionTemplate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArduinoActionTemplate();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = EmailAction.constructFromObject(data['email']);
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
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ArduinoActionTemplate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ArduinoActionTemplate</code>.
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

        return true;
    }


}



/**
 * The description of the action
 * @member {String} description
 */
ArduinoActionTemplate.prototype['description'] = undefined;

/**
 * @member {module:model/EmailAction} email
 */
ArduinoActionTemplate.prototype['email'] = undefined;

/**
 * The kind of the action
 * @member {module:model/ArduinoActionTemplate.KindEnum} kind
 */
ArduinoActionTemplate.prototype['kind'] = undefined;

/**
 * The name of the action
 * @member {String} name
 */
ArduinoActionTemplate.prototype['name'] = undefined;

/**
 * Id of the organization the trigger belongs to
 * @member {String} organization_id
 */
ArduinoActionTemplate.prototype['organization_id'] = undefined;

/**
 * @member {module:model/PushAction} push_notification
 */
ArduinoActionTemplate.prototype['push_notification'] = undefined;





/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
ArduinoActionTemplate['KindEnum'] = {

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



export default ArduinoActionTemplate;
