function reduce(array, callback, initialValue) {
	let start;
	if (initialValue) {
		start = 0
	} else {
		start = 1;
		initialValue = array[0]
	}
	for (let i = start; i < array.length; i++) {
		initialValue = callback(initialValue, array[i], i, array)
	}
	return initialValue
}
module.exports = reduce