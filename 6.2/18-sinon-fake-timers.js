'use strict';

const should = require('chai').should();
const sinon = require('sinon');
const expect = require('chai').expect;

describe('Test Suite', function() {
  it('stub the object', function() {
    const object = {
      method: function(arg) {
        return arg;
      }
    };
    const CustomerError = new Error('custom message');
    // const CustomerError = { message: 'custom message' };
    const stub = sinon.stub(object, 'method');

    stub.withArgs(1).returns(3);
    stub.withArgs(42).throws(CustomerError);

    object.method(1).should.equal(3);
    // object.method(42).should.throws(CustomerError);
    // expect(object.method(42)).to.throw(CustomerError);

    expect(() => {
      object.method(42);
    }).to.throw(CustomerError);

    should.Throw(function() {
      object.method(42);
    }, CustomerError);
  });
});
