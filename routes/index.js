var express = require('express');
var router = express.Router();

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


module.exports = router;
