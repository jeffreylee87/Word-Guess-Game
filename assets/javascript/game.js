var djNames = ["martin garrix", "armin Van Buren", "tiesto", "david guetta", "tiesto", "steve aoki", "zedd",
    "calvin harris", "afrojack", "skrillex", "kshmr", "marshmello", "oliver heldens", "alan walker", "kygo", "diplo",
    "dj snake", "fedde le grand"];
var pickWord = djNames[Math.floor(Math.random() * djNames.length)];
console.log(pickWord);

var correctGuess = [];

var hiddenWord = pickWord.replace(/[a-z]/g, "_");
console.log(hiddenWord);


var guessLeft = 5;
var wins = 0;
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var conLetFor;

function startGame (userGuess){
    if (userGuess !== -1){
        document.querySelector("#lineToGuess").innerHTML = "<p>The Word: " + hiddenWord + "</p>";
    }

}


function decrease() {
    guessLeft--;
    return "<p>Number of Guesses Remaining: " + guessLeft + "</p>";
};

function endGame() {
    if (guessLeft === 0){
        document.querySelector("#guesses").innerHTML = "<p>Number of Guesses Remaining: 0</p>";
        alert("Game is over, loser!!!!");
        location.reload();
    }
}
function correctG (){ 
for (var i in pickWord){
   if(pickWord.charAt(i) === userGuess){
    correctGuess.push(pickWord[i]);
   }
   
}
}
console.log(correctGuess);


    document.onkeyup = function (event) {

        var userGuess = event.key;
        startGame(userGuess);

        var html = "<p>The Word: " + hiddenWord + "</p>";





        if (pickWord.indexOf(userGuess) !== -1) {
            alert("picked correct letter");
            document.querySelector("#lineToGuess").innerHTML = html;
        } else {
            document.getElementById("letGuessed").innerHTML += userGuess;
            document.querySelector("#guesses").innerHTML = decrease();
            endGame();
        }

    };

  

