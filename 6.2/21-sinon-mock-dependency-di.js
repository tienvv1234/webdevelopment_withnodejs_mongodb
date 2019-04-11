'use strict';

const should = require('chai').should();
const sinon = require('sinon');

describe('Test Suite', function() {
  const dependency = {
    method: function(arg) {
      console.log('From dependency');
      return arg;
    }
  };

  const object = {
    method: function(dependency) {
      if (!dependency) {
        console.log('Nodependency');
        throw Error('I need to dependency');
      }
      return dependency.method();
    }
  };

  let mock;

  beforeEach(function() {
    mock = sinon.mock(dependency);
  });

  afterEach(function() {
    mock.restore();
  });

  it('stub the object', function() {
    mock.expects('method').twice();
    object.method(dependency);
    mock.verify();
  });

  it('calls without a dependency', function() {
    mock.expects('method').twice();
    object.method();
    mock.verify();
  });

  it('calls without a dependency', function() {
    mock.expects('method').twice();

    const fakeDependency = {
      method: function() {
        console.log('From fake dependency');
        return 5;
      }
    };
    object.method(fakeDependency);
    mock.verify();
  });
});
