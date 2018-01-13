const suiteCollection = require('../../suiteCollectionFactory')
const suite = require('../../suiteFactory')
const packages = require('../../packages')

const {
    FEW_MAPS,
    ENOUGH_MAPS,
    TOO_MUCH_MAPS,
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
            suiteCollection({
                name: 'iterable size',
                setups: {
                    numberOfMaps: ENOUGH_MAPS
                },
                suites: [
                    suite({
                        name: 'small (${length} items)',
                        setups: {
                            length: SMALL_SIZE
                        },
                        tests
                    }),
                    suite({
                        name: 'medium (${length} items)',
                        setups: {
                            length: MEDIUM_SIZE
                        },
                        tests
                    }),
                    suite({
                        name: 'big (${length} items)',
                        setups: {
                            length: BIG_SIZE
                        },
                        tests
                    })
                ]
            }),
            suiteCollection({
                name: 'number of maps',
                setups: {
                    length: MEDIUM_SIZE
                },
                suites: [
                    suite({
                        name: 'few maps (x${numberOfMaps})',
                        setups: {
                            numberOfMaps: FEW_MAPS
                        },
                        tests
                    }),
                    suite({
                        name: 'enough maps (x${numberOfMaps})',
                        setups: {
                            numberOfMaps: ENOUGH_MAPS
                        },
                        tests
                    }),
                    suite({
                        name: 'too much maps (x${numberOfMaps})',
                        setups: {
                            numberOfMaps: TOO_MUCH_MAPS
                        },
                        tests
                    })
                ]
            }),
            suite({
                testType: 'onlyBuild',
                name: 'build without processing (${length} items & ${numberOfMaps} maps)',
                setups: {
                    length: BIG_SIZE,
                    numberOfMaps: TOO_MUCH_MAPS
                },
                tests
            })
        ]
    })
}
