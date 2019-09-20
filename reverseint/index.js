// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseString(str) {
	return str.split('').reduce((res, c) => c + res, '');
}

function reverseIntAsString(n) {
	let numStr = Math.abs(n).toString();
	numStr = reverseString(numStr);
	return parseInt(numStr) * Math.sign(n);
}

function reverseIntAsNum(n) {
	let absNum = Math.abs(n);
	let res = 0;
	while (absNum > 0) {
		res = res * 10 + (absNum % 10);
		absNum = Math.floor(absNum / 10);
	}
	return res * Math.sign(n);
}

function reverseInt(n) {
	return reverseIntAsNum(n);
}

module.exports = reverseInt;
