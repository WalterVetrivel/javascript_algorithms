// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramidBruteForce(n) {
	let level = '';
	for (let i = 1; i <= n; i++) {
		for (let j = 1; j <= n - i; j++) {
			level += ' ';
		}
		for (let j = 0; j < i * 2 - 1; j++) {
			level += '#';
		}
		for (let j = 1; j <= n - i; j++) {
			level += ' ';
		}
		console.log(level);
		level = '';
	}
}

function pyramidLevel(level, size) {
	return (
		' '.repeat(size - level) +
		'#'.repeat(2 * level - 1) +
		' '.repeat(size - level)
	);
}

function pyramidRepeat(n) {
	for (let i = 1; i <= n; i++) {
		console.log(pyramidLevel(i, n));
	}
}

function pyramid(n) {
	// pyramidBruteForce(n);
	pyramidRepeat(n);
}

module.exports = pyramid;
