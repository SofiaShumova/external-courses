function outputArray(array) {
	for (let i = 0; i < array.length; i++) {
		console.log(array[i]);
	}
	console.log('Количество элементов = ' + array.length);
	return undefined;
}
module.exports = outputArray