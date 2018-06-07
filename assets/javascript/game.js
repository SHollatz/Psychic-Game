var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guessedLetters = [];
var numWins = 0;
var numLosses = 0;
var numGuesses = 9;

var wins = document.getElementById('wins');
var losses = document.getElementById('losses');
var leftGuesses = document.getElementById('leftGuesses');
var value = document.getElementById('doneGuesses');

wins.textContent = numWins;
losses.textContent = numLosses;
leftGuesses.textContent = numGuesses;
doneGuesses.textContent = guessedLetters;

var orgLetter = letters[Math.floor(Math.random() * letters.length)];
console.log("orgLetter1: " + orgLetter);

function reset() {
    numGuesses = 9;
    leftGuesses.textContent = numGuesses;
    guessedLetters = [];
    doneGuesses.textContent = guessedLetters;
    orgLetter = letters[Math.floor(Math.random() * letters.length)];
}


document.onkeyup = function(KeyboardEvent) {
    var userGuess = KeyboardEvent.key.toLowerCase();
    if (!guessedLetters.includes(userGuess)) {
        leftGuesses.textContent = numGuesses;
        numGuesses--;
        leftGuesses.textContent = numGuesses;
        if (letters.includes(userGuess)) {
            guessedLetters.push(userGuess);
            doneGuesses.textContent = guessedLetters;
        }
        if(userGuess === orgLetter) {
            numWins++;
            wins.textContent = numWins;
            reset();
            console.log("orgLetter2: " + orgLetter);
        }
        if (numGuesses === 0) {
            numLosses++;
            losses.textContent = numLosses;
            reset();
            console.log("orgLetter2: " + orgLetter);
        }

    }
};

