const sum = function (x, y) {
    return x + y
}

const printResult = function (a, b, operacao = sum) {
    console.log(operacao(a, b))
}

printResult(3, 4)
printResult(3, 4, sum)
printResult(3, 4, function (x, y) {
    return x - y
})
printResult(3, 4, (x, y) => x * y)

const person = {
    falar: function () {
        console.log('Hello!')
    }
}

person.falar()