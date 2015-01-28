var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var dsma = require('./../app.js'); 

describe('app.swapWords', function() {

  it('should be defined as a Function', function() {
    
    expect(dsma.swapWords).to.be.instanceOf(Function);
  
  });
});