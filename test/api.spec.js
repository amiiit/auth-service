import TestUtils from './test-utils'
import AuthService from 'auth/service'
import request from 'supertest'
import sinon from 'sinon'

var expect = require('chai').expect

let service, db, app, testUtils

describe('Signup', function () {

    before(function () {
        console.log('api tests before')
        testUtils = new TestUtils()

        //service.delivery = sinon.spy(service.delivery)
        db = testUtils.dbConnection

        service = new AuthService({email: {}, dbUrl: testUtils.dbUrl})
        app = service.app

        return service.init()

    })

    describe('singup request', function () {
        it('adds entry in db', function (done) {
            request(app)
                .post('/signup')
                .type('form')
                .send({'email': 'new@example.com'})
                .expect(200)
                .end(function (err, res) {
                    if (err) throw err;
                    console.log(res.body)
                    expect(res.body.status).to.match(/.*Signed up successfully.*/)
                    done()
                });
        });
    });

});
