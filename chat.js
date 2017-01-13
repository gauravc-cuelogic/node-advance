require('dotenv').config();
var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(process.env.CHAT_PORT, function (){
    console.log('listening to 8000');
});

function handler (req, res) {
  fs.readFile(__dirname + '/chat.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading chat.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

io.on('connection', function (socket) {
  socket.on('send message', function (data) { // called when client sends message
    io.emit('rec message', data);// called when we send reply to client
  });
});

var nsp = io.of('/my-namespace');
nsp.on('connection', function(socket){
  socket.on('send message', function (data) { // called when client sends message
    nsp.emit('rec message', data);// called when we send reply to client
  });
});
