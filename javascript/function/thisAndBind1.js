const person = {
    salutation: 'Good morning!',
    toSay() {
        console.log(this.salutation)
    }
}

person.toSay()

//It doesn't works because the 'this' won't reference the object person
const toSay = person.toSay
toSay()

//For make it works I have to use the bind function
const toSay2 = person.toSay.bind(person)
toSay2()