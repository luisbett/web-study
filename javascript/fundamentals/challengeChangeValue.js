/*
    You have to change the value between the variable a and b
*/

let a = 7
let b = 94
let aux

//Save the value of a in the auxiliar variable
aux = a

//Change the values between both variables
a = b
b = aux

//Or I can use the expression below that give me the same result
//[ a, b ] = [ b, a ]

console.log(a)
console.log(b)