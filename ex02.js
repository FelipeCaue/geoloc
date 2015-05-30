var MongoClient = require('mongodb').MongoClient
  , url = 'mongodb://localhost:27017/geodb'
  ;
 
MongoClient.connect(url, function(err, db) {
    'use strict';
  if(err) return console.dir(err)
 
  var collection = db.collection('lugares');
 
  collection.ensureIndex({loc: "2d"}, {min: -1000, max: 1000}, function(err, result) {
    if(err) return console.dir(err);
 
    return console.log(result);
  });
 
});
//db.system.indexes.find() 