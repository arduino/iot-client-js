var IotApi = require('iot_api');
var rp = require('request-promise');

async function getToken() {
    var options = {
        method: 'POST',
        url: 'https://login.oniudra.cc/oauth/token',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        json: true,
        form: {
            grant_type: 'client_credentials',
            client_id: 'yr9Tb0P4qFOI3cziKizqUFZTrUvaeL47',
            client_secret: 'D-P2atuyJEZpB64_vymSQQYr1MPMuZhhK0e1U3jgPGVLRBSMH5jhKaivyRybu_4I',
            audience: 'https://api.arduino.cc'
        }
    };

    try {
        const response = await rp(options);
        return response['access_token'];
    }
    catch (error) {
        console.error("Failed getting an access token: " + error)
    }
}

async function run() {
    var client = IotApi.ApiClient.instance;
    // Configure OAuth2 access token for authorization: oauth2
    var oauth2 = client.authentications['oauth2'];
    oauth2.accessToken = await getToken();

    var api = new IotApi.DevicesV2Api(client)
    var callback = function (error, data, response) {
        if (error) {
            console.error(response.error);
        } else {
            console.log(data);
        }
    };
    api.devicesV2List(null, callback);
}

run();