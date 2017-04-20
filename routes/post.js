var express = require('express');
var router = express.Router();
var Debate = require('../models/debate');
var mdb = require('mongodb').MongoClient,
  ObjectId = require('mongodb').ObjectID,
  assert = require('assert');
var api_version = '1';
var url = 'mongodb://localhost:27017/debate';

router.post('/'+api_version+'/postDebate', function(req, res, next) {
  var debate = new Debate(req.body);
  console.log(debate, "here is the debate");
  debate.save(function(err) {
    if (err) throw err;
    console.log('Debate saved successfully!');
  });
  res.json(debate);
});

// router.get('/'+api_version+'/debate', function(req, res, next) {
//   var id = req.params.id;

//   mdb.connect(url, function(err, db) {
//     assert.equal(null, err);

//     db.collection('debates').find().toArray(function(err, results) {
//       res.json(results);
//     })

//     db.close();
//   });

// });


module.exports = router;