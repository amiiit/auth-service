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

    it('singup request', function (done) {
        expect(repository.isEmailExists('a@b.com')).to.eventually.equal(false).and.notify(done)
    })

});
