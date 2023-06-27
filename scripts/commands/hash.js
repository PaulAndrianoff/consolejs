// Name: Hash
// Options: <string> <algorithm> (sha1, md5)
// Description: Encrypts a given string using the specified algorithm (sha1, md5).
// Working script:

const hashCommand = (args) => {
	if (args.length < 1) {
		addToConsoleOutput(`Invalid command. <span class="error-message">Usage: hash [string] [algorithm]</span>`);
		return;
	}

	const string = args[0];
	const algorithm = args[1];

	let encryptedString;
console.log(algorithm);
	switch (algorithm) {
		case "sha1":
			encryptedString = sha1(string);
			break;
		case "md5":
			encryptedString = md5(string);
			break;
		case undefined:
			encryptedString = sha1(string);
			addToConsoleOutput(
				`[SHA1] ${string}: <span class="success-message">${encryptedString}</span>`
			);
			encryptedString = md5(string);
			addToConsoleOutput(
				`[MD5] ${string}: <span class="success-message">${encryptedString}</span>`
			);
			return;
		default:
			addToConsoleOutput(`Invalid algorithm. <span class="error-message">Supported algorithms: sha1, md5</span>`);
			return;
	}

	addToConsoleOutput(
		`[${algorithm.toUpperCase()}] ${string}: <span class="success-message">${encryptedString}</span>`
	);
};

const sha1 = (string) => {
	let sha1Hash = "";

	const utf8Encode = (text) => {
		return unescape(encodeURIComponent(text));
	};

	const rotateLeft = (n, s) => {
		return (n << s) | (n >>> (32 - s));
	};

	const addUnsigned = (x, y) => {
		const lsw = (x & 0xffff) + (y & 0xffff);
		const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
		return (msw << 16) | (lsw & 0xffff);
	};

	const hexString = (num) => {
		let str = "";
		let j;
		let x;
		for (j = 0; j <= 3; j++) {
			x = (num >>> (j * 8)) & 255;
			str += ("0" + x.toString(16)).slice(-2);
		}
		return str;
	};

	const sha1Transform = (input) => {
		let block = [];
		let a = 0x67452301;
		let b = 0xefcdab89;
		let c = 0x98badcfe;
		let d = 0x10325476;
		let e = 0xc3d2e1f0;
		let x;
		let t;
		let temp;
		let i;

		input = utf8Encode(input);

		const len = input.length;
		const words = [];
		for (i = 0; i < len - 3; i += 4) {
			words.push(
				(input.charCodeAt(i) << 24) |
					(input.charCodeAt(i + 1) << 16) |
					(input.charCodeAt(i + 2) << 8) |
					input.charCodeAt(i + 3)
			);
		}

		switch (len % 4) {
			case 0:
				i = 0x080000000;
				break;
			case 1:
				i = (input.charCodeAt(len - 1) << 24) | 0x0800000;
				break;
			case 2:
				i =
					(input.charCodeAt(len - 2) << 24) |
					(input.charCodeAt(len - 1) << 16) |
					0x08000;
				break;
			case 3:
				i =
					(input.charCodeAt(len - 3) << 24) |
					(input.charCodeAt(len - 2) << 16) |
					(input.charCodeAt(len - 1) << 8) |
					0x80;
				break;
		}

		words.push(i);

		while (words.length % 16 !== 14) {
			words.push(0);
		}

		words.push(len >>> 29);
		words.push((len << 3) & 0x0ffffffff);

		for (x = 0; x < words.length; x += 16) {
			block = words.slice(x, x + 16);

			for (i = 0; i < 16; i++) {
				temp = block[i];
				block[i] = ((temp << 8) & 0xff00ff00) | ((temp >>> 8) & 0x00ff00ff);
			}

			for (i = 16; i < 80; i++) {
				block[i] =
					(rotateLeft(
						block[i - 3] ^ block[i - 8] ^ block[i - 14] ^ block[i - 16],
						1
					) <<
						1) |
					(rotateLeft(
						block[i - 3] ^ block[i - 8] ^ block[i - 14] ^ block[i - 16],
						31
					) >>>
						31);
			}

			let tempA = a;
			let tempB = b;
			let tempC = c;
			let tempD = d;
			let tempE = e;

			for (i = 0; i < 20; i++) {
				t = addUnsigned(
					addUnsigned(
						addUnsigned(addUnsigned(rotateLeft(a, 5), sha1Ch(b, c, d)), e),
						0x5a827999
					),
					block[i]
				);
				e = d;
				d = c;
				c = rotateLeft(b, 30);
				b = a;
				a = t;
			}

			for (i = 20; i < 40; i++) {
				t = addUnsigned(
					addUnsigned(
						addUnsigned(addUnsigned(rotateLeft(a, 5), sha1Parity(b, c, d)), e),
						0x6ed9eba1
					),
					block[i]
				);
				e = d;
				d = c;
				c = rotateLeft(b, 30);
				b = a;
				a = t;
			}

			for (i = 40; i < 60; i++) {
				t = addUnsigned(
					addUnsigned(
						addUnsigned(addUnsigned(rotateLeft(a, 5), sha1Maj(b, c, d)), e),
						0x8f1bbcdc
					),
					block[i]
				);
				e = d;
				d = c;
				c = rotateLeft(b, 30);
				b = a;
				a = t;
			}

			for (i = 60; i < 80; i++) {
				t = addUnsigned(
					addUnsigned(
						addUnsigned(addUnsigned(rotateLeft(a, 5), sha1Parity(b, c, d)), e),
						0xca62c1d6
					),
					block[i]
				);
				e = d;
				d = c;
				c = rotateLeft(b, 30);
				b = a;
				a = t;
			}

			a = addUnsigned(a, tempA);
			b = addUnsigned(b, tempB);
			c = addUnsigned(c, tempC);
			d = addUnsigned(d, tempD);
			e = addUnsigned(e, tempE);
		}

		const hash =
			hexString(a) + hexString(b) + hexString(c) + hexString(d) + hexString(e);

		return hash;
	};

	return sha1Transform(string);
};

const sha1Ch = (x, y, z) => {
	return (x & y) ^ (~x & z);
};

const sha1Parity = (x, y, z) => {
	return x ^ y ^ z;
};

const sha1Maj = (x, y, z) => {
	return (x & y) ^ (x & z) ^ (y & z);
};

// md5
const md5 = (string) => {
	const rotateLeft = (value, shift) => {
		return (value << shift) | (value >>> (32 - shift));
	};

	const convertToWordArray = (string) => {
		const words = [];
		for (let i = 0; i < string.length * 8; i += 8) {
			words[i >> 5] |= (string.charCodeAt(i / 8) & 255) << i % 32;
		}
		return words;
	};

	const addUnsigned = (x, y) => {
		const x4 = (x & 0x40000000) === 0x40000000;
		const y4 = (y & 0x40000000) === 0x40000000;
		const x8 = (x & 0x80000000) === 0x80000000;
		const y8 = (y & 0x80000000) === 0x80000000;
		const result = (x & 0x3fffffff) + (y & 0x3fffffff);

		if (x4 && y4) {
			return result ^ 0x80000000 ^ (x8 & y8 ? 0x80000000 : 0);
		}

		if (x4 || y4) {
			return result ^ (x8 ? 0x80000000 : 0) ^ (y8 ? 0x80000000 : 0);
		}

		return result;
	};

	const md5F = (x, y, z) => {
		return (x & y) | (~x & z);
	};

	const md5G = (x, y, z) => {
		return (x & z) | (y & ~z);
	};

	const md5H = (x, y, z) => {
		return x ^ y ^ z;
	};

	const md5I = (x, y, z) => {
		return y ^ (x | ~z);
	};

	const md5Transform = (input) => {
		const constants = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476];

		const functions = [md5F, md5G, md5H, md5I];
		const rotateAmounts = [
			[7, 12, 17, 22],
			[5, 9, 14, 20],
			[4, 11, 16, 23],
			[6, 10, 15, 21],
		];

		const blockSize = 16;
		const words = convertToWordArray(input);
		const blockCount = Math.ceil(words.length / blockSize);
		const paddedLength = blockCount * blockSize;

		words[paddedLength >> 5] |= 0x80 << paddedLength % 32;
		words[(((paddedLength + 64) >>> 9) << 4) + 14] = input.length * 8;

		const hash = constants.slice();

		for (let i = 0; i < blockCount; i++) {
			const block = words.slice(i * blockSize, (i + 1) * blockSize);
			let a = hash[0];
			let b = hash[1];
			let c = hash[2];
			let d = hash[3];
			for (let j = 0; j < 64; j++) {
				let f, g;
				if (j < 16) {
					f = md5F(b, c, d);
					g = j;
				} else if (j < 32) {
					f = md5G(b, c, d);
					g = (5 * j + 1) % 16;
				} else if (j < 48) {
					f = md5H(b, c, d);
					g = (3 * j + 5) % 16;
				} else {
					f = md5I(b, c, d);
					g = (7 * j) % 16;
				}

				const temp = d;
				d = c;
				c = b;
				b = addUnsigned(
					b,
					rotateLeft(
						addUnsigned(
							a,
							addUnsigned(f, addUnsigned(constants[j >> 4], block[g]))
						),
						rotateAmounts[j >> 4][j % 4]
					)
				);
				a = temp;
			}

			hash[0] = addUnsigned(hash[0], a);
			hash[1] = addUnsigned(hash[1], b);
			hash[2] = addUnsigned(hash[2], c);
			hash[3] = addUnsigned(hash[3], d);
		}

		const result = [];
		for (let i = 0; i < hash.length; i++) {
			const value = hash[i];
			const hexValue =
				((value >> 24) & 0xff).toString(16).padStart(2, "0") +
				((value >> 16) & 0xff).toString(16).padStart(2, "0") +
				((value >> 8) & 0xff).toString(16).padStart(2, "0") +
				(value & 0xff).toString(16).padStart(2, "0");
			result.push(hexValue);
		}

		return result.join("");
	};

	return md5Transform(string);
};

window.hashCommand = hashCommand;
