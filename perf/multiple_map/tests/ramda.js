const pkgVersion = 'ramda@0.24.1'
const {map, compose} = require('../../packages')[pkgVersion]
const traverse = require('../../traverse_iterable')

module.exports = {
    name: pkgVersion,
    fn () {
        const n = this.numberOfMaps
        const {double} = this
        const mapDouble = map(double)
        const maps = Array(n).fill(mapDouble)
        const iterable = compose(...maps)(this.iterable)
        traverse(iterable)
    }
}
