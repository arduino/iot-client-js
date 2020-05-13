var IotApi = require('../dist/index.js');
var rp = require('request-promise');

function getToken() {
    return new Promise(function(resolve, reject) {
        var options = {
            method: 'POST',
            url: 'https://api2.arduino.cc/iot/v1/clients/token',
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            json: true,
            form: {
                grant_type: 'client_credentials',
                client_id: process.env.CLIENT_ID,
                client_secret: process.env.CLIENT_SECRET,
                audience: 'https://api2.arduino.cc/iot'
            }
        };
        
        rp(options).then(function(res){
            resolve(res['access_token'])
        }, function(error){
            reject(error);
        });
    }); 
};         

describe('Devices List', function(){
   it('device list return 200 OK', function(done) {        
        getToken().then(function(token) {
            var client = IotApi.ApiClient.instance;
            // Configure OAuth2 access token for authorization: oauth2
            var oauth2 = client.authentications['oauth2'];
            oauth2.accessToken = token;
            
            var api = new IotApi.DevicesV2Api(client)    
            api.devicesV2List().then(function() {              
                done();
            }, function(error) {
                done(error);
            });            
        }, function(error) {
            done(error)
        });        
   });
});