// Name: webInfo
// Options: [url]
// Description: Retrieves information about a given website, including the title, description, and keywords.
// Working script:
const webInfoCommand = (args) => {
	const url = args[0];
	if (!url) {
		window.addToConsoleOutput(`<span class="error-message">Please provide a valid URL.</span>`);
		return;
	}

	// Display loading animation
	window.addToConsoleOutput("Fetching website... Please wait.");

	fetch(`https://api.microlink.io?url=${url}`)
		.then((response) => response.json())
		.then((data) => {
			const { url, title, description, author, publisher, lang } = data.data;
			window.addToConsoleOutput(`Website: <span class="success-message">${url}</span>`);
			window.addToConsoleOutput(`Title: ${title}`);
			window.addToConsoleOutput(`Description: ${description}`);
			window.addToConsoleOutput(`Lang: ${lang}`);
			window.addToConsoleOutput(`Publisher: ${publisher}`);
			window.addToConsoleOutput(`Author: ${author}`);
		})
		.catch((error) => {
			console.error("Failed to fetch website information:", error);
			window.addToConsoleOutput(`<span class="error-message">Failed to fetch website information.</span>`);
		});
};

window.webInfoCommand = webInfoCommand;
