//This repeating loop using while has the same structure of a repeating loop using for
let count = 1

while (count <= 10) {
    console.log(`counter is ${count}`)
    count++
}

for (let i = 1; i <= 10; i++) {
    console.log(`i = ${i}`)
}

//I can go through an array using a repeating loop for
const grades = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i = 0; i < grades.length; i++) {
    console.log(`Grade ${i} = ${grades[i]}`)
}