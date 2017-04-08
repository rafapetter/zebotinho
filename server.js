var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var request = require('request');

// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

// API Routes
// app.get('/blah', routeHandler);
app.set('port', (process.env.PORT || 5000));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'));
app.use(express.static('www'));

app.get('/', function(request, response) {
  response.send('Hello World!');
});

app.listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});