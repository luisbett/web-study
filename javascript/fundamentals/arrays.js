const values = [7.7, 8.9, 6.3, 9.2]
console.log(values[0], values[3])

//It returns undefined
console.log(values[4])

values[4] = 10
console.log(values)

//It returns the length of the array
console.log(values.length)

//It add new values to the array
values.push({id: 3}, false, null, 'test')
console.log(values)

//It returns the last value of the array and deletes it from the array
console.log(values.pop())

//It deletes a value from a position of the array
delete values[0]
console.log(values)

//An array is an object
console.log(typeof values)