
var http = require('http');
var fs=require('fs')
var clientId = "FREE_TRIAL_ACCOUNT";
var clientSecret = "PUBLIC_SECRET";

var fromLang = "en";
var toLang ="ne";
var output="";
var text = fs.readFileSync('input.txt');


var jsonPayload = JSON.stringify({
    fromLang: fromLang,
    toLang: toLang,
    text: text.toString()
});

var options = {
    hostname: "api.whatsmate.net",
    port: 80,
    path: "/v1/translation/translate",
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "X-WM-CLIENT-ID": clientId,
        "X-WM-CLIENT-SECRET": clientSecret,
        "Content-Length": Buffer.byteLength(jsonPayload)
    }
};

var request = new http.ClientRequest(options);
request.end(jsonPayload);

request.on('response', function (response) {
    console.log('Status code: ' + response.statusCode);
    response.setEncoding('utf8');
    response.on('data', function (chunk) {
        console.log('Translated text:');
        console.log(chunk);
        output=chunk.toString();
        fs.writeFile("./text.txt",output,callback=function(err){
            if(err){
                console.log(err)
            }
           
        })
    });
});


