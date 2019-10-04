# Arduino iot-api Javascript client

## Installation

```shell
npm i @arduino/arduino-iot-client
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

import ArduinoIotClient from 'arduino-iot-client';
let defaultClient = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ArduinoIotClient.DevicesV2Api();
apiInstance.devicesV2List().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});
```

For a working example, see [the example folder](./example) in this repo.

## Authentication

The client requires a valid OAuth2 access token, you can get one like this:

```javascript

var rp = require('request-promise');

var options = {
    method: 'POST',
    url: 'https://login.arduino.cc/oauth/token',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    json: true,
    form: {
        grant_type: 'client_credentials',
        client_id: 'YOUR_CLIENT_ID',
        client_secret: 'YOUR_CLIENT_SECRET',
        audience: 'https://api2.arduino.cc/iot'
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