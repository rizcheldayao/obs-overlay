const server = require('http').createServer()
  , Express = require('express')
  , app = Express()
  , port = 2017
  /* WebSocket */
  , wsServer = require('ws').Server
  , wss = new wsServer({
                          server: server
                       })
  ;

wss.broadcast = function(data) {
  wss.clients.forEach( function each(client){
    if (client.readyState === 1) {
      client.send(data);
    }
  });
}

wss.on('connection', function(socket){
  console.log('Client Connected!');
  socket.send('online');
  socket.on('close', function() {
    console.log('Client Disconnected!');
  });
});

app.use( function(req, res, next){
  if (req.path != '/overlay/broadcast') return next();
  var data = req.query['stage'];
  wss.broadcast(data);
  res.send('confirmed.');
});

app.use( Express.static( __dirname+'/public' ) );

server.on( 'request', app );

server.listen( port, function() {
  console.log('Listening on http://localhost:'+port);
});
