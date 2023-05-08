function bhaskara(a, b, c) {

    let result1 = 1
    let result2 = 1

    if(((b ** 2) - 4 * a * c ) < 0)
        
        return 'Delta is negative'

    else {

        result1 = ((-b + ( Math.sqrt((b ** 2) - 4 * a * c )))) / (2 * a)
        result2 = ((-b - ( Math.sqrt((b ** 2) - 4 * a * c )))) / (2 * a)

        return [result1, result2]

    }

}

console.log(bhaskara(2, 12, -14))
console.log(bhaskara(7, 3, 4))
console.log(bhaskara(2, -10, 8))