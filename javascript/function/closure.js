//Closure is the scope created when a function is declared
//This scope allows the function to access and manipulate external variables to the function

//Lexical context in action!
const x = 'Global'

function outside() {
    const x = 'Local'
    function inside() {
        return x
    }
    return inside
}

const myFunction = outside()
console.log(myFunction())