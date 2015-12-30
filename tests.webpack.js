
let context = require.context('./src', true, /.+\.spec\.js?$/);

require('core-js/es5');

var MongoClient = require('mongodb').MongoClient
  , Server = require('mongodb').Server;

var assert = require('assert')

var mongoClient = new MongoClient(new Server('192.168.64.2', 27017));
mongoClient.open(function(err, mongoClient) {
  var db1 = mongoClient.db("mydb");

  mongoClient.close();
});

mongoClient.connect('mongodb://192.168.64.2:27017/auth_test', function(err, db) {
  assert.equal(null, err);
  var collection = db.collection('users')
  console.log("Connected correctly to server");
  collection.insert({a:'a'},function(){
    console.log('')
  })
  // db.close();

  db.collection("users").find({first:1}, function(err, docs) {
      docs.each(function(err, doc) {
        if(doc) {
          console.log(doc);
        }
      })
  })
})


// context.keys().forEach(context);
// module.exports = context;
