//Tagged templates - process the template inside a function
function tag(parts, ...values) {
    console.log(parts)
    console.log(values)
    return 'Another string'
}

const student = 'John'
const situation = 'Approved'

console.log(tag `${student} is ${situation}.`)