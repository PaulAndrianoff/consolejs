// Name: help
// Options: [command_name]
// Description: Displays a list of available commands or information about a specific command.
// Working script:
function helpCommand(commandArgs, availableCommands) {
    const commandName = commandArgs[0];
    
    if (commandName) {
        const command = availableCommands.find((cmd) => cmd.name === commandName);
        if (command) {
            window.addToConsoleOutput(`Command: <span class="success-message">${command.name}</span>`);
            window.addToConsoleOutput(`Options: ${command.options}`);
            window.addToConsoleOutput(`Description: ${command.description}`);
        } else {
            window.addToConsoleOutput(`Command <span class="error-message">'${commandName}'</span> not found.`);
        }
    } else {
        window.addToConsoleOutput('Available Commands:');
        let commandCount = 0;
        availableCommands.forEach((command) => {
            commandCount++;
            window.addToConsoleOutput(`* <span class="success-message">${command.name}</span>: ${command.description}`);
        });
        window.addToConsoleOutput(`Total Commands: <span class="success-message">${commandCount}</span>`);
    }
}

window.helpCommand = helpCommand;
