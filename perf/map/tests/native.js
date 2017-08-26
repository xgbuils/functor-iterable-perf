const traverse = require('../../traverse_iterable')

module.exports = {
    name: 'native',
    fn () {
        const iterable = this.iterable.map(this.double)
        traverse(iterable)
    }
}
