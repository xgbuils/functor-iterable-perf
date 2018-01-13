module.exports = dep => {
    const {List} = dep
    return {
        fn () {
            const iterable = new List(this.iterable)
                .map(this.cb)
            return iterable
        },
        toArray (iterable) {
            return [...iterable]
        }
    }
}
