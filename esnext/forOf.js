for(let letter of 'Cod3r') {
    console.log(letter)
}

const ecma = ['Map', 'Set', 'Promise']

//Goes through index
for(let i in ecma) {
    console.log(i)
}

//Goes through value
for(let e of ecma) {
    console.log(e)
}

const teams = new Map([
    ['Flamengo', { worldChampion: true }],
    ['Liverpool', { worldChampion: true }],
    ['Palmeiras', { worldChampion: false }]
])

for (let team of teams) {
    console.log(team)
}
for (let [key, value] of teams) {
    console.log(key, value)
}

for (let team of teams.keys()) {
    console.log((team))
}

for (let team of teams.values()) {
    console.log((team))
}

for (let [key, value] of teams.entries()) {
    console.log(key, value)
}

const s = new Set(['a', 'b', 'c'])

for (let letter of s) {
    console.log(letter)
}