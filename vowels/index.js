// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function getVowelsRegex(str) {
	// i in regex for case insensitive
	const vowelRegex = /[aeiou]/gi;
	return str.match(vowelRegex);
}

function isVowel(c) {
	const vowelsArray = ['a', 'e', 'i', 'o', 'u'];
	return vowelsArray.includes(c);
}

function vowelsIterative(str) {
	let vowelCount = 0;

	for (let char of str.toLowerCase().replace(/[^a-z]/g, '')) {
		if (isVowel(char)) vowelCount++;
	}

	return vowelCount;
}

function vowels(str = '') {
	const vowels = getVowelsRegex(str);
	return vowels ? vowels.length : 0;
	// return vowelsIterative(str);
}

module.exports = vowels;
