var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000;
var bodyParser = require('body-parser');

var mongoose = require('mongoose'),
Employee = require('./api/models/empModel');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/empdb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/empRoutes');
routes(app);

app.listen(port,"0.0.0.0");

console.log('EMP started at ' + port);




