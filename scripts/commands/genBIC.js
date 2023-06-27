// Name: genBIC
// Options: [country_code]
// Description: Generate a French or English BIC (Bank Identifier Code).
// Working script:
function genBICCommand(commandArgs) {
    const countryCode = commandArgs[0];
  
    if (!countryCode) {
        window.addToConsoleOutput('Invalid input. <span class="error-message">Please provide a valid country code ex: "fr" or "gb".</span>');
        return;
    }
  
    const generateRandomDigits = (length) => {
        let result = '';
        for (let i = 0; i < length; i++) {
            result += Math.floor(Math.random() * 10);
        }
        return result;
    };
  
    const generateFrenchBIC = () => {
        const randomDigits = generateRandomDigits(7);
        const bankCode = `ABC${randomDigits}`;
        const branchCode = generateRandomDigits(5);
        return `${bankCode}${branchCode}`;
    };
  
    const generateEnglishBIC = () => {
        const randomDigits = generateRandomDigits(8);
        return `ABCD${randomDigits}`;
    };
  
    let generatedBIC = '';
  
    switch (countryCode.toUpperCase()) {
        case 'FR':
            generatedBIC = generateFrenchBIC();
            break;
        case 'GB':
            generatedBIC = generateEnglishBIC();
            break;
        default:
            window.addToConsoleOutput('Invalid country code. <span class="error-message">Use "FR" for French BIC or "GB" for English BIC.</span>');
            return;
    }
  
    window.addToConsoleOutput(`Generated BIC: <span class="success-message">${generatedBIC}</span>`);
}
  
window.genBICCommand = genBICCommand;
  