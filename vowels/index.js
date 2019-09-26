// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function getVowelsRegex(str) {
	const vowelRegex = /[aeiou]/g;
	return str.toLowerCase().match(vowelRegex);
}

function vowelsIterative(str) {
	let vowelCount = 0;
	let vowels = ['a', 'e', 'i', 'o', 'u'];

	for (let char of str.toLowerCase().replace(/[^a-z]/g, '')) {
		if (vowels.indexOf(char) >= 0) vowelCount++;
	}

	return vowelCount;
}

function vowels(str) {
	/* if (str) {
		const vowels = getVowelsRegex(str);
		if (vowels) return vowels.length;
	}
	return 0; */
	return vowelsIterative(str);
}

module.exports = vowels;
