import TestUtils from './test-utils'
var expect = require('chai').expect

describe('Signup', function () {

    describe('#max', function () {
        it('returns the biggest number from the arguments', function () {
            console.log('db', new TestUtils().dbConnection)
            var max = Math.max(1, 2, 10, 3);
            expect(max).to.equal(10);
        });
    });

});
