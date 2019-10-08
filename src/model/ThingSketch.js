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
 * The ThingSketch model module.
 * @module model/ThingSketch
 * @version 1.0.0-beta3
 */
class ThingSketch {
    /**
     * Constructs a new <code>ThingSketch</code>.
     * ThingSketchPayload describes a sketch of a thing
     * @alias module:model/ThingSketch
     */
    constructor() { 
        
        ThingSketch.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ThingSketch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ThingSketch} obj Optional instance to populate.
     * @return {module:model/ThingSketch} The populated <code>ThingSketch</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ThingSketch();

            if (data.hasOwnProperty('pass')) {
                obj['pass'] = ApiClient.convertToType(data['pass'], 'String');
            }
            if (data.hasOwnProperty('ssid')) {
                obj['ssid'] = ApiClient.convertToType(data['ssid'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The wifi password
 * @member {String} pass
 */
ThingSketch.prototype['pass'] = undefined;

/**
 * The wifi ssid to connect
 * @member {String} ssid
 */
ThingSketch.prototype['ssid'] = undefined;






export default ThingSketch;

