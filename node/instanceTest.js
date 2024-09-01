const counterA = require('./instanceSingle')
const counterB = require('./instanceSingle')

const counterC = require('./instanceNew')()
const counterD = require('./instanceNew')()

//Node creates caching, so I have the same instance
counterA.inc()
counterA.inc()
console.log(counterA.value, counterB.value)

//Using a factory function I create new instances
counterC.inc()
counterC.inc()
console.log(counterC.value, counterD.value)