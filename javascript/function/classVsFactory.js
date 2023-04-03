//Class
class Person {
    constructor(name) {
        this.name = name
    }

    toSay() {
        console.log(`My name is ${this.name}`)
    }
}

const person1 = new Person('John')
person1.toSay()

//Constructive function
const createPerson = name => {
    return {
        toSay: () => console.log(`My name is ${name}`)
    }
}

const person2 = createPerson('Scott')
person2.toSay()