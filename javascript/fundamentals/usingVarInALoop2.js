//It doesn't works because the variable i using var has scope bigger than the loop
const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function (){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()