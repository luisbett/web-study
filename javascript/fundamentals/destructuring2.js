//Destructuring using an array

const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0 ] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

const [, [, grade]] = [[2, 7, 9], [10, 8, 5] ]
console.log(grade)