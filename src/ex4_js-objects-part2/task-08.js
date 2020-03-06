function toLowerCamelCase(string) {
	string = string.toLowerCase()
	return (string.replace(/\s\w/gm, function(x) {
		return x.trim().toUpperCase()
	}))
}
module.exports = toLowerCamelCase