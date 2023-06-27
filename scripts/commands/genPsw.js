// Name: genPsw
// Options: [string_length]
// Description: Generates a random password of the specified length.
// Working script:
function genPswCommand(commandArgs) {
    const stringLength = parseInt(commandArgs[0], 10);
    
    if (isNaN(stringLength) || stringLength <= 0) {
        window.addToConsoleOutput('Invalid string length. <span class="error-message">Please provide a positive integer.</span>');
        return;
    }
    
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let password = '';
    
    for (let i = 0; i < stringLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters.charAt(randomIndex);
    }
    
    window.addToConsoleOutput(`Generated Password: <span class="success-message">${password}</span>`);
}

window.genPswCommand = genPswCommand;
