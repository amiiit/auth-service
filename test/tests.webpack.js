import TestUtils from './test-utils'
require('core-js/es5');

var MongoClient = require('mongodb').MongoClient
    , Server = require('mongodb').Server;

var assert = require('assert')

before(function(done){
    MongoClient.connect('mongodb://192.168.64.2/auth_test', function (err, db) {
        if (err) {
            reject(err)
        } else {
            console.log('tests: new connection set', db.toString())
            console.log('testutils', new TestUtils())
            new TestUtils().dbConnection = db
            done()
        }
    })
})


let context = require.context('.', true, /.+\.spec\.js?$/);
context.keys().forEach(context);
module.exports = context;
