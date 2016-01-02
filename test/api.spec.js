import TestUtils from './test-utils'
import AuthService from 'auth/service'
import request from 'supertest'

var expect = require('chai').expect

let service, db, app
testUtils = new TestUtils()

describe('Signup', function () {

    before(function () {
        service = new AuthService({email: {}, dbUrl: testUtils.dbUrl})
        service.init()
        db = testUtils.dbConnection
    })

    describe('singup request', function () {
        it('adds entry in db', function () {
            request(app)
                .post('/signup')
                .field('email', 'me@b.com')
        });
    });

});
