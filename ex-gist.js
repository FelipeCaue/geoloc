var MongoClient = require('mongodb').MongoClient
  , url = 'mongodb://localhost:27017/geodb'
  , lugares = [
        {name: "Cabana", loc: [20, 20]}
      , {name: "Restaurante", loc: [35, 35]}
      , {name: "Prefeitura", loc: [90, 50]}
    ]
  ;
  var poly = [[10, 10], [95, 80], [110, 110], [120, 100], [130, 110]];
 
MongoClient.connect(url, function(err, db) {
    'use strict';
   if(err) return console.dir(err)
 
     db.collection('lugares').insert(lugares, function(err, result) {
    if(err) return console.dir(err)
    return console.log('Lugares cadastrados: ', lugares);
  });
    
    db.collection('lugares').find({loc: {$within: {$box: poly}}}).toArray(function(err, docs) {
    if(err) return console.dir(err)
    return console.log(docs);
  });
  });
 
  });
  });