module.exports = Iterable => {
    return {
        fn () {
            return new Iterable(this.iterable).map(this.cb)
        },
        toArray (iterable) {
            return [...iterable]
        }
    }
}
