var MongoClient = require('mongodb').MongoClient
  , url = 'mongodb://localhost:27017/geodb'
  , lugares = [
        {name: "Ponto 20", loc: [20, 20]}
      , {name: "Ponto 35", loc: [35, 35]}
      , {name: "Ponto 90 50", loc: [90, 50]}
    ]
  ;

var triangle = [[20, 20], [35, 35], [90, 50]];

MongoClient.connect(url, function(err, db) {
    'use strict';
   if(err) return console.dir(err)
   
  db.collection('lugares')
    .find({loc: {$near: [20,20], $maxDistance: 10}})
    .toArray(function(err, docs) {
    if(err) return console.dir(err)
    return console.log(docs);
  });
 
});