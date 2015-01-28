var numSequence = "9899100101103104105";
var arraySequence = numSequence.split("");

var numStandard = ["0","1","2","3","4","5","6","7","8","9"];

var newArray = [];

function findMissing () {
  for (var i = 0; i < numStandard.length; i++) {
    for(var j = 0; j < arraySequence.length; j++)
      if (numStandard[i] === arraySequence[j]) {
        numStandard.splice(numStandard[i],1);
        console.log(numStandard);
    }
  }
}



