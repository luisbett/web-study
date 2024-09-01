//Global object for node
//console.log(global)

global.myOwnObject = {
    name: 'Luis Bett',
    sayMyName() {
        return 'My name is ' + this.name
    }
}

/*global.myOwnObject = Object.freeze({
    name: 'Luis Bett',
    sayMyName() {
        return 'My name is ' + this.name
    }
})*/