// Name: genUser
// Options: None
// Description: Generates a random user.
// Working script:
const genUserCommand = () => {
	fetch("https://randomuser.me/api/")
		.then((response) => response.json())
		.then((data) => {
			const user = data.results[0];
			const fullName = `${user.name.first} ${user.name.last}`;
			const email = user.email;
			const username = user.login.username;
			const location = `${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}`;

			window.addToConsoleOutput(`Name: <span class="success-message">${fullName}</span>`);
			window.addToConsoleOutput(`Email: <span class="success-message">${email}</span>`);
			window.addToConsoleOutput(`Username: <span class="success-message">${username}</span>`);
			window.addToConsoleOutput(`Address: <span class="success-message">${location}</span>`);
		})
		.catch((error) => {
			window.addToConsoleOutput(`<span class="error-message">An error occured while fetching the random user. Please try again.</span>`);
			console.error(error);
		});
};

window.genUserCommand = genUserCommand;