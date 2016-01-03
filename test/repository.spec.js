import TestUtils from './test-utils'
import Repository from 'auth/repository'
import request from 'supertest'
import sinon from 'sinon'

var expect = require('chai').expect

let repository, db, testUtils

describe('Repository', function () {

    before(function (done) {
        console.log('repo tests before')
        testUtils = new TestUtils()
        repository = new Repository(testUtils.dbUrl)
        db = testUtils.dbConnection

        repository.init().then(function () {
            console.log('repo init done')
            done()
        })
    })

    it.only('singup request', function (done) {
        db.collection('users').insert({email: 'a@b.com'}, function (insertErr, ids) {
            console.log('test instance inserted')
            repository.isEmailExists('a@b.com').then(function (result) {
                console.log('exists?', result)
                expect(result).to.be.false
                done()
            }, function (err) {
                console.log('exists? err', err)
                //expect(err).to.equal(err)
                done(err)

                console.log('after expectation')
            })
        })

    });

});
