var MongoClient = require('mongodb').MongoClient
  , url = 'mongodb://localhost:27017/geodb'
  , lugares = [
        {name: "Bar do Ze", loc: [50, 50]}
      , {name: "Bar da Dirce", loc: [10, 10]}
      , {name: "C Q Sabe", loc: [45, 45]}
    ]
  ;
 
MongoClient.connect(url, function(err, db) {
    'use strict';
   if(err) return console.dir(err)
 
  db.collection('lugares')
    .find({loc: {$near: [50,50], $maxDistance: 10}})
    .toArray(function(err, docs) {
    if(err) return console.dir(err)
    return console.log(docs);
  });
 
});