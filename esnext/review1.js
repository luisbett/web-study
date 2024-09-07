//let and const
{
    var a  = 1
    let b = 3
    console.log(a) //Works
    console.log(b) //Works
}
console.log(a) //Works
//console.log(b) //Does not work

//Template string
const product = 'Iphone'
console.log(`${product} is expensive`)

//Destructuring
const [l, e, ...tters] = 'Cod3r'
console.log(l, e, tters)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const { age, name: n } = { name: 'Luis', age: 26 }
console.log(n, age)
