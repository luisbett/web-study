//There is no distinction using var when using the same variable inside and outside a block
var number = 1

{
    var number = 3
    console.log('Inside the block:', number)
}

console.log('Outside the block:', number)