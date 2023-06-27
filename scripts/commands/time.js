// Name: time
// Options: [now|date|null] (optional) or give a date ex: 01/01/2021
// Description: Displays the current time.
// Working script:
const timeCommand = (commandArgs) => {
	const option = commandArgs[0];

	const now = new Date();
	const currentDate = now.toLocaleDateString();
	const currentTime = now.toLocaleTimeString();

	const getTime = () => {
		window.addToConsoleOutput(
			`Current time: <span class="success-message">${currentTime}</span>`
		);
	}

	const getDate = () => {
		window.addToConsoleOutput(
			`Current date: <span class="success-message">${currentDate}</span>`
		);
	}

	const getTimestamp = (date) => {
		window.addToConsoleOutput(
			`Current timestamp: <span class="success-message">${Date.parse(date)}</span>`
		);
	}

	const getError = () => {
		window.addToConsoleOutput(
			`Invalid option. <span class="error-message">Usage: time [now|date|null]</span>`
		);
	}

	if (option === "now") {
		getTime();
	} else if (option === "date") {
		getDate();
	} else if (option !== undefined) {
		const givenDate = new Date(option);
		if (!isNaN(givenDate)) {
			getTimestamp(givenDate);
		} else {
			getError();
		}
	} else if (option === undefined) {
		getDate();
		getTime();
		getTimestamp(now);
	} else {
        getError();
    }
};

window.timeCommand = timeCommand;
