//It works because the variable i using let has scope only in the loop so it saves the value of i in that moment
const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function (){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()