const log = require('./log')

module.exports = function suiteCollectionFactory (params) {
    return function (options = {indentation: 0}) {
        return log(options.indentation, `${params.name}\n`).then(() => {
            return params.suites.reduce((prom, suite) => {
                const setups = Object.assign({}, params.setups, options.setups)
                const opts = Object.assign({}, params, options, {
                    indentation: options.indentation + 4,
                    setups
                })
                return prom.then(() => suite(opts))
            }, Promise.resolve())
        })
    }
}
