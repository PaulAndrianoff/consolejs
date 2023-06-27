// Name: genIBAN
// Options: [country_code]
// Description: Generate a French or English IBAN (International Bank Account Number).
// Working script:
function genIBANCommand(commandArgs) {
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
    
    const generateFrenchIBAN = () => {
        const randomDigits = generateRandomDigits(23);
        return `FR${randomDigits}`;
    };
    
    const generateEnglishIBAN = () => {
        const randomDigits = generateRandomDigits(22);
        return `GB${randomDigits}`;
    };
    
    let generatedIBAN = '';
    
    switch (countryCode.toUpperCase()) {
        case 'FR':
            generatedIBAN = generateFrenchIBAN();
            break;
        case 'GB':
            generatedIBAN = generateEnglishIBAN();
            break;
        default:
            window.addToConsoleOutput('Invalid country code. <span class="error-message">Use "FR" for French IBAN or "GB" for English IBAN.</span>');
            return;
    }
    
    const formattedIBAN = `${generatedIBAN.substring(0, 4)} ${generatedIBAN.substring(4, 4)} ${generatedIBAN.substring(8, 4)} ${generatedIBAN.substring(12, 4)} ${generatedIBAN.substring(16, 4)} ${generatedIBAN.substring(20)}`;
    
    window.addToConsoleOutput(`Generated IBAN: <span class="success-message">${formattedIBAN}</span>`);
}

window.genIBANCommand = genIBANCommand;
