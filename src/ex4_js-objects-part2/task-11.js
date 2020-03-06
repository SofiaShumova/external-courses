function getRepeatEachChar(string) {
	while (string.length > 0) {
		let re = new RegExp(string[0], 'gm')
		console.log(`Символ ${string[0]} повторяется ${string.match(re).length} раз`)
		string = string.replace(re, '')
	}
}
module.exports = getRepeatEachChar;