// Name: cal
// Options: [math_calculus]
// Description: Perform a mathematical calculation and return the result.
// Working script:
function calCommand(commandArgs) {
    const mathCalculus = commandArgs.join(' ');
    
    if (!mathCalculus) {
        window.addToConsoleOutput('Invalid input. <span class="error-message">Please provide a mathematical calculus.</span>');
        return;
    }

    try {
        const result = eval(mathCalculus);

        if (`"${result}"` == mathCalculus || `'${result}'` == mathCalculus) {
            window.addToConsoleOutput(`<span class="error-message">${mathCalculus} is not a valid mathematical calculus.</span>`);
        } else {
            window.addToConsoleOutput(`Calculation: ${mathCalculus}`);
            window.addToConsoleOutput(`Result: <span class="success-message">${result}</span>`);
        }
    } catch (error) {
        window.addToConsoleOutput(`Invalid mathematical calculus: <span class="error-message">${error.message}</span>`);
    }
}

window.calCommand = calCommand;
