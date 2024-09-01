//Challenge: Get the chinese woman with the lowest salary

const axios = require('axios')
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

const chineses = e => e.pais === 'China'
const women = e => e.genero === 'F'
const lowestSalary = (prev, curr) => {
    return prev.salario < curr.salario ? prev : curr
}

//Get employees list from server
axios.get(url).then(res => {
    const employees = res.data

    const woman = employees
        .filter(chineses)
        .filter(women)
        .reduce(lowestSalary)

    console.log(woman)
})