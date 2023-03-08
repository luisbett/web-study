//There is distinction using var and let when using the same variable inside and outside a block
var number = 1

{
    let number = 3
    console.log('Inside the block:', number)
}

console.log('Outside the block:', number)