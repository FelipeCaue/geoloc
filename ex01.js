'use strict';
var MongoClient = require('mongodb').MongoClient
  , url = 'mongodb://localhost:27017/geodb'
  , lugar = {
    
      name: "Zona da Creide"
    , loc: [50, 50]
    }
  ;
 
MongoClient.connect(url, function(err, db) {
   if(err) return console.log(err);
 
  db.collection('lugares').insert(lugar, function(err, result) {
    if(err) return console.log(err);
    return console.log('Lugar ' + lugar.name + ' cadastrado: ', lugar);
  });
});