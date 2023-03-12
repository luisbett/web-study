function getAleatoryNumberBetween(min, max) {
    const value = Math.random() * (max - min) + min
    return Math.floor(value)
}

let option = 0

while (option != -1) {
    option = getAleatoryNumberBetween(-1, 10)
    console.log(`The option choosed was ${option}`)
}

console.log('The end')