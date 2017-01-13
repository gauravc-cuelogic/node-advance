require('dotenv').config();
var https = require('https');
var fs = require('fs');

var options = {
    hostname: "en.wikipedia.org",
    port: process.env.REQUEST_PORT,
    path: "/wiki/George_Washington",
    method: "GET"
};

var req = https.request(options, function(res){

    var responseBody = "";
    console.log('Server Response');
    console.log(`Server status code: ${res.statusCode}`);
    console.log('Response Header: %j', res.headers);//printing header in json format

    res.setEncoding('UTF-8');
    res.once('data',function(chunk){

        console.log(chunk);

    });

    res.on('data', function (chunk){

        console.log(`--chunk--  : ${chunk.length}`);
        responseBody += chunk;

    });

    res.on('end', function (){

        fs.writeFile('George_Washington.html', responseBody, function(err){

            if(err) throw err;
            console.log('file downloaded');

        });
    
    });
});

req.on('error', function(err){

    console.log(`problem with request: ${err.message}`);

});

req.end();