var express = require('express');
var router = express.Router();
var Debate = require('../models/debate');
var mdb = require('mongodb').MongoClient,
  ObjectId = require('mongodb').ObjectID,
  assert = require('assert');
var api_version = '1';
var url = 'mongodb://localhost:27017/debate';

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

router.post('/'+api_version+'/postDebate', function(req, res, next) {
  var debate = new Debate(req.body);
  console.log(debate, "here is the debate");

  mdb.connect(url, function(err, db) {
    assert.equal(null, err);
    db.collection('debates').insert(debate,function(err){
      console.log(debate, "saved successfully");
      res.send(debate);
    });

    db.close();
  });
  // debate.save(function(err) {
  //   if (err) throw err;
  //   res.send(debate);
  //   console.log('Debate saved successfully!');
  // });

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