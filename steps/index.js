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

function generateStepPad(stepChar, lineNum, length) {
	return stepChar.repeat(lineNum).padEnd(length);
}

function stepsIterative(n) {
	for (let i = 1; i <= n; i++) {
		step = '';
		for (let j = 1; j <= n; j++) {
			if (j <= i) {
				step += '#';
			} else {
				step += ' ';
			}
		}
		console.log(step);
	}
}

function stepsRecursive(length, stepChar = '#', lineNum = 1) {
	if (lineNum === length) {
		console.log(stepChar.repeat(length));
		return;
	}

	console.log(stepChar.repeat(lineNum).padEnd(length));

	stepsRecursive(length, stepChar, lineNum + 1);
}

function stepsRecursiveAlt(n, row = 0, step = '') {
	if (row === n) return;

	if (n === step.length) {
		console.log(step);
		return stepsRecursiveAlt(n, row + 1);
	}

	if (step.length <= row) {
		step += '#';
	} else {
		step += ' ';
	}

	return stepsRecursiveAlt(n, row, step);
}

function steps(n) {
	for (let i = 1; i <= n; i++) {
		// console.log(generateStep('#', i, n));
		// console.log(generateStepPad('#', i, n));
	}
	// stepsIterative(n);
	// stepsRecursive(n);
	stepsRecursiveAlt(n);
}

module.exports = steps;
