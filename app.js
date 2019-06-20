var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	io = require('socket.io').listen(server);
	
server.listen(80, "0.0.0.0");

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html')
});

io.sockets.on('connection', function(socket){
	socket.on('send message', function(data){
		message = data.name + ": " + data.msg
		io.sockets.emit('new message', message)
	});
});