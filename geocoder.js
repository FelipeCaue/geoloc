var geocoderProvider = 'google';
var httpsAdapter = 'https';
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Qual o endereco:", function(args){
  var geocoder = require('node-geocoder')(geocoderProvider, httpsAdapter);


geocoder.geocode({address: args, country: 'Brazil'}, function(err, res) {
    console.log(res);
});

})
//var readline = require('')
//var endereco;
/*
// optionnal
var extra = {
    apiKey: 'YOUR_API_KEY', // for Mapquest, OpenCage, Google Premier
    formatter: null         // 'gpx', 'string', ...
};
*/

