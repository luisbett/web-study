//Arrow function
const sum = (a, b) => a + b
console.log(sum(3, 5))

//Arrow function (this)
const test1 = () => console.log(this === module.exports)
const test2 = test1.bind({}) //Even if I force the function to point to another object, I can't change the context
test1()
test2()

//Default parameters
function log(text = 'Node') {
    console.log(text)
}

log()
log('React')

//Rest operator
function total(...numbers) {
    let total = 0
    numbers.forEach(n => total += n)
    return total
}

console.log(total(2, 3, 3))