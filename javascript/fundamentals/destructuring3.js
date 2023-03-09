//Destructuring an object using in a function

function rand({min = 0, max = 1000}){
    let value = Math.random() * (max - min) + min
    return Math.floor(value)
}

const obj = {max: 50, min: 10}
console.log(rand(obj)) //Returns a value beetween the values of the object
console.log(rand({ min: 900})) //Returns a value beetween the min value of the object and the max value default 1000
console.log(rand({})) //Returns a value beetween the min and max value default defined by the destructuring on line 3