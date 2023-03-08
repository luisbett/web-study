//Testing scopes

//It works
{
    {
        {
            var number = 123
        }
    }
}

console.log(number)

//It doesn't works
function test() {
    var text = 'Hello world'
}

test()
console.log(text)