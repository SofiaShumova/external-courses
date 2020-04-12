function getPropertyInPrototype(property, obj) {
	if (Object.getPrototypeOf(obj).hasOwnProperty(property)) {
		return Object.getPrototypeOf(obj)[property]
	}
	return undefined
}
module.exports = getPropertyInPrototype