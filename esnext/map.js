const technologies = new Map()
technologies.set('react', { framework: false })
technologies.set('angular', { framework: true })

//It is not used like this
console.log(technologies.react)

//It is used like this
console.log(technologies.get('react'))
console.log(technologies.get('react').framework)

const variousKeys = new Map([
    [function () { }, 'Function'],
    [{}, 'Object'],
    [123, 'Number']
])

variousKeys.forEach((val, key) => {
    console.log(key, val)
})

console.log(variousKeys.has(123))
variousKeys.delete(123)
console.log(variousKeys.has(123))
console.log(variousKeys.size)

variousKeys.set(123, 'a')
variousKeys.set(123, 'b')
variousKeys.set(456, 'b')
console.log(variousKeys)