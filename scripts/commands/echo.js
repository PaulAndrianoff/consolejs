// Name: echo
// Options: [-n]
// Description: Displays a message on the console.
// Working script:
function echoCommand(commandArgs) {
    const message = commandArgs.join(' ');
    window.addToConsoleOutput(message);
}

window.echoCommand = echoCommand;
