function Car(maxVelocity = 200, delta = 5) {
    //private attribute
    let currentVelocity = 0

    //public method
    this.accelerate = function () {
        if (currentVelocity + delta <= maxVelocity) {
            currentVelocity += delta
        } else {
            currentVelocity = maxVelocity
        }
    }

    //public method
    this.getCurrentVelocity = () => currentVelocity
}

let clio = new Car
clio.accelerate()
console.log(clio.getCurrentVelocity())

let ferrari = new Car(350, 20)
ferrari.accelerate()
ferrari.accelerate()
ferrari.accelerate()
ferrari.accelerate()
ferrari.accelerate()
console.log(ferrari.getCurrentVelocity())

console.log(typeof Car)
console.log(typeof ferrari)