const percent1 = 1.0
const percent2 = Number("2.0")

console.log(percent1, percent2)
console.log(Number.isInteger(percent1))
console.log(Number.isInteger(percent2))

const exam1 = 9.871
const exam2 = 6.871

const total = exam1 * percent1 + exam2 * percent2
const finalGrade = total / (percent1 + percent2)

console.log(finalGrade.toFixed(2)) //With only two decimal places
console.log(finalGrade.toString()) //String value
console.log(finalGrade.toString(2)) //Binary value

console.log(typeof Number) //It is a function