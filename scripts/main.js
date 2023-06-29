document.addEventListener("DOMContentLoaded", () => {
	const consoleOutput = document.getElementById("console-output");
	const commandInput = document.getElementById("command-input");

	const availableCommands = [];
	const commandHistory = [];

	let commandIndex = -1;

	commandInput.addEventListener("keydown", (event) => {
		if (event.key === "Enter") {
			const userInput = commandInput.value.trim();
			const command = userInput.split(" ");
			const commandName = command[0][0].toLowerCase() + command[0].slice(1); // Convert first letter to lowercase
			const commandArgs = command.slice(1);

			// Add the executed command to the command history
			commandHistory.push(userInput);
			executeCommand(commandName, commandArgs, commandInput);

			commandInput.value = "";
			commandIndex = commandHistory[commandIndex].length - 1;
		} else if (event.key === "ArrowUp") {
			// Handle arrow up key to retrieve previous command from history
			if (commandIndex === -1) {
				commandIndex = commandHistory.length - 1;
				commandInput.value = commandHistory[commandIndex] || "";
			} else if (commandIndex > 0) {
				commandIndex--;
				commandInput.value = commandHistory[commandIndex] || "";
			}

			// Move cursor to the end of the input
			setTimeout(() => {
				commandInput.selectionStart = commandInput.value.length;
				commandInput.selectionEnd = commandInput.value.length;
			}, 0);
		} else if (event.key === "ArrowDown") {
			// Handle arrow down key to retrieve next command from history
			if (commandIndex === -1) {
				commandInput.value = "";
			} else if (commandIndex < commandHistory.length - 1) {
				commandIndex++;
				commandInput.value = commandHistory[commandIndex] || "";
			} else {
				commandIndex = -1;
				commandInput.value = "";
			}

			// Move cursor to the end of the input
			setTimeout(() => {
				commandInput.selectionStart = commandInput.value.length;
				commandInput.selectionEnd = commandInput.value.length;
			}, 0);
		} else if (event.key === "Tab") {
			// Handle tab key to list commands starting with entered input
			event.preventDefault();
			similarCommand(commandInput);
		}
	});

	const similarCommand = (commandInput) => {
		const userInput = commandInput.value.trim().toLowerCase();
		const matchedCommands = availableCommands.filter((command) =>
			command.name.toLowerCase().startsWith(userInput)
		);
		if (matchedCommands.length === 1) {
			commandInput.value = matchedCommands[0].name + " ";
		} else if (matchedCommands.length > 1) {
			window.addToConsoleOutput(
				`Matching Commands: <span class="success-message">${matchedCommands
					.map((command) => command.name)
					.join(", ")}</span>`
			);
		}
	};

	const executeCommand = (commandName, commandArgs, commandInput) => {
		const command = availableCommands.find(
			(cmd) => cmd.name.toLowerCase() === commandName.toLowerCase()
		);

		if (command) {
			const functionName = `${command.name}Command`;
			if (typeof window[functionName] === "function") {
				window[functionName](commandArgs, availableCommands);
			} else {
				window.addToConsoleOutput(`Command '${commandName}' does not exist.`);
			}
		} else {
			window.addToConsoleOutput("Command not found.");
			similarCommand(commandInput);
		}
	};

	window.addToConsoleOutput = (message) => {
		setTimeout(() => {
			const outputLine = document.createElement("div");
		outputLine.innerHTML = `$ ${message}`;
		consoleOutput.appendChild(outputLine);

		// Scroll to the bottom of the console output
		consoleOutput.scrollTop = consoleOutput.scrollHeight;
		}, 50);
	};

	window.clearConsoleOutput = () => {
		consoleOutput.innerHTML = "";
	};

	const loadCommands = () => {
		const commandFiles = []; // Initialize an empty array
		window.addToConsoleOutput("Loading commands...");

		// Get all the command script files in the 'commands' directory
		fetch("scripts/commands")
			.then((response) => response.text())
			.then((html) => {
				const parser = new DOMParser();
				const doc = parser.parseFromString(html, "text/html");
				const links = doc.querySelectorAll("a");

				// Extract the command script file names
				links.forEach((link) => {
					const commandFile = link.href.split("/").pop();
					commandFiles.push(commandFile);
				});

				// Load the command scripts
				commandFiles.forEach((commandFile) => {
					const commandScriptUrl = `scripts/commands/${commandFile}`;

					// Fetch the command script file
					fetch(commandScriptUrl)
						.then((response) => response.text())
						.then((scriptText) => {
							// Extract the options, description, and working script from the comments
							const commentsRegex =
								/\/\/\s*Options:(.*)\n\/\/\s*Description:(.*)\n\/\/\s*Working script:(.*(?:\n\/\/.*)*)/s;
							const [, options, description] = scriptText.match(commentsRegex);

							// Create a command object
							const command = {
								name: commandFile.slice(0, -3), // Remove the file extension
								options: options.trim(),
								description: description.trim(),
								script: scriptText,
							};

							// Add the command to the available commands list
							availableCommands.push(command);
						})
						.catch((error) =>
							console.error(`Failed to load ${commandFile}: ${error}`)
						);
				});
				window.addToConsoleOutput("Commands loaded <span class='success-message'>successfully!</span>");
			})
			.catch((error) => {
				console.error("Failed to load command scripts:", error);
				window.addToConsoleOutput('<span class="error-message">' + error.message + "</span>");
			})
			.finally(() => {
				window.addToConsoleOutput(
					'Welcome to the console! Type "help" to get started.'
				);
			});
	};

	// Call the command loader function to load the commands
	loadCommands();

	
});
