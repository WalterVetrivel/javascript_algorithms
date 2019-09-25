// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function generateStep(stepChar, lineNum, length) {
	return stepChar.repeat(lineNum) + ' '.repeat(length - lineNum);
}

function steps(n) {
	for (let i = 1; i <= n; i++) {
		console.log(generateStep('#', i, n));
	}
}

module.exports = steps;
