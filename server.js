const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser')
const Router = express.Router();
const db = require('./db.json');


// var express = require('express');
// var app = express();
// var http = require('http').Server(app);

// // Allow user to access static files
// app.use(express.static(__dirname + '/static'))

// // Start web server
// http.listen(3001, function() {
//     console.log('listening on *:3001');
// });
server.use(middlewares);
server.use(router);
server.listen(process.env.PORT || 3000) 

app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
 	res.setHeader('Access-Control-Allow-Headers', 
 	'X-Requested-With, content-type, Authorization, Content-Type');    
 	next();
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handler
app.use(function(err, req, res, next) {
  // Set locals; only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

app.listen(PORT, HOST, function () {
    console.log("listening on " + PORT + HOST + "!");
});

module.exports = app;