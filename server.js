var express = require('express');
var bodyParser = require('body-parser');
var app = express();


app.set('view engine', 'ejs');


app.use(express.static('public'));

app.get('/', function (req, res) {
	res.render('index');
});



app.get('/', function (req, res) {
  res.send('Hello World!');
});












var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('app listening on port %s', port);
});