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
	let numStr = Math.abs(n) + '';
	const mul = n < 0 ? -1 : 1;
	numStr = reverseString(numStr);
	return parseInt(numStr) * mul;
}

function reverseIntAsNum(n) {
	let absNum = Math.abs(n);
	let res = 0;
	let mul = n < 0 ? -1 : 1;
	while (absNum > 0) {
		res = res * 10 + (absNum % 10);
		absNum = Math.floor(absNum / 10);
	}
	return res * mul;
}

function reverseInt(n) {
	return reverseIntAsNum(n);
}

module.exports = reverseInt;
