// Name: convString
// Options: [string] [format]
// Description: Converts a string to lowercase (low), uppercase (upp), capitalize (cap), snake_case (sna), camelCase (cam), Pascal-case (pas), or kebab-case (keb) format.
// Working script:
const convStringCommand = (args) => {
	if (args.length < 2) {
		window.addToConsoleOutput(
			"Invalid number of arguments. Usage: convString [string] [format]"
		);
		return;
	}

	const string = args.slice(0, args.length - 1).join(" ");
	const format = args[args.length - 1].toLowerCase();

	switch (format) {
		case "lowercase":
		case "low":
			window.addToConsoleOutput(string.toLowerCase());
			break;
		case "uppercase":
		case "upp":
			window.addToConsoleOutput(string.toUpperCase());
			break;
		case "capitalize":
		case "cap":
			window.addToConsoleOutput(capitalizeString(string));
			break;
		case "snake_case":
		case "sna":
			window.addToConsoleOutput(convertToSnakeCase(string));
			break;
		case "camelcase":
		case "cam":
			window.addToConsoleOutput(convertToCamelCase(string));
			break;
		case "pascal-case":
		case "pas":
			window.addToConsoleOutput(convertToPascalCase(string));
			break;
		case "kebab-case":
		case "keb":
			window.addToConsoleOutput(convertToKebabCase(string));
			break;
		default:
			window.addToConsoleOutput(
				"Invalid format. Available formats: lowercase, uppercase, capitalize, snake_case, camelCase, Pascal-case, kebab-case"
			);
	}
};

const capitalizeString = (string) => {
	return string.charAt(0).toUpperCase() + string.slice(1);
};

const convertToSnakeCase = (string) => {
	return string.replace(/\s+/g, "_").toLowerCase();
};

const convertToCamelCase = (string) => {
	return string.replace(/\s+(\w)/g, (_, char) => char.toUpperCase());
};

const convertToPascalCase = (string) => {
	const camelCase = convertToCamelCase(string);
	return capitalizeString(camelCase);
};

const convertToKebabCase = (string) => {
	return string.replace(/\s+/g, "-").toLowerCase();
};

window.convStringCommand = convStringCommand;
