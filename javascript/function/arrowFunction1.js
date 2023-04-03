let double = function(a) {
    return 2 * a
}

double = (a) => {
    return 2 * a
}

double = a => 2 * a //Implicit return
console.log(double(2))

let hello = function() {
    return 'Hello'
}

hello = () => 'Hello'
hello = _ => 'Hello' //'_' is replacing the parameters definition
console.log(hello())