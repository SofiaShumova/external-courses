function outputArray(array) {
	for (let i in array) {
		console.log(array[i]);
	}
	console.log('Количество элементов = ' + array.length);
	return undefined;
}
module.exports = outputArray