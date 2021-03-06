/**
 * Created by daniel.irwin on 6/20/16.
 */

describe('deep-setter', function () {

    var setter = require('../index');
    var assert = require('assert-diff').deepEqual;

    it('set array', function () {
        assert(setter({}, 'an.[@1].arbitrary.[@0].address', 'value'), {an: [, {arbitrary: [{address: 'value'}]}]});
    });

    it('set object with number keys', function () {
        assert(setter({}, 'an.1.arbitrary.0.address', 'value'), {an: {1: {arbitrary: {0: {address: 'value'}}}}});
    });

    it('set obj', function () {
        assert(setter({}, 'an.arbitrary.address', {test: 'value'}), {an: {arbitrary: {address: {test: 'value'}}}});
    });


    it('set obj with existing', function () {
        assert(setter({alreadyHere: {already: 'value'}},
            'an.arbitrary.address', {test: 'value'}), {
            alreadyHere: {already: 'value'},
            an: {arbitrary: {address: {test: 'value'}}}
        });
    });


    it('set obj with existing nearby', function () {
        assert(setter({an: {arbitrary: {somethingOtherThanAddress: 'value'}}},
            'an.arbitrary.address', {test: 'value'}), {
            an: {
                arbitrary: {
                    somethingOtherThanAddress: 'value',
                    address: {test: 'value'}
                }
            }
        });
    });

});