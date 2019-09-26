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
	for (let row = 1; row <= n; row++) {
		for (let column = 1; column <= n - row; column++) {
			level += ' ';
		}
		for (let column = 0; column < row * 2 - 1; column++) {
			level += '#';
		}
		for (let column = 1; column <= n - row; column++) {
			level += ' ';
		}
		console.log(level);
		level = '';
	}
}

function pyramidBruteForceImproved(n) {
	let level = '';
	for (let row = 1; row <= n; row++) {
		for (let column = 1; column <= n * 2 - 1; column++) {
			if (column <= n - row || column > n - row + (2 * row - 1)) {
				level += ' ';
			} else {
				level += '#';
			}
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
	for (let row = 1; row <= n; row++) {
		console.log(pyramidLevel(row, n));
	}
}

function pyramid(n) {
	// pyramidBruteForce(n);
	pyramidBruteForceImproved(n);
	// pyramidRepeat(n);
}

module.exports = pyramid;
