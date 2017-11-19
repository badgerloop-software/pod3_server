var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mysql = require('mysql'),
  bodyParser = require('body-parser');

mysql.Promise = global.Promise;
var connection = mysql.createConnection(
  {
    host : '127.0.0.1',
    user : 'root',
    password : 'root',
    database : 'badgerloop'
  }
);

connection.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/badgerloopRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
