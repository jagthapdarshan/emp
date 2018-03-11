var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000;
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/empRoutes');
routes(app);

app.listen(port,"0.0.0.0");

console.log('EMP started at ' + port);




