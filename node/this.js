//False
console.log(this === global)
console.log(this === module)

//True
console.log(this === exports)
console.log(this === module.exports)

//Inside a normal function, this points to global
function logThisFunction() {
    console.log('Inside a normal function...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
}

logThisFunction()

//Inside an arrow function, this points to module.exports
const logThisArrowFunction = () => {
    console.log('Inside an arrow function...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
}

logThisArrowFunction()