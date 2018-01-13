module.exports = () => {
    return {
        fn () {
            return this.iterable.map(this.cb)
        },
        toArray (iterable) {
            return iterable
        }
    }
}
