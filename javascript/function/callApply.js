function getPrice(tax = 0, currency = '€') {
    return `${currency} ${this.price * (1 - this.discount) * (1 + tax)}`
}

const product = {
    name: 'iMac',
    price: 3290,
    discount: 0.15,
    getPrice
}

console.log(product.getPrice())

const car = {
    price: 39990,
    discount: 0.2
}

console.log(getPrice.call(car))
console.log(getPrice.apply(car))

console.log(getPrice.call(car, 0.3, '$'))
console.log(getPrice.apply(car, [0.3, '£']))