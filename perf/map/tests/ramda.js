const traverse = require('../../traverse_iterable')

const pkgVersion = 'ramda@0.24.1'
const {map} = require('../../packages')[pkgVersion]

module.exports = {
    name: pkgVersion,
    fn () {
        const iterable = map(this.double, this.iterable)
        traverse(iterable)
    }
}
