// Name: roll
// Options: [number_of_dice] [dice_value] [math_addition]
// Description: Roll the specified number of dice with the given value and perform addition with the results.
// Working script:
function rollCommand(commandArgs) {
    const numberOfDice = parseInt(commandArgs[0]);
    const diceValue = parseInt(commandArgs[1]);
    const mathAddition = commandArgs.slice(2).join(' ');
    
    if (isNaN(numberOfDice) || isNaN(diceValue)) {
        window.addToConsoleOutput('Invalid input. <span class="error-message">Please provide valid [integer] for the number of dice and [dice value].</span>');
        return;
    }
    
    const rollResults = [];
    let total = 0;
    
    for (let i = 0; i < numberOfDice; i++) {
        const roll = Math.floor(Math.random() * diceValue) + 1;
        rollResults.push(roll);
        total += roll;
    }
    
    window.addToConsoleOutput(`Roll results: ${rollResults.join(', ')}`);
    
    if (mathAddition) {
        const additionResult = eval(mathAddition);
        total += additionResult;
        window.addToConsoleOutput(`Addition result: ${additionResult}`);
    }
    
    window.addToConsoleOutput(`Total result: <span class="success-message">${total}</span>`);
}

window.rollCommand = rollCommand;
