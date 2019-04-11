'use strict';

const should = require('chai').should();
const sinon = require('sinon');

describe('Test Suite', function() {
  const object = {
    method: function(arg) {
      return arg;
    }
  };

  it('stub the object', function() {
    const mock = sinon.mock(object);

    mock.expects('method').once();

    mock.verify();
  });

  it('stub the object', function() {
    const mock = sinon.mock(object);

    mock.expects('method').once();
    object.method();
    mock.verify();
  });
});
