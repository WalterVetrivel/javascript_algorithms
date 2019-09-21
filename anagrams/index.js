// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function generateCharacterMap(str) {
	/* return str.split('').reduce((charMap, char) => {
		charMap[char] = charMap[char] + 1 || 1;
		return charMap;
	}, {}); */
	let map = {};

	for (let c of str) {
		map[c] = map[c] + 1 || 1;
	}

	return map;
}

function sortString(str) {
	return str
		.split('')
		.sort()
		.join('');
}

function removeSpecialCharacters(str) {
	return str.replace(/[^\w]/g, '');
}

function compareMaps(mapA, mapB) {
	if (Object.keys(mapA).length !== Object.keys(mapB).length) return false;

	for (let key in mapA) {
		if (!mapA.hasOwnProperty(key) || mapB[key] !== mapA[key]) return false;
	}

	return true;
}

function anagrams(stringA, stringB) {
	/* return (
		sortString(removeSpecialCharacters(stringA).toLowerCase()) ===
		sortString(removeSpecialCharacters(stringB).toLowerCase())
	); */
	const mapA = generateCharacterMap(
		removeSpecialCharacters(stringA).toLowerCase()
	);

	const mapB = generateCharacterMap(
		removeSpecialCharacters(stringB).toLowerCase()
	);

	return compareMaps(mapA, mapB);
}

module.exports = anagrams;
