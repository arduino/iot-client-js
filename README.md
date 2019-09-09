# Arduino iot-api Javascript client

## Installation

For the time being and untile we publish a package on Npm, install it via:

```shell
npm install bcmi-labs/clients-iot-api --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript

var IotApi = require('iot_api');

var client = IotApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = client.authentications['oauth2'];
oauth2.accessToken = "YOUR ACCESS TOKEN";

var api = new IotApi.DevicesV2Api(client)
var callback = function (error, data, response) {
    if (error) {
        console.error(response.error);
    } else {
        console.log(data);
    }
};
api.devicesV2List(null, callback);
```

For a working example, see [the example folder](./example) in this repo.

## Authentication

The client requires a valid OAuth2 access token, you can get one like this:

```javascript

var rp = require('request-promise');

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
    console.log("Access token: " + response['access_token']);
}
catch (error) {
    console.error("Failed getting an access token: " + error)
}
```
