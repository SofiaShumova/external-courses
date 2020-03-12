function checkType(value) {
	if (typeof(value) === "string" || typeof(value) === "number") {
		if (typeof(value) === "number" && isNaN(value)) {
			return undefined;
		}
		return typeof(value);
	}
	return undefined;
}
module.exports = checkType