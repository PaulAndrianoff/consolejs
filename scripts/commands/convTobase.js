// Name: convTobase
// Options: [base_number] [number_to_convert]
// Description: Convert a number to another base.
// Working script:
function convTobaseCommand(commandArgs) {
    const base = parseInt(commandArgs[0]);
    const number = parseInt(commandArgs[1]);
  
    if (isNaN(base) || isNaN(number)) {
        window.addToConsoleOutput('Invalid input. <span class="error-message">Please provide valid base number and number to convert.</span>');
        return;
    }
  
    const convertedNumber = number.toString(base);
  
    window.addToConsoleOutput(`${number} in base ${base} = <span class="success-message">${convertedNumber}</span>`);
}

window.convTobaseCommand = convTobaseCommand;
  