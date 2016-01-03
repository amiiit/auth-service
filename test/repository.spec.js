import TestUtils from './test-utils'
import Repository from 'auth/repository'
import request from 'supertest'
import sinon from 'sinon'

var expect = require('chai').expect

let repository, db, testUtils

describe('Repository', function () {

    before(function (done) {
        testUtils = new TestUtils()
        repository = new Repository(testUtils.dbUrl)

        repository.init().then(function () {
            done()
        })
    })

    it.only('singup request', function (done) {
       repository.isEmailExists('a@b.com').should.eventually.be.true()

    })

});
