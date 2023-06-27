// Name: giveMe
// Options: [type] - The type of output: 'int', 'coin', 'card', 'suit', 'rank'
// Description: Gives a random output based on the specified type such as an integer, a coin, a card, suit and rank.
// Working script:
const giveMeCommand = (args) => {
	const type = args[0];

	if (!type) {
		window.addToConsoleOutput(
			`Please provide a valid type: <span class="error-message">int, coin, or card.</span>`
		);
		return;
	}

	const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
	const ranks = [
		"Ace",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
		"10",
		"Jack",
		"Queen",
		"King",
	];

	switch (type) {
		case "int":
			const n = parseInt(args[1]);

			if (!Number.isNaN(n)) {
				const randomInt = Math.floor(Math.random() * (n)) + 1;
				window.addToConsoleOutput(
					`Random int: <span class="success-message">${randomInt}</span>`
				);
			} else {
				window.addToConsoleOutput(
					`<span class="error-message">Please provide a valid number.</span>`
				);
			}
			break;

		case "coin":
			const coin = Math.random() < 0.5 ? "Head" : "Tail";
			window.addToConsoleOutput(
				`Coin toss: <span class="success-message">${coin}</span>`
			);
			break;

		case "card":
			const randomSuit = suits[Math.floor(Math.random() * suits.length)];
			const randomRank = ranks[Math.floor(Math.random() * ranks.length)];
			window.addToConsoleOutput(
				`Random card: <span class="success-message">${randomRank} of ${randomSuit}</span>`
			);
			break;

		case "suit":
			const randomSuitOnly = suits[Math.floor(Math.random() * suits.length)];
			window.addToConsoleOutput(`Random suit: <span class="success-message">${randomSuitOnly}</span>`);
			break;

		case "rank":
			const randomRankOnly = ranks[Math.floor(Math.random() * ranks.length)];
			window.addToConsoleOutput(`Random rank: <span class="success-message">${randomRankOnly}</span>`);
			break;

		default:
			window.addToConsoleOutput(
				`Please provide a valid type: <span class="error-message">int, coin, or card.</span>`
			);
			break;
	}
};

window.giveMeCommand = giveMeCommand;
