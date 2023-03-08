let isActive = false
console.log(isActive)

isActive = true
console.log(isActive)

//I can use types different from boolean to make boolean validations, like numbers
isActive = 1
console.log(!!isActive)

//Values that are true in JavaScript
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'text')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isActive = true))

//Values that are false in JavaScript
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isActive = false))

//I can check if a sting variable has some value using it in a boolean comparision
let devName = 'Luis'
//let devName = ''
console.log(devName || 'Is emtpy!')