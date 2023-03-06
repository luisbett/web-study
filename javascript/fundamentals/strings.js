const uni = 'Cambridge'

console.log(uni.charAt(3))
console.log(uni.charAt(10)) //It returns a null value
console.log(uni.charCodeAt(3)) //It returns the code of ASCII table
console.log(uni.indexOf('d')) //It returns the position of letter 'd' in the variable

console.log(uni.substring(3)) //It returns the string starting at the position 3
console.log(uni.substring(0, 4)) //It returns the string between the position 0 and 3

console.log('University of '.concat(uni)) //It permits to concatenate strings without using the symbol +

console.log(uni.replace('b', 'w')) //It replaces a letter in the string for another one

console.log("Luis,Damien,Scott".split(",")) //It makes the string an array