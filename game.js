let randomNumber, attemptsLeft;

        function startGame(difficulty) {
            if (difficulty === 'easy') {
                attemptsLeft = 10;
            } else if (difficulty === 'medium') {
                attemptsLeft = 6;
            } else if (difficulty === 'hard') {
                attemptsLeft = 4;
            }
            randomNumber = Math.floor(Math.random() * 100) + 1;
            document.getElementById('message').innerText = `You have ${attemptsLeft} attempts. Guess a number between 1 and 100.`;
            document.getElementById('guessInput').value = '';
            document.getElementById('guessInput').disabled = false;
            document.getElementById('submitGuess').disabled = false;
        }

        function checkGuess() {
            let userGuess = parseInt(document.getElementById('guessInput').value);
            if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
                document.getElementById('message').innerText = "Please enter a valid number between 1 and 100.";
                return;
            }
            attemptsLeft--;
            if (userGuess === randomNumber) {
                document.getElementById('message').innerText = `Congratulations! You guessed the number ${randomNumber} correctly!`;
                endGame();
            } else if (attemptsLeft > 0) {
                let hint = userGuess > randomNumber ? "Too high!" : "Too low!";
                document.getElementById('message').innerText = `${hint} You have ${attemptsLeft} attempts left.`;
            } else {
                document.getElementById('message').innerText = `Game Over! The correct number was ${randomNumber}.`;
                endGame();
            }
        }

        function endGame() {
            document.getElementById('guessInput').disabled = true;
            document.getElementById('submitGuess').disabled = true;
        }
