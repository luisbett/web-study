//Storing a function in a variable
const printSum = function (value1, value2) {
    console.log(value1 + value2)
}

printSum(2, 3)

//Storing an arrow function in a variable
const sum = (value1, value2) => {
    return value1 + value2
}

console.log(sum(2, 2))

//Implicit return
const subtraction = (value1, value2) => value1 - value2

console.log(subtraction(10, 7))