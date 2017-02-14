var http = require('http');
require('dotenv').config();

var server = http.createServer(function(req, resp){
        resp.writeHead(200, {"Content-Type" : "text/html"});
        resp.end(`
            <!DOCTYPE html>
            <html>
                <head>
                    <title>Sample Web Server</title>
                </head>
                <body>
                    <h1>My Web Server</h1>
                    <p>${req.url}</p>
                    <p>${req.method}</p>
                </body>
            </html>

            `);

});

server.listen(process.env.Assignment_PORT);
console.log(`Server listening to localhost:${process.env.Assignment_PORT}`);