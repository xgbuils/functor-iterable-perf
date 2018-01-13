module.exports = dep => {
    const {map, into} = dep
    return {
        fn () {
            return into([], map(this.cb), this.iterable)
        },
        toArray (iterable) {
            return iterable
        }
    }
}
