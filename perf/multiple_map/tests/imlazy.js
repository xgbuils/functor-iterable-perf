module.exports = dep => {
    const {map} = dep
    return {
        fn () {
            const n = this.numberOfMaps
            const mapDouble = map(this.cb)
            let {iterable} = this
            for (let i = 0; i < n; ++i) {
                iterable = mapDouble(iterable)
            }
            return iterable
        },
        toArray (iterable) {
            return [...iterable]
        }
    }
}
