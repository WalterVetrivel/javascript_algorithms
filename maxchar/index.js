// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxCharBasic(str) {
	const sorted = str.split('').sort();

	let max = 1,
		count = 1,
		char = sorted[0],
		maxChar = char;

	for (let i = 1; i < sorted.length - 1; i++) {
		if (sorted[i] === char) {
			count++;
		} else {
			if (count >= max) {
				maxChar = char;
				max = count;
			}

			char = sorted[i];
			count = 1;
		}
	}

	return maxChar;
}

function maxCharObject(str) {
	let charCount = {};

	for (c of str) {
		charCount[c] = charCount[c] + 1 || 1;
	}

	const chars = Object.keys(charCount);
	return chars.reduce(
		(max, key) => (charCount[key] > charCount[max] ? key : max),
		chars[0]
	);
}

function maxCharAlt(str) {
	let obj = {};
	let mostCommon = {
		counter: 0,
		value: ''
	};

	for (let character of str) {
		obj[character] = character in obj ? obj[character] + 1 : 0;

		if (mostCommon.value === '' || obj[character] > mostCommon.counter) {
			mostCommon.value = character;
			mostCommon.counter = obj[character];
		}
	}
	return mostCommon.value;
}

function maxChar(str) {
	// return maxCharBasic(str);
	return maxCharObject(str);
}

module.exports = maxChar;
