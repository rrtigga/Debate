var express = require('express');
var router = express.Router();
var mdb = require('mongodb').MongoClient,
ObjectId = require('mongodb').ObjectID,
assert = require('assert');

var api_version = '1';
if (express().get('env') === 'development') {
	var url = 'mongodb://localhost:27017/debate';
}

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('home', { title: 'Home' });
});

router.get('/opinion', function(req, res, next) {
	res.render('opinion', { title: 'Opinion' });
});

router.get('/opinions', function(req, res, next) {
	res.render('opinions', { title: 'Express' });
});

router.get('/obamacare', function(req, res, next) {
	res.render('obamacare', { title: 'Obama-Care' });
});

router.get('/about', function(req, res, next) {
	res.render('about', { title: 'About Us' });
});

router.get('/post', function(req, res, next) {
	res.render('post', { title: 'Express' });
});

//facebookLogin post


router.use(function(req, res, next) {
	console.log('request', req.url, req.body, req.method);
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-token");
	if(req.method === 'OPTIONS') {
		res.end();
	}
	else {
		next();
	}
});

router.post('/'+api_version+'/facebookLogin', function(req, res, next) {
	var user = req.body;
	console.log(user, "here is the user");
	mdb.connect(url, function(err, db) {
		assert.equal(null, err);
		db.collection('users').insert(user,function(err){
			console.log(user, "saved successfully");
			res.send(user);
		});

		db.close();
	});
});

	module.exports = router;
