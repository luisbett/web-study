//Destructuring an array using in a function

function rand([min = 0, max = 1000]){
    if (min > max) [min, max] = [max, min]
    let value = Math.random() * (max - min) + min
    return Math.floor(value)
}

console.log(rand([980, 930]))
console.log(rand([990]))
console.log(rand([, 20]))
console.log(rand([]))