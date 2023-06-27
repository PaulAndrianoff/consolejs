// Name: hexToRgb
// Options: [hex_color]
// Description: Converts a hexadecimal color code to RGB format.
// Working script:
function hexToRgbCommand(commandArgs) {
    const hexColor = commandArgs[0];
    
    if (!/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hexColor)) {
        window.addToConsoleOutput('<span class="error-message">Invalid hexadecimal color code.</span>');
        return;
    }
    
    let normalizedHexColor = hexColor.replace('#', '');
    if (normalizedHexColor.length === 3) {
        normalizedHexColor = normalizedHexColor
        .split('')
        .map((char) => char + char)
        .join('');
    }
    
    const red = parseInt(normalizedHexColor.substr(0, 2), 16);
    const green = parseInt(normalizedHexColor.substr(2, 2), 16);
    const blue = parseInt(normalizedHexColor.substr(4, 2), 16);
    
    window.addToConsoleOutput(`HEX: <span style="color: ${hexColor}">${hexColor}</span> -> RGB: (${red}, ${green}, ${blue})`);
}

window.hexToRgbCommand = hexToRgbCommand;
