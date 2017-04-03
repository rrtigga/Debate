var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/opinion', function(req, res, next) {
  res.render('opinion', { title: 'Express' });
});

router.get('/obamacare', function(req, res, next) {
  res.render('obamacare', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});

router.get('/post', function(req, res, next) {
  res.render('post', { title: 'Express' });
});


module.exports = router;
