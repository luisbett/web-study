//Context 1
let text = 'Hello'

//Context 2
function printMessage() {
    let text = 'Bye'
    return text
}

//Context 3
const product = {
    name: 'MacBook Air',
    price: 1691,
    discount: 0.1,
    shop: {
        address: 'Henry Street',
        neighborhood: 'Dublin 1'
    }
}

console.log(text)
console.log(printMessage())
console.log(product)