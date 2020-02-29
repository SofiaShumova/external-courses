function addProperty(string, obj) {
    for (let key in obj) {
        if (key === string)
            return obj;
    }
    obj[string]= "new"
    return obj;
}
module.exports = addProperty