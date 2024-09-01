const moduleA = require('../../moduleA')
console.log(moduleA.hello)

const greeting = require('./folderC')
console.log(greeting.hi)

const http = require('http')
http.createServer((req, res) => {
    res.write('Hello world')
    res.end()
}).listen(8080)