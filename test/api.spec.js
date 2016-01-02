import TestUtils from './test-utils'
import AuthService from 'auth/service'
import request from 'supertest'

var expect = require('chai').expect

let service, db, app, testUtils

describe('Signup', function () {

    before(function () {
        testUtils = new TestUtils()

        service = new AuthService({email: {}, dbUrl: testUtils.dbUrl})
        service.init()
        app = service.app
        db = testUtils.dbConnection
    })

    describe('singup request', function () {
        it('adds entry in db', function (done) {
            request(app)
                .post('/signup')
                .type('form')
                .send({'email': 'me@b.com'})
                .expect(200)
                .end(function(err, res){
                    if (err) throw err;
                    console.log('test is done')
                    done()
                });
        });
    });

});
