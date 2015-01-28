var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var dsma = require('./../app.js'); 

describe('app.palindrome', function() {

  it('should be defined as a Function', function() {
    
    expect(dsma.palindrome).to.be.instanceOf(Function);
  
  });

  it('should test if a word is a palindrome', function() {
    
    var testString = 'racecar';
    var result = dsma.palindrome(testString);
    expect(result).should.be('racecar');
   
  });
  
});