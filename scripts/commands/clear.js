// Name: clear
// Options:
// Description: Clears the console output.
// Working script:
function clearCommand() {
    const consoleOutput = document.getElementById('console-output');
    consoleOutput.innerHTML = '';
    window.addToConsoleOutput('Console output cleared.');
}

window.clearCommand = clearCommand;
