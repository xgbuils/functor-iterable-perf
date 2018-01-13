const suiteCollection = require('../../suiteCollectionFactory')
const requireDir = require('require-dir')

const buildIterableSuites = require('./buildIterableSuites')
const buildArray = require('../../setup/buildArray')
const buildComputedIterable = require('../../setup/buildComputedIterable')
const arrayTests = requireDir('../tests/array/')
const computedIterableTests = requireDir('../tests/computedIterable/')

const arraySuite = buildIterableSuites(
    'array',
    buildArray,
    arrayTests
)
const computedIterableSuite = buildIterableSuites(
    'computed iterable',
    buildComputedIterable,
    computedIterableTests
)

module.exports = suiteCollection({
    name: 'multiple maps',
    suites: [
        arraySuite,
        computedIterableSuite
    ]
})
