function simpleInterest(initialCapital, interestRate, time) {

    return (initialCapital + (initialCapital * interestRate * time)).toFixed(2)

}

function compoundInterest(initialCapital, interestRate, time) {

    return ((initialCapital * ((1 + interestRate) ** time)) - initialCapital).toFixed(2)
    
}

console.log(simpleInterest(623, 0.12, 5))
console.log(compoundInterest(623, 0.12, 5))