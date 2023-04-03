function sum() {
    let sum = 0
    for (i in arguments) {
        sum += arguments[i]
    }
    return sum
}

console.log(sum())
console.log(sum(1, 3))
console.log(sum(2, 4, 6))
console.log(sum(1.1, 2.2, 3.3))