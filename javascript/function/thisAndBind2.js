function Person() {
    this.age = 0

    //I can use this technique to save the instance of Person in the self variable
    const self = this

    setInterval(function() {
        self.age++
        console.log(self.age)
    }/*.bind(this) - or I can use the bind function*/, 1000)
}

new Person