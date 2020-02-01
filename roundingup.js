//Explored code for rounding up decimals. first version works without declaring the variable for parseFloat.

function avgscore() {
    var score = document.getElementById("myscore").value ;
    var scoreAvg = Math.ceil(score);

    if (score <= -1.000000 || score >= 1.0000000) { // To catch negative as well as positive decimals. 
      alert (scoreAvg);
    }
     else {
          alert("enter a decimal number greater or less than 1, ONE.")
     }

}
/*second version added a parseFloat to fix a decimal with > 2 places down to 2. */

function avgscore2dp() {
    var score = document.getElementById("myscore").value ;
var scoreHack = parseFloat(score).toFixed(2);  //fixes input to 2 dp.
var scoreAvg = Math.ceil(score); /*rounds up much small decimals to next whole integer. 
HOWEVER, when rounding up or down the parseFloat is irrelevant of course. */

    if (score >= 1.000000000) {
      alert (scoreAvg);
    }
     else {
          alert("enter a number greater than or equal to 1, ONE.")
     }

}
