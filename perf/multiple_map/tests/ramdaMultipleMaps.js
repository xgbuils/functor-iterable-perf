module.exports = dep => {
    const {map, compose} = dep
    return function () {
        const n = this.numberOfMaps
        const double = this.cb
        const mapDouble = map(double)
        const maps = Array(n).fill(mapDouble)
        return {
            transducer: compose(...maps),
            iterable: this.iterable
        }
    }
}
