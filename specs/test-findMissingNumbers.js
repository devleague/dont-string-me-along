var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var dsma = require('./../app.js'); 

describe('app.findMissingNumbers', function() {

  it('should be defined as a Function', function() {
    
    expect(dsma.findMissingNumbers).to.be.instanceOf(Function);
  
  });

  it("should be an array", function() {

    expect(dsma.findMissingNumbers).to.be.an('array');
    
  });

  it('should find the missing numbers in the sequence', function() {
    
    var testString = '9899100101103104105';
    var result = dsma.findMissingNumbers(testString);
    expect(result).should.equal([2, 6, 7]);
   
  });
  
});