var express = require('express')
var app = express();
var path = require('path');
var http = require('http').Server(app);


app.set('port',process.env.PORT || 9000);
var port = app.get('port');
http.listen(port);
console.log('Server listening on PORT', port);

app.get('*', function(req, res){
  res.sendFile(path.resolve(__dirname, './client/index.html'))
});

module.exports = app;
