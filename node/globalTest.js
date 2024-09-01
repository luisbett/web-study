require('./global')

console.log(myOwnObject.name)
console.log(myOwnObject.sayMyName())

//It is not good to change values in the global object
//If needed use freeze method when defining myOwnObject
myOwnObject.name = 'John'
console.log(myOwnObject.sayMyName())