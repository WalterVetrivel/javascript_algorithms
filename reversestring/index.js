// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverseSplit(str) {
	return str
		.split('')
		.reverse()
		.join('');
}

function reverseLoop(str) {
	var result = '';
	for (var i = str.length - 1; i >= 0; i--) {
		result += str[i];
	}
	return result;
}

function reverseLoopNew(str) {
	var result = '';
	for (var letter of str) {
		result = letter + result;
	}
	return result;
}

function reverseReduce(str) {
	return str.split('').reduce((result, c) => c + result, '');
}

function reverse(str) {
	return reverseReduce(str);
}

module.exports = reverse;
