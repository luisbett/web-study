//ES8: Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3}

console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))

//Improvements in literal notation
const name = 'Luis'
const person = {
    name,
    greeting() {
        return 'Hi there'
    }
}

console.log(person.name, person.greeting())

//Class

class Animal {}
class Dog extends Animal {
    makeSound() {
        return 'Whof whof'
    }
}

console.log(new Dog().makeSound())