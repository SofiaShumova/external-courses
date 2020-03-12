function checkType(value) {
	if ((typeof(value) !== "string" && typeof(value) !== "number") || Number.isNaN(value)) {
		return undefined;
	}
	return typeof(value);
}
module.exports = checkType