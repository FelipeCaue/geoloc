
var geocoderProvider = 'google';
var httpsAdapter = 'https';
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Qual é o endereço:", function(enderecos){
  var geocoder = require('node-geocoder')(geocoderProvider, httpsAdapter);
  geocoder.geocode({address: enderecos, country: 'Brazil'}, function(err, res) {
    console.log(res);

var MongoClient = require('mongodb').MongoClient
    ,url = 'mongodb://localhost:27017/geodb';

MongoClient.connect(url, function(err, db) {
  if(err) return console.dir(err)

  var collection = db.collection('enderecos');

  collection.ensureIndex({longitude: "2d"}, {min: -1000, max: 1000}, function(err, result) {
    if(err) return console.dir(err);
    return console.log(result);
  });

});

MongoClient.connect(url, function(err, db) {
   if(err) return console.dir(err)

  db.collection('enderecos').insert(res, function(err, result) {
    if(err) return console.dir(err)
    return console.log('Lugares cadastrados: ', res);
     });

    });
  })
});
