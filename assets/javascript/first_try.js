  var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        var rmGuessedLetters = letters;
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
        
        function orgLetter() {
          
                var orgLetter = letters[Math.floor(Math.random() * letters.length)];
                console.log("orgLetter1: " + orgLetter);
       
        }

        var body = document.getElementById('body');
        body.addEventListener("keydown", function(KeyboardEvent) {
            if (numGuesses === 9) {
                var comGuess = orgLetter();
            }
            userGuess = KeyboardEvent.key;
            console.log("userGuess1: " + userGuess);
            numGuesses--;
            leftGuesses.textContent = numGuesses;
        })
        console.log("keyPress user Guess: " + userGuess)
        
        //var userGuess = userGuess();
            console.log("lower case user guess: " + userGuess.toLowerCase())
            console.log("lower case orgLetter: " + orgLetter.toLowerCase())
            if (userGuess.toLowerCase() === orgLetter.toLowerCase()) {
                numGuesses--;
                leftGuesses.textContent = numGuesses;
                guessedLetters.push(userGuess);
                doneGuesses.textContent = guessedLetters;
                numWins++;
                wins.textContent = numWins;
                var orgLetter = letters[Math.floor(Math.random() * letters.length)];
                numGuesses = 9;
                leftGuesses.textContent = numGuesses;
                guessedLetters = [];
                doneGuesses.textContent = guessedLetters;
            } else {
                numGuesses--;
                console.log(numGuesses);
                leftGuesses.textContent = numGuesses;
                console.log(leftGuesses);
                guessedLetters.push(userGuess);
                console.log(guessedLetters);
                doneGuesses.textContent = guessedLetters;
                if (numGuesses === 0) {
                    numLosses++;
                    var orgLetter = letters[Math.floor(Math.random() * letters.length)];
                    numGuesses = 9;
                    guessedLetters = [];
                }
            }
 