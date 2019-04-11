'use strict';

const should = require('chai').should();
const sinon = require('sinon');

describe('Test Suite', function() {
  const dependency = {
    method: function(arg) {
      return arg;
    }
  };

  const object = {
    method: function(arg) {
      return dependency.method();
    }
  };

  it('stub the object', function() {
    const mock = sinon.mock(dependency);

    mock
      .expects('method')
      .atLeast(4)
      .atMost(6);
    object.method();
    object.method();
    mock.verify();
  });
});
