
let context = require.context('./src', true, /.+\.spec\.js?$/);

require('core-js/es5');

var MongoClient = require('mongodb').MongoClient
  , Server = require('mongodb').Server;

var assert = require('assert')

MongoClient.connect('mongodb://192.168.64.2/auth_test', function(err, db) {
  console.log('tests: new connection set')
})

// context.keys().forEach(context);
// module.exports = context;
