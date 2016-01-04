import TestUtils from './test-utils'
import Repository from 'auth/repository'
import request from 'supertest'
import sinon from 'sinon'
import {expect} from 'chai';

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
        repository.isEmailExists('a@b.com').then(function (exists) {
            expect(exists).to.equal(false)
        }).then(function () {
            return expect(repository.newSignup('a@b.com')).to.eventually.equal(true)
        }).then(function () {
            expect(repository.isEmailExists('a@b.com')).to.eventually.equal(true).and.notify(done)
        })
    })

});
