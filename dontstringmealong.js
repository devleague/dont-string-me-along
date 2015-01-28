(function () {
  var str = "9899100101103104105";

  function missingNumPush (){
  var missingNums = [];
    for (var i = 0; i < 10; i++){
      if (str.indexOf(i) === -1){
        missingNums.push(i);
      }
    }
  return missingNums;
  }
  missingNumPush();
})();

(function () {
  // console.log("test");
  var sample = "Jay Won";
  var whiteSpace = sample.indexOf(" ");

  function swapWords (){
    var secondWord = sample.slice(0,whiteSpace);
    var firstWord = sample.slice(whiteSpace, sample.length);
    var swapped = (firstWord + ", " + secondWord);
    return swapped;
    //return(firstWord + ", " + secondWord);
  }

  swapWords();
})();


