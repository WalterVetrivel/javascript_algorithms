// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalizeBruteForce(str) {
	let result = str[0].toUpperCase();

	for (let i = 1; i < str.length; i++) {
		result += str[i - 1] === ' ' ? str[i].toUpperCase() : str[i];
	}

	return result;
}

function capitalizeBruteForceReduce(str) {
	return str
		.split('')
		.reduce(
			(result, c, i) =>
				i === 0 || result.endsWith(' ') ? result + c.toUpperCase() : result + c,
			''
		);
}

function capitalizeRegExp(str) {
	return str.replace(/^[a-z]|\s[a-z]/g, val => val.toUpperCase());
}

function capitalizeSplitMap(str) {
	return str
		.split(' ')
		.map(word => word[0].toUpperCase() + word.slice(1))
		.join(' ');
}

function capitalize(str) {
	// return capitalizeSplitMap(str);
	return capitalizeRegExp(str);
	// return capitalizeBruteForce(str);
	// return capitalizeBruteForceReduce(str);
}

module.exports = capitalize;
