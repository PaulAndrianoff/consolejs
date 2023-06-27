// Name: myIp
// Options:
// Description: Retrieves information about a your ip, including the country_name, timezone, utc_offset, version.
// Working script:
const myIpCommand = () => {
	// Display loading animation
	window.addToConsoleOutput("Fetching IP address... Please wait.");

	fetch("https://api.ipify.org?format=json")
		.then((response) => response.json())
		.then((data) => {
			const ipAddress = data.ip;
			window.addToConsoleOutput(
				`IP Address: <span class="success-message">${ipAddress}</span>`
			);

			// Fetch additional information based on the IP address
			fetch(`https://ipapi.co/${ipAddress}/json/`)
				.then((response) => response.json())
				.then((data) => {
					const { country_name, country_population, region, city, latitude, longitude, timezone, utc_offset, version } =
						data;
					window.addToConsoleOutput(`Country: ${country_name}`);
					window.addToConsoleOutput(`Country population: ${country_population}`);
					window.addToConsoleOutput(`Region: ${region}`);
					window.addToConsoleOutput(`City: ${city}`);
					window.addToConsoleOutput(`Latitude: ${latitude}`);
					window.addToConsoleOutput(`Longitude: ${longitude}`);
					window.addToConsoleOutput(`Timezone: ${timezone}`);
					window.addToConsoleOutput(`Utc offset: ${utc_offset}`);
					window.addToConsoleOutput(`IP version: ${version}`);
				})
				.catch((error) => {
					console.error("Failed to fetch IP information:", error);
					window.addToConsoleOutput(`Failed to fetch <span class="error-message">${ipAddress}</span> information`);
				});
		})
		.catch((error) => {
			console.error("Failed to fetch IP address:", error);
			window.addToConsoleOutput(`Failed to fetch <span class="error-message">${ipAddress}</span> information`);
		});
};

window.myIpCommand = myIpCommand;
