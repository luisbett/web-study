function checkTriangle(sideA, sideB, sideC) {

    if (sideA === sideB && sideB === sideC) {
        return "Equilateral"
    } else if (sideA !== sideB && sideA !== sideC && sideB !== sideC) {
        return "Scalene"
    } else if ((sideA === sideB && sideB !== sideC) || 
                (sideB === sideC && sideC !== sideA) || 
                (sideC === sideA && sideA !== sideB)) {
        return "Isosceles"
    }

}

console.log(checkTriangle(2, 3, 1))