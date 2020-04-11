function insertSubstring(string, substring, pos) {
	let i = -1
	
	return string.replace(/(\s|$)/gm, function(x) {
		i++
		if (i === pos) {
			return ' ' + substring + ' '
		}
		return x
	})
}
module.exports = insertSubstring