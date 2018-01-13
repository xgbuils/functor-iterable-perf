const ramdaMultipleMaps = require('../ramdaMultipleMaps')

module.exports = dep => {
    return {
        fn: ramdaMultipleMaps(dep),
        toArray (obj) {
            return obj.transducer(obj.iterable)
        }
    }
}
