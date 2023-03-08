//Function without return
function printSum(value1, value2) {
    console.log(value1 + value2)
}

printSum(5, 3)

//Function with return
function sum(value1, value2 = 0) {
    return value1 + value2
}

console.log(sum(3, 2))

//It returns NaN unless we put value1 = 0 as well to cover this cenary
console.log(sum())