const devName = "Luis"
const concat = "Hello " + devName + "!"

console.log(concat)

//Using template string
const template = `
    Hello
    ${devName}!`
console.log(template)

//Expressions
console.log(`1 + 1 = ${1 + 1}`)

//Functions
const up = text => text.toUpperCase()
console.log(`Hey... ${up("take care")}!`)