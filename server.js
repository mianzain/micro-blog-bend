var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
var db =require('./models/index.js');

app.set('view engine', 'ejs');

// app.use(bodyparser.json());
app.use(bodyParser.urlencoded({extended :true}));


app.use(express.static('public'));

// mongoose.connect('mongodb://localhost/micro-blog-bend');



app.get('/', function(req, res) {
	db.Post.find({}, function(err, posts) {
		if (err) console.log(err);
	
	res.render('index', {
		posts: posts
	});
});
});

app.get('/microblog/:id', function(req, res) {
	var microblog = Microblogs [req.params.id];
	res.render('Microblog-show', {Microblog: Microblog});

});
app.post('/api/posts', function(req, res) {
	console.log(req.body);
	db.Post.create(req.body, function(err, microblog) {
			res.json(microblog);
	});

	app.delete('/api/posts/:id', function(req, res){
		console.log('the post id is:', req.params.id);
	db.Post.remove({_id : req.params.id},function(err,post) {
		console.log("post delete");
		res.json(post);
	});

	});




// res.status(200).json(Microblog);
});



// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });












var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('app listening on port %s', port);
});