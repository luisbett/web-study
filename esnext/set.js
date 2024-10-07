//Does not accept repetead values/not indexed
const teams = new Set()

teams.add('Flamengo')
teams.add('Liverpool').add('Manchester City').add('West Ham')
teams.add('Joinville')
teams.add('Flamengo')

console.log(teams)
console.log(teams.size)
console.log(teams.has('Flamengo'))
console.log(teams.has('flamengo')) //Set is case senstive
teams.delete('Manchester City')
console.log(teams.has('Manchester City'))

const names = ['Paul', 'Luke', 'John', 'Paul']
const namesSet = new Set(names)
console.log(namesSet)