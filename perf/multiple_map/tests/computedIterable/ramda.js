const ramdaMultipleMaps = require('../ramdaMultipleMaps')

module.exports = dep => {
    const {into} = dep
    return {
        fn: ramdaMultipleMaps(dep),
        toArray (obj) {
            return into([], obj.transducer, obj.iterable)
        }
    }
}
