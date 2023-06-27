// Name: validReg
// Options: [regex_expression] [string_value]
// Description: Validate a regular expression against a given string value.
// Working script:
function validRegCommand(commandArgs) {
    const regexExpression = commandArgs[0];
    const stringValue = commandArgs[1];
    
    if (!regexExpression || !stringValue) {
        window.addToConsoleOutput('Invalid input. <span class="error-message">Please provide both a regular expression and a string value.</span>');
        return;
    }
    
    try {
        const regex = new RegExp(regexExpression);
        const isValid = regex.test(stringValue);
        
        if (isValid) {
            window.addToConsoleOutput(`The string value '${stringValue}' matches the regular expression <span class="success-message">'${regexExpression}'</span>.`);
        } else {
            window.addToConsoleOutput(`The string value '${stringValue}' does not match the regular expression <span class="success-message">'${regexExpression}'</span>.`);
        }
    } catch (error) {
        window.addToConsoleOutput(`Invalid regular expression: <span class="error-message">${error.message}</span>`);
    }
}

window.validRegCommand = validRegCommand;
