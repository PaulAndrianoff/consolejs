// Name: color
// Options: [n] [baseColor: optional]
// Description: Generate n complementary colors based on the baseColor. If no baseColor is provided, a random color will be used.
// Working script:
function colorCommand(commandArgs) {
	const n = parseInt(commandArgs[0]);

	if (commandArgs[0] !== undefined && (isNaN(n) || n <= 0)) {
		window.addToConsoleOutput(
			`Invalid input. <span class="error-message">Please provide a positive number.</span>`
		);
		return;
	}

	const generateRandomColor = () => {
		const randomColor = Math.floor(Math.random() * 16777215).toString(16);
		return "#" + "0".repeat(6 - randomColor.length) + randomColor;
	};

	// Helper function to convert hex color to RGB
	const hexToRgb = (hex) => {
		const bigint = parseInt(hex.replace("#", ""), 16);
		const r = (bigint >> 16) & 255;
		const g = (bigint >> 8) & 255;
		const b = bigint & 255;
		return { r, g, b };
	};

	// Helper function to convert RGB to HSL
	const rgbToHSL = (r, g, b) => {
		r /= 255;
		g /= 255;
		b /= 255;

		const max = Math.max(r, g, b);
		const min = Math.min(r, g, b);

		let h, s, l;

		if (max === min) {
			h = 0;
		} else if (max === r) {
			h = ((g - b) / (max - min)) % 6;
		} else if (max === g) {
			h = (b - r) / (max - min) + 2;
		} else if (max === b) {
			h = (r - g) / (max - min) + 4;
		}

		h = Math.round(h * 60);
		if (h < 0) {
			h += 360;
		}

		l = (max + min) / 2;

		if (max === min) {
			s = 0;
		} else if (l <= 0.5) {
			s = (max - min) / (2 * l);
		} else {
			s = (max - min) / (2 - 2 * l);
		}

		s = Math.round(s * 100);
		l = Math.round(l * 100);

		return { h, s, l };
	};

	// Helper function to convert HSL to RGB
	const hslToRgb = (h, s, l) => {
		h /= 360;
		s /= 100;
		l /= 100;

		let r, g, b;

		if (s === 0) {
			r = g = b = l;
		} else {
			const hue2rgb = (p, q, t) => {
				if (t < 0) t += 1;
				if (t > 1) t -= 1;
				if (t < 1 / 6) return p + (q - p) * 6 * t;
				if (t < 1 / 2) return q;
				if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
				return p;
			};

			const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
			const p = 2 * l - q;

			r = hue2rgb(p, q, h + 1 / 3);
			g = hue2rgb(p, q, h);
			b = hue2rgb(p, q, h - 1 / 3);
		}

		return {
			r: Math.round(r * 255),
			g: Math.round(g * 255),
			b: Math.round(b * 255),
		};
	};

	// Helper function to convert RGB to hexadecimal
	const rgbToHex = (r, g, b) => {
		const componentToHex = (component) => {
			const hex = component.toString(16);
			return hex.length === 1 ? "0" + hex : hex;
		};

		const redHex = componentToHex(r);
		const greenHex = componentToHex(g);
		const blueHex = componentToHex(b);

		return `#${redHex}${greenHex}${blueHex}`;
	};

	const generateComplementaryColors = (baseColor, n) => {
		const colors = [];
		const baseRGB = hexToRgb(baseColor);
		let baseHSL = rgbToHSL(baseRGB.r, baseRGB.g, baseRGB.b);

		for (let i = 0; i < n; i++) {
			const complementaryHSL = { ...baseHSL };
			complementaryHSL.h = (complementaryHSL.h + parseInt(360 / n)) % 360; // Adjust hue by 180 degrees
			const complementaryRGB = hslToRgb(
				complementaryHSL.h,
				complementaryHSL.s,
				complementaryHSL.l
			);
			const complementaryHex = rgbToHex(
				complementaryRGB.r,
				complementaryRGB.g,
				complementaryRGB.b
			);
			colors.push(complementaryHex);
			baseHSL = rgbToHSL(
				complementaryRGB.r,
				complementaryRGB.g,
				complementaryRGB.b
			);
		}

		return colors;
	};
	const baseColor =
		commandArgs.length === 2 ? commandArgs[1] : generateRandomColor();
	const complementaryColors = generateComplementaryColors(baseColor, n);
	window.addToConsoleOutput(
		`Base Color: <span style="color: ${baseColor};">${baseColor}</span>`
	);
	complementaryColors.forEach((color, index) => {
		window.addToConsoleOutput(
			`Complementary Color ${
				index + 1
			}:<span style="color: ${color};">${color}</span>`
		);
	});
}

window.colorCommand = colorCommand;
