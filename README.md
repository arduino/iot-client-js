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

var ArduinoIotClient = require('@arduino/arduino-iot-client');
var client = ArduinoIotClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = client.authentications['oauth2'];
oauth2.accessToken = await getToken();
    
var api = new ArduinoIotClient.DevicesV2Api(client)    
api.devicesV2List().then(devices => {
    console.log(devices);
}, error => {
    console.log(error)
});
```

For a working example, see [the example folder](https://github.com/arduino/iot-client-js/tree/master/example) in this repo.

## Authentication

The client requires a valid OAuth2 access token, you can get one like this:

```javascript

var rp = require('request-promise');

var options = {
    method: 'POST',
    url: 'https://api2.arduino.cc/iot/v1/clients/token',
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

## How to get Arduino IoT Cloud Client Credentials

You can generate Arduino IoT Cloud Client Credentials in the `ARDUINO API` section in the [IoT Cloud things section](https://create.arduino.cc/iot/things):

### Step 1

![IoT Cloud Site](https://github.com/arduino/iot-client-js/blob/master/img/selection_1.png?raw=true)

### Step 2

![IoT Cloud Site](https://github.com/arduino/iot-client-js/blob/master/img/selection_2.png?raw=true)

### Step 3

![IoT Cloud Site](https://github.com/arduino/iot-client-js/blob/master/img/selection_3.png?raw=true)