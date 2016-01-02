import TestUtils from './test-utils'
import AuthService from 'auth/service'

var expect = require('chai').expect

let service
let testUtils = new TestUtils()

describe('Signup', function () {

    before(function(){
        service = new AuthService({email: {}, dbUrl: testUtils.dbUrl})
        service.init()
    })

    describe('#max', function () {
        it('returns the biggest number from the arguments', function () {
            var max = Math.max(1, 2, 10, 3);
            expect(max).to.equal(10);
        });
    });

});
