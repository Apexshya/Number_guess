let y = Math.floor(Math.random() * 10 + 1);
let guess = 1;

document.getElementById("submitGuess").onclick = function () {
    let x = parseInt(document.getElementById("guessField").value);

    if (x == y) {
        alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN " + guess + " GUESSES");
    } else if (x > y) {
        guess++;
        alert("OOPS SORRY!! TRY A SMALLER NUMBER");
    } else {
        guess++;
        alert("OOPS SORRY!! TRY A GREATER NUMBER");
    }
};
