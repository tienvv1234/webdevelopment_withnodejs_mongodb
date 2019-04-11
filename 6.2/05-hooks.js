'use strict';

const should = require('chai').should();

describe('Test suite', function() {
  before(function() {
    console.log('Runs before all tests in this block');
  });

  after(function() {
    console.log('Runs after all tests in this block');
  });

  beforeEach(function() {
    console.log('Runs before each test in this block');
  });

  afterEach(function() {
    console.log('Runs after each test in this block');
  });

  it('is a string', function() {
    'you'.should.be.a('string');
  });

  it('is a array', function() {
    [].should.be.a('array');
  });

  it('is a object', function() {
    ({}.should.be.a('object'));
  });
});
