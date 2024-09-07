//Spread with object
const employee = { name: 'Luis', salary: 15000.00 }
const clone = { active: true, ...employee }

console.log(clone)

//Spread with array
const groupA = [ 'John', 'Luke', 'Mathew' ]
const groupB = [ 'James', 'Marc', ...groupA ]
const groupC = [ 'James', ...groupA, 'Marc' ]

console.log(groupB)
console.log(groupC)