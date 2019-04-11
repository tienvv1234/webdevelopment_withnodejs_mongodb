'use strict';

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017/mylib';

MongoClient.connect(url, function(error, db) {
  assert.equal(null, error);
  console.log('Connected to MongoDB server');
  db.close();
});
