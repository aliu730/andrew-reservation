var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(express.static(path.join(__dirname, '../public')));
app.get('/restaurant/:restaurant_id', function(req, res) {
	console.log(req.params);
})
app.listen(3000);