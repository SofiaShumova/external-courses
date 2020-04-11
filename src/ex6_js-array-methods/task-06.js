function reduce(array, callback, initialValue = array[0]) {
	let start;

	if (arguments.length > 2) {
		start = 0
	} else {
		start = 1
	}

	for (let i = start; i < array.length; i++) {
		initialValue = callback(initialValue, array[i], i, array)
	}
	
	return initialValue
}
module.exports = reduce