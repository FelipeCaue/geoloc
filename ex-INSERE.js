var MongoClient = require('mongodb').MongoClient
  , url = 'mongodb://localhost:27017/geodb'
  , lugares = [
        {name: "Ponto 20", loc: [20, 20]}
      , {name: "Ponto 35", loc: [35, 35]}
      , {name: "Ponto 90 50", loc: [90, 50]}
    ]
  ;


MongoClient.connect(url, function(err, db) {
   if(err) return console.log(err);

  db.collection('lugares').insert(lugares, function(err, result) {
    if(err) return console.log(err);
    return console.log('Lugar ' + lugares.name + ' cadastrado: ', lugares);
  });
});

var triangle = [[20, 20], [35, 35], [90, 50]];

MongoClient.connect(url, function(err, db) {
   if(err) return console.dir(err)

  db.collection('lugares')
    .find({loc: {$near: [20,20], $maxDistance: 5}})
    .toArray(function(err, docs) {
    if(err) return console.dir(err)
    return console.log(docs);
  });

});
