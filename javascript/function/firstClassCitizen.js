//Function in JS is First-Class Citizen (Object)
//High-order function

//I can literally create a function
function fun1() { }

//I can store a function in a variable
const fun2 = function() { }

//I can store a function in an array
const array = [function(a, b) { return a + b }, fun1, fun2 ]
console.log(array[0](3, 5))

//I can store a function in an attribute of an object
const obj = {}
obj.toSay = function() { return 'Heyyy' }
console.log(obj.toSay())

//I can pass a function as a parameter
function run(fun) {
    fun()
}

run(function () { console.log('Executing...') })

//A function can return/contain a function
function sum(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

sum(2, 3)(4)
const total = sum(2, 3)
total(4)