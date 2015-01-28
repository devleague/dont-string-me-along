var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var dsma = require('./../app.js'); 

describe('app.twoStrings', function() {

  it('should be defined as a Function', function() {
    
    expect(dsma.twoStrings).to.be.instanceOf(Function);
  
  });

    it('should be within the circular variation of the word', function() {
    
    var testString = ['oh','hello'];
    var result = dsma.findMissingNumbers(testString);
    expect(result).to.be(true);

  
  });
});