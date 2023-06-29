// Name: genName
// Options: number
// Description: Generates fantasy names for a role-playing game.
// Working script:
const genNameCommand = (commandArgs) => {
	const vowels = ["a", "e", "i", "o", "u", "y"];
	const consonants = [
		"b",
		"c",
		"d",
		"f",
		"g",
		"h",
		"j",
		"k",
		"l",
		"m",
		"n",
		"p",
		"qu",
		"r",
		"s",
		"t",
		"v",
		"w",
		"x",
		"z",
	];
	const numberOfPropositions = parseInt(commandArgs[0], 10) || 1; // Get the number of propositions from the command argument or default to 1

	for (let i = 0; i < numberOfPropositions; i++) {
		let name = "";
		let isVowel = Math.random() < 0.5; // Start with a vowel or consonant randomly
        let nameLength = Math.floor(Math.random() * 10) + 2; // Generate a name with 2 to 10 letters

		for (let j = 0; j < nameLength; j++) {
			if (isVowel) {
				name += vowels[Math.floor(Math.random() * vowels.length)];
				isVowel = Math.random() < 0.5;
			} else {
				name += consonants[Math.floor(Math.random() * consonants.length)];
				isVowel = true;
			}
		}

		window.addToConsoleOutput(`Generated name ${i + 1}: <span class="success-message">${name}</span>`);
	}
};

window.genNameCommand = genNameCommand;
