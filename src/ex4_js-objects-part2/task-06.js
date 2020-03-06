function toUpperEachWord(string) {
	return (string.replace(/\b[a-z]\w*\b/gm, function(x) {
		return x[0].toUpperCase() + x.slice(1, x.lenght)
	}))
}
module.exports = toUpperEachWord