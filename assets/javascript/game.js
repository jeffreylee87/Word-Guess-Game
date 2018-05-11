var djNames = ["martin garrix", "armin van buren", "tiesto", "david guetta", "tiesto", "steve aoki", "zedd",
    "calvin harris", "afrojack", "skrillex", "kshmr", "marshmello", "oliver heldens", "alan walker", "kygo", "diplo",
    "dj snake", "fedde le grand", 'jeffrey sexy lee'];
var pickWord = djNames[Math.floor(Math.random() * djNames.length)];
console.log(pickWord);

var hiddenWord = pickWord.replace(/[a-z]/g, "_");
console.log(hiddenWord);

var guessLeft = 5;
var wins = 0;



function startGame(userGuess) {
    if (userGuess !== -1) {
        document.querySelector("#lineToGuess").innerHTML = "<p>The Word: " + hiddenWord + "</p>";
        document.getElementById('audiotag').play().autoplay; 
    }
}

function decrease() {
    guessLeft--;
    return "<p>Number of Guesses Remaining: " + guessLeft + "</p>";
}

function endGame() {
    if (guessLeft === 0) {
        document.querySelector("#guesses").innerHTML = "<p>Number of Guesses Remaining: 0</p>";
        alert("Game is over, loser!!!! I just took your girl!");
        location.reload();
    }
}

function inputGuess(guess) {
    var arrayWord = pickWord.split("");
    for (var i in arrayWord) {
        if (guess === arrayWord[i]) {
            var splitHidden = hiddenWord.split("");
            splitHidden[i] = guess;
            hiddenWord = splitHidden.join('');
        }
    }

}

function setWord() {
    pickWord = djNames[Math.floor(Math.random() * djNames.length)];
    hiddenWord = pickWord.replace(/[a-z]/g, "_");
    document.getElementById("letGuessed").innerText = "";
    guessLeft = 5;
    document.querySelector("#guesses").textContent = `Number of Guesses Remaining: ${guessLeft}`;
}



document.onkeyup = function (event) {

    var userGuess = event.key;

    startGame(userGuess);

    var html = "<p>The Word: " + hiddenWord + "</p>";

    if (/^[a-z]/.test(userGuess)) {
        if (pickWord.indexOf(userGuess) !== -1) {
            alert("picked correct letter");
            inputGuess(userGuess);
            document.querySelector("#lineToGuess").innerText = "TheWord: " + hiddenWord;
            if (pickWord === hiddenWord) {
                document.querySelector("#lineToGuess").innerText = "TheWord: " + hiddenWord;
                wins++;
                document.querySelector("#wins").innerText = "Wins: " + wins;
                alert("You Win!!!!!!");
                setWord();
                alert("Hit any letter to take a guess")
            }
        } else {
            document.getElementById("letGuessed").innerHTML += userGuess;
            document.querySelector("#guesses").innerHTML = decrease();
            endGame();
        }
    } else {
        alert("Only press letters, nothing else or else......");
    }

};



