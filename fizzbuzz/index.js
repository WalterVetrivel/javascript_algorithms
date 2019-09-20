// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function isMultiple(n, div) {
	return n % div === 0;
}

function printStatement(i) {
	return isMultiple(i, 3 * 5)
		? 'fizzbuzz'
		: isMultiple(i, 3)
		? 'fizz'
		: isMultiple(i, 5)
		? 'buzz'
		: i;
}

function fizzBuzzTernary(n) {
	for (let i = 1; i <= n; i++) {
		console.log(printStatement(i));
	}
}

function fizzBuzzIf(n) {
	for (let i = 1; i <= n; i++) {
		if (isMultiple(i, 3 * 5)) console.log('fizzbuzz');
		else if (isMultiple(i, 3)) console.log('fizz');
		else if (isMultiple(i, 5)) console.log('buzz');
		else console.log(i);
	}
}

function fizzBuzzSwitch(n) {
	for (let i = 1; i <= n; i++) {
		switch (true) {
			case isMultiple(i, 3 * 5):
				console.log('fizzbuzz');
				break;
			case isMultiple(i, 3):
				console.log('fizz');
				break;
			case isMultiple(i, 5):
				console.log('buzz');
				break;
			default:
				console.log(i);
				break;
		}
	}
}

function fizzBuzz(n) {
	// fizzBuzzSwitch(n);
	// fizzBuzzIf(n);
	fizzBuzzTernary(n);
}

module.exports = fizzBuzz;
