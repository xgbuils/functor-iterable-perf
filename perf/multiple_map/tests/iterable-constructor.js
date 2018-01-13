module.exports = Iterable => {
    return {
        fn () {
            const n = this.numberOfMaps
            const double = this.cb
            let iterable = new Iterable(this.iterable)
            for (let i = 0; i < n; ++i) {
                iterable = iterable.map(double)
            }
            return iterable
        },
        toArray (iterable) {
            return [...iterable]
        }
    }
}
