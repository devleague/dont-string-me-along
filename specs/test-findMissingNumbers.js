var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var dsma = require('./../app.js'); 

describe('app.findMissingNumber', function() {

  it("should be defined as a Function", function() {
    expect(dsma.findMissingNumber).to.be.a('function');
    expect(dsma.findMissingNumber).to.be.instanceOf(Function);
  });
  
});