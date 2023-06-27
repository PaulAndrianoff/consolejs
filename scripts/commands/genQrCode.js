// Name: genQrCode
// Options: [string]
// Description: Generates and download a QR code for the provided string.
// Working script:
const genQrCodeCommand = (commandArgs) => {
	const stringToEncode = commandArgs.join(" ");

    if (stringToEncode.length < 1) {
        window.addToConsoleOutput('<span class="error-message">Invalid number of arguments. Usage: genQrCode [string]</span>');
        return;
    }

	const qrCode = new QRCode(document.createElement("div"), {
		text: stringToEncode,
		width: 256,
		height: 256,
	});

	const qrCodeDataURL = qrCode._el.firstChild.toDataURL();

	const link = document.createElement("a");
	link.href = qrCodeDataURL;
	link.download = "qrcode.png";
	link.click();

    window.addToConsoleOutput(`QR code for <span class="success-message">"${stringToEncode}"</span> generated and downloaded.`);
};

window.genQrCodeCommand = genQrCodeCommand;
