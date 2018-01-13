module.exports = dep => {
    const {map} = dep
    return {
        fn () {
            return map(this.cb, this.iterable)
        },
        toArray (iterable) {
            return [...iterable]
        }
    }
}
