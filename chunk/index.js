// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunkSlice(array, size) {
	let chunkCount = Math.ceil(array.length / size);
	const result = [];
	let startIndex = 0;

	while (chunkCount > 0) {
		result.push(array.slice(startIndex, startIndex + size));
		startIndex += size;
		chunkCount--;
	}

	return result;
}

function chunkArray(array, size) {
	const chunked = [];

	for (let el of array) {
		let lastChunk = chunked[chunked.length - 1];

		if (!lastChunk || lastChunk.length === size) {
			chunked.push([el]);
		} else {
			lastChunk.push(el);
		}
	}

	return chunked;
}

function chunk(array, size) {
	// return chunkSlice(array, size);
	return chunkArray(array, size);
}

module.exports = chunk;
