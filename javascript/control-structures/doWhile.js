function getAleatoryNumberBetween(min, max) {
    const value = Math.random() * (max - min) + min
    return Math.floor(value)
}

let option = 0

do {
    option = getAleatoryNumberBetween(-1, 10)
    console.log(`The option choosed was ${option}`)
} while (option != -1)

console.log('The end')