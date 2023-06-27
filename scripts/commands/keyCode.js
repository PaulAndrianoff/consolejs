// Name: keyCode
// Options: [string]
// Description: Gets the keycode for the provided key.
// Working script:
const keyCodeCommand = (commandArgs) => {
	if (commandArgs.length === 0) {
		window.addToConsoleOutput(`<span class="error-message">Invalid number of arguments. Usage: keyCode [string]</span>`);
		return;
	}

	const key = commandArgs[0];
	const keyCode = key.charCodeAt(0);

	window.addToConsoleOutput(`Keycode for '${key}': <span class="success-message">${keyCode}</span>`);
};

window.keyCodeCommand = keyCodeCommand;
