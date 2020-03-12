function checkType(value) {
	if ((typeof(value) !== "string" && typeof(value) !== "number") || (typeof(value) === "number" && isNaN(value))) {
		return undefined;
	}
	return typeof(value);
}
module.exports = checkType