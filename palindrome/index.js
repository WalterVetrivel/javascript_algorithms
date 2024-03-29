// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function reverseString(str) {
	return str.split('').reduce((res, c) => c + res, '');
}

function palindromeLoop(str) {
	let i = 0,
		j = str.length - 1;
	while (i < j) if (str[i++] !== str[j--]) return false;
	return true;
}

function palindromeEvery(str) {
	return str.split('').every((c, i) => c === str[str.length - i - 1]);
}

function palindrome(str) {
	// return str === reverseString(str);
	return palindromeLoop(str);
	// return palindromeEvery(str);
}

module.exports = palindrome;
