//Change this class Person in a factory function
/*class Person {
    constructor(name) {
        this.name = name
    }

    toSay() {
        console.log(`My name is ${this.name}`)
    }
}

const person1 = new Person('John')
person1.toSay()*/

//Factory function
function Person(name) {
    this.name = name

    this.toSay = () => {
        console.log(`My name is ${this.name}`)
    }
}

const person2 = new Person('John')
person2.toSay()