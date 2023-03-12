//For in using with an array
const grades = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in grades) {
    console.log(i, grades[i])
}

//For in using with an object
const person = {
    name: 'Luis',
    surname: 'Bett',
    age: 25,
    weight: 85
}

for (let i in person) {
    console.log(`${i} = ${person[i]}`)
}