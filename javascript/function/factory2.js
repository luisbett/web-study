function createProduct(name, price) {
    return {
        name,
        price,
        discount: 0.1
    }
}

console.log(createProduct('Airdots', 349))
console.log(createProduct('Apple Watch', 720))