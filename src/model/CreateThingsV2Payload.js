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

import ApiClient from '../ApiClient';

/**
 * The CreateThingsV2Payload model module.
 * @module model/CreateThingsV2Payload
 * @version 1.0.0-beta3
 */
class CreateThingsV2Payload {
    /**
     * Constructs a new <code>CreateThingsV2Payload</code>.
     * ThingPayload describes a thing
     * @alias module:model/CreateThingsV2Payload
     * @param name {String} The friendly name of the thing
     */
    constructor(name) { 
        
        CreateThingsV2Payload.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>CreateThingsV2Payload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateThingsV2Payload} obj Optional instance to populate.
     * @return {module:model/CreateThingsV2Payload} The populated <code>CreateThingsV2Payload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateThingsV2Payload();

            if (data.hasOwnProperty('device_id')) {
                obj['device_id'] = ApiClient.convertToType(data['device_id'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('webhook_active')) {
                obj['webhook_active'] = ApiClient.convertToType(data['webhook_active'], 'Boolean');
            }
            if (data.hasOwnProperty('webhook_uri')) {
                obj['webhook_uri'] = ApiClient.convertToType(data['webhook_uri'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The arn of the associated device
 * @member {String} device_id
 */
CreateThingsV2Payload.prototype['device_id'] = undefined;

/**
 * The id of the thing
 * @member {String} id
 */
CreateThingsV2Payload.prototype['id'] = undefined;

/**
 * The friendly name of the thing
 * @member {String} name
 */
CreateThingsV2Payload.prototype['name'] = undefined;

/**
 * Webhook uri
 * @member {Boolean} webhook_active
 */
CreateThingsV2Payload.prototype['webhook_active'] = undefined;

/**
 * Webhook uri
 * @member {String} webhook_uri
 */
CreateThingsV2Payload.prototype['webhook_uri'] = undefined;






export default CreateThingsV2Payload;

