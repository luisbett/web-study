function shopping(job1, job2) {
    let eatIceCream = job1 || job2
    let buyTV50 = job1 && job2
    let buyTV32 = job1 != job2
    let keepHealthy = !eatIceCream

    return { eatIceCream, buyTV50, buyTV32, keepHealthy }
}

console.log(shopping(true, true))
console.log(shopping(true, false))
console.log(shopping(false, true))
console.log(shopping(false, false))