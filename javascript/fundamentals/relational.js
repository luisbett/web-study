//Testing relational operators

console.log('Example 1:', '1' == 1)
console.log('Example 2:', '1' === 1)
console.log('Example 3:', '3' != 3)
console.log('Example 4:', '1' !== 3)

console.log('Example 5:', 3 < 2)
console.log('Example 6:', 3 > 2)
console.log('Example 7:', 3 <= 2)
console.log('Example 8:', 3 >= 2)

let date1 = new Date(0)
let date2 = new Date(0)
console.log('Example 9:', date1 == date2)
console.log('Example 10:', date1 === date2)
console.log('Example 11:', date1.getTime() === date2.getTime())

console.log('Example 12:', undefined == null)
console.log('Example 13:', undefined === null)