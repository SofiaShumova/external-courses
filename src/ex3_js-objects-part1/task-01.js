function createObject() {
    const person = {
        name: 'Sonya',
        age: 20,
        town: 'Ryazan',
        married: false
    }
    delete person.married
}
module.exports = createObject