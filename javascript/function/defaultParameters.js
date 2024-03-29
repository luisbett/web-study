//Strategies to generate a dafault value in a function

//Strategy 1
function sum1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

//In this case I have problems when using the value 0 because 0 is false in JS
console.log(sum1(), sum1(3), sum1(1, 2, 3), sum1(0, 0, 0))

//Strategy 2, 3 and 4
function sum2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}

//In this case using 0 as a paremter it works
console.log(sum2(), sum2(3), sum2(1, 2, 3), sum2(0, 0, 0))

//Latest strategy according to ES2015
function sum3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(sum3(), sum3(3), sum3(1, 2, 3), sum3(0, 0, 0))