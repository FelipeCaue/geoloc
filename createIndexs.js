var MongoClient = require('mongodb').MongoClient
    ,url = 'mongodb://localhost:27017/geodb';

MongoClient.connect(url, function(err, db) {
  if(err) return console.dir(err)

  var collection = db.collection('enderecos');


collection.ensureIndex({latitude: "2d"}, {min: -1000, max: 1000}, function(err, result) {
    if(err) return console.dir(err);
    return console.log(result);
  });


  collection.ensureIndex({longitude: "2d"}, {min: -1000, max: 1000}, function(err, result) {
    if(err) return console.dir(err);
    return console.log(result);
  });

});
