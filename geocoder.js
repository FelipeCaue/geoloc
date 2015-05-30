var geocoderProvider = 'google';
var httpsAdapter = 'https';
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Qual é o endereço:", function(args){
  var geocoder = require('node-geocoder')(geocoderProvider, httpsAdapter);
  geocoder.geocode({address: args, country: 'Brazil'}, function(err, res) {
    console.log(res);
  });
})
