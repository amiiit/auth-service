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
        this.timeout(5000)
        var promise = repository.isEmailExists('a@b.com').then(function (result) {
            console.log('test call result', result)
            expect(result).to.be.false()
            console.log('error')
            return new Error()
            done()
        }, function (err) {
            console.log('exists? err', err)
            done(err)
        })


        console.log('promise')
        promise.then(function (a) {
            console.log('promise passed', a)
        }, function (err) {
            console.log('promise rejected', err)
        })

        return promise
    })

});
