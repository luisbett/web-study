function area(width, height) {
    const area = width * height
    if (area > 20) {
        console.log(`Value above allowed: ${area}m2.`)
    } else {
        return area
    }
}

//All this cases below doesn't generate an error, but there is no sense in using some of them
console.log(area(2, 2))
console.log(area(2))
console.log(area())
console.log(area(2, 3, 17, 22, 44))
console.log(area(5, 5))