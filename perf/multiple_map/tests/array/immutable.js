const IterableConstructor = require('../iterable-constructor')

module.exports = dep => {
    const {List} = dep
    return IterableConstructor(List)
}
