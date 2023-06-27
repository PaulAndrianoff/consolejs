// Name: genPhone
// Options: [country_code]
// Description: Generate a French or English phone number.
// Working script:
function genPhoneCommand(commandArgs) {
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
    
    const generateFrenchPhoneNumber = () => {
        const areaCode = generateRandomDigits(1);
        const firstBlock = generateRandomDigits(2);
        const secondBlock = generateRandomDigits(2);
        const thirdBlock = generateRandomDigits(2);
        const fourthBlock = generateRandomDigits(2);
        
        return `0${areaCode} ${firstBlock} ${secondBlock} ${thirdBlock} ${fourthBlock}`;
    };
    
    const generateEnglishPhoneNumber = () => {
        const firstBlock = generateRandomDigits(4);
        const secondBlock = generateRandomDigits(3);
        const thirdBlock = generateRandomDigits(4);
        return `+44 ${firstBlock} ${secondBlock} ${thirdBlock}`;
    };
    
    let generatedPhoneNumber = '';
    
    switch (countryCode.toUpperCase()) {
        case 'FR':
            generatedPhoneNumber = generateFrenchPhoneNumber();
            break;
        case 'GB':
            generatedPhoneNumber = generateEnglishPhoneNumber();
            break;
        default:
            window.addToConsoleOutput('Invalid country code. <span class="error-message">Use "FR" for French phone number or "GB" for English phone number.</span>');
            return;
    }
    
    window.addToConsoleOutput(`Generated phone number: <span class="success-message">${generatedPhoneNumber}</span>`);
}

window.genPhoneCommand = genPhoneCommand;
