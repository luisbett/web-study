const fs = require('fs')

const path = __dirname + '/file.json'

//Read file sync
const content = fs.readFileSync(path, 'utf-8')
console.log(content)

//Read file async
fs.readFile(path, 'utf-8', (err, content) => {
    const config = JSON.parse(content)
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./file.json')
console.log(config.db)

//Read folder
fs.readdir(__dirname, (err, files) => {
    console.log('Folder content...')
    console.log(files)
})