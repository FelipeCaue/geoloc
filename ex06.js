var MongoClient = require('mongodb').MongoClient
  , url = 'mongodb://localhost:27017/geodb'
  , lugares = [
        {name: "Bar do Ze", loc: [50, 50]}
      , {name: "Bar da Dirce", loc: [10, 10]}
      , {name: "C Q Sabe", loc: [45, 45]}
    ]
  ;
var box = [[30, 30], [60, 60]];

MongoClient.connect(url, function(err, db) {
   if(err) return console.dir(err)

  db.collection('lugares').find({loc: {$within: {$box: box}}}).toArray(function(err, docs) {
    if(err) return console.dir(err)
    return console.log(docs);
  });

});
