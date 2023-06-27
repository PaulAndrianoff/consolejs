// Name: surprise
// Options:
// Description: Play a game to find a random number between 1 and 100.
// Working script:
function surpriseCommand() {
    const targetNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    
    const makeGuess = () => {
        const userInput = prompt('Guess a number between 1 and 100 (or click Cancel to quit):');
        
        if (userInput === null) {
            window.addToConsoleOutput('Game ended. You quit the game.');
            return;
        }
        
        const guess = parseInt(userInput, 10);
        
        if (isNaN(guess) || guess < 1 || guess > 100) {
            window.addToConsoleOutput('Invalid input.<span class="error-message"> Please enter a number between 1 and 100.</span>');
            setTimeout(() => {
                makeGuess();
            }, 50);
            return;
        }
        
        attempts++;
        
        if (guess === targetNumber) {
            window.addToConsoleOutput(`Congratulations! You found the number <span class="success-message">${targetNumber}</span> in <span class="success-message">${attempts}</span> attempts.`);
        } else if (guess < targetNumber) {
            window.addToConsoleOutput(`${guess} is too low! Try a higher number.`);
            setTimeout(() => {
                makeGuess();
            }, 50);
        } else {
            window.addToConsoleOutput(`${guess} is too high! Try a lower number.`);
            setTimeout(() => {
                makeGuess();
            }, 50);
        }
    };
    
    makeGuess();
}

window.surpriseCommand = surpriseCommand;
