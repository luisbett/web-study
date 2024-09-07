function euro(parts, ...values) {
    const result = []
    values.forEach((value, index) => {
        value = isNaN(value) ? value : `€ ${value.toFixed(2)}`
        result.push(parts[index], value)
    })
    return result.join('')
}

const price = 29.99
const discount = 15

console.log(euro `The value is ${price} and the discount is ${discount}`)