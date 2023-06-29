// Name: witchHouseAreYou
// Options:  --lang [en|fr]
// Description: Determines the Harry Potter house you belong to.
// Working script:
const witchHouseAreYouCommand = (commandArgs) => {
    console.log(commandArgs[0]);
	const lang = undefined !== commandArgs[0] ? commandArgs[0].toLowerCase() : "en";

	const houses = {
		en: ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"],
		fr: ["Gryffondor", "Poufsouffle", "Serdaigle", "Serpentard"],
	};

    if (!Object.keys(houses).includes(lang)) {
        window.addToConsoleOutput(`<span class="error-message">Invalid language. Please provide a valid language [en] or [fr] </span>`);
        return;
    }

	const randomIndex = Math.floor(Math.random() * houses[lang].length);
	const house = houses[lang][randomIndex];

	if ('fr' === lang) {
        window.addToConsoleOutput(`Vous appartenez à la Maison <span class="success-message">${house}</span> !`);
    } else {
        window.addToConsoleOutput(`You belong to <span class="success-message">${house}</span> house!`);
    }
};

window.witchHouseAreYouCommand = witchHouseAreYouCommand;
