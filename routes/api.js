var express = require('express');
var router = express.Router();
var mdb = require('mongodb').MongoClient,
ObjectId = require('mongodb').ObjectID,
assert = require('assert');

var api_version = '1';
if (express().get('env') === 'development') {
  var url = 'mongodb://localhost:27017/debate';
}

/**
  GET all debates
  @param {}
  @return {JSON} - JSON for specific debate content
  */
  router.get('/'+api_version+'/debate', function(req, res, next) {
    var id = req.params.id;

    mdb.connect(url, function(err, db) {
      assert.equal(null, err);

      db.collection('debates').find().toArray(function(err, results) {
        res.json(results);
      })

      db.close();
    });
  });

/**
  GET info for debate listing.
  @param {ObjectId} - debate ID
  @return {JSON} - JSON for specific debate content
  */
  router.get('/'+api_version+'/debate/:id', function(req, res, next) {
    var id = req.params.id;

    mdb.connect(url, function(err, db) {
      assert.equal(null, err);

      db.collection('debates').find({"_id": new ObjectId(id)}).toArray(function(err, results) {
        res.json(results);
      })

      db.close();
    });
  });

/**
  GET all opinions for debate listing
  @param {}
  @return {JSON} - JSON for specific debate content
  */
  router.get('/'+api_version+'/opinions', function(req, res, next) {
    var id = req.params.id;

    mdb.connect(url, function(err, db) {
      assert.equal(null, err);

      db.collection('opinions').find().toArray(function(err, results) {
        res.json(results);
      })

      db.close();
    });
  });

/**
  GET opinions for debate listing.
  @param {ObjectId} - debate ID
  @return {JSON} - JSON for all opinions for that debate item
  */
  router.get('/'+api_version+'/debate/:id/opinions', function(req, res, next) {
    var id = req.params.id;

    mdb.connect(url, function(err, db) {
      assert.equal(null, err);

      db.collection('opinions').find({"debate_id": new ObjectId(id)}).toArray(function(err, results) {
        res.json(results);
      })

      db.close();
    });
  });

/**
  GET votes for opinions.
  @param {ObjectId} - opinion ID
  @return {JSON} - JSON for all opinions for that debate item
  */
  router.get('/'+api_version+'/opinions/:id/votes', function(req, res, next) {
    var id = req.params.id;

    mdb.connect(url, function(err, db) {
      assert.equal(null, err);

      db.collection('votes').find({"opinion_id": new ObjectId(id)}).toArray(function(err, results) {
        res.json(results);
      })

      db.close();
    });
  });

  module.exports = router;
