//Destructuring using an object

const person = {
    name: 'Robert',
    age: 32,
    address: {
        street: 'Church Street',
        number: 245
    }
}

const { name, age } = person
console.log(name, age)

const { name: n, age: a } = person
console.log(n, a)

const { address: { street, number } } = person
console.log(street, number )

//If I try to access some key that doesn't exist in my object, it will be returned undefined
const { surname, height = 1.89 } = person
console.log(surname, height)