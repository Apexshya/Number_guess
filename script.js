document.addEventListener("DOMContentLoaded", function () {
    let y = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100
    let guess = 1;
    const maxGuesses = 10; // Set the maximum number of guesses

    document.getElementById("submitGuess").addEventListener("click", function () {
        let x = parseInt(document.getElementById("guessField").value);
        let messageElement = document.getElementById("message");

        if (guess <= maxGuesses) {
            if (x == y) {
                messageElement.textContent = "CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN " + guess + " GUESSES";
            } else if (x > y) {
                messageElement.textContent = "OOPS SORRY!! TRY A SMALLER NUMBER";
            } else {
                messageElement.textContent = "OOPS SORRY!! TRY A GREATER NUMBER";
            }

            guess++;

            if (guess > maxGuesses) {
                document.getElementById("submitGuess").disabled = true;
                messageElement.textContent = "Sorry, you've reached the maximum number of guesses. The correct number was " + y;
            }
        }
    });
});
