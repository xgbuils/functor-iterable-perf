module.exports = dep => {
    const {List} = dep
    return {
        fn () {
            return new List(this.iterable).map(this.cb)
        },
        toArray (iterable) {
            return [...iterable]
        }
    }
}
