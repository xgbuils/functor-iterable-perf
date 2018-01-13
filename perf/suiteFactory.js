const log = require('./log')
const template = require('./template')
const Benchmarck = require('benchmark')

module.exports = function (params) {
    return function (options = {indentation: 0}) {
        const setups = Object.assign({}, params.setups, options.setups)
        const title = template(params.name, setups)
        return log(options.indentation, `${title}\n`, '- ')
            .then(() => suiteFactory(Object.assign({}, params, options, {
                setups
            })))
    }
}

const testTypes = {
    onlyBuild: test => function (context) {
        return test.fn.call(context)
    },
    buildAndProcess: test => function (context) {
        return test.toArray(test.fn.call(context))
    }
}

function suiteFactory (params) {
    return new Promise(resolve => {
        const context = Object.assign({}, params.setups)
        const {testType = 'buildAndProcess'} = params
        params.build.call(context)
        params.packages.reduce((suite, {package, instances}) => {
            const test = params.tests[package]
            if (test) {
                instances.forEach(({version, instance}) => {
                    const pkgVersion = package + (version ? `@${version}` : '')
                    const packageTest = testTypes[testType](test(instance))
                    // eslint-disable-next-line no-param-reassign
                    suite = suite.add(pkgVersion, () => {
                        return packageTest(context)
                    })
                })
            }
            return suite
        }, new Benchmarck.Suite())
            .on('cycle', x => log(params.indentation + 4, `${String(x.target)}\n`, '- '))
            .on('complete', function () {
                log(params.indentation + 4, `Fastest is ${this.filter('fastest').map('name')}\n`)
                resolve()
            })
            // eslint-disable-next-line no-console
            .on('error', err => console.log(err))
            .run({async: true})
    })
}
