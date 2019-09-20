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

	for (let i = 1; i < sorted.length - 2; i++) {
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
	let maxChar = str[0];

	for (c of str) {
		if (charCount.hasOwnProperty(c)) {
			charCount[c]++;
		} else {
			charCount[c] = 0;
		}
	}

	Object.keys(charCount).reduce((count, key) => {
		if (charCount[key] > count) {
			maxChar = key;
			return charCount[key];
		}
		return count;
	}, 1);

	return maxChar;
}

function maxChar(str) {
	// return maxCharBasic(str);
	return maxCharObject(str);
}

module.exports = maxChar;
