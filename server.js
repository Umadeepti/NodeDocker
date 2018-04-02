//'use strict';

var  express = require('express');
//constants
//var  PORT = 8080;
//var  HOST = '0.0.0.0';

//App
var  app = express()
app.get('/', function (req, res) {
res.send('Hello world!');
})

//app.listen(PORT, HOST);
//console.log('Running on http://${HOST}:${PORT}');
//Launch https;//buddy.works/guides/how-to-dockerize-node-application
app.listen(8081, function() {
console.log('app listening on port 8081!')
})

