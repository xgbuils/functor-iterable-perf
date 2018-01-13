const suiteCollection = require('../../suiteCollectionFactory')
const suite = require('../../suiteFactory')
const packages = require('../../packages')

const {
    SMALL_SIZE,
    MEDIUM_SIZE,
    BIG_SIZE
} = require('../../setup/values')

module.exports = function buildIterableSuites (name, buildIterable, tests) {
    return suiteCollection({
        name,
        packages,
        setups: {
            cb: e => 2 * e
        },
        build: buildIterable,
        suites: [
            suite({
                name: 'small size (${length} items)',
                setups: {
                    length: SMALL_SIZE
                },
                tests
            }),
            suite({
                name: 'medium size (${length} items)',
                setups: {
                    length: MEDIUM_SIZE
                },
                tests
            }),
            suite({
                name: 'big size (${length} items)',
                setups: {
                    length: BIG_SIZE
                },
                tests
            })
        ]
    })
}
