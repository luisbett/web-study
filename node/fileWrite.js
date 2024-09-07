const fs = require('fs')

const product = {
    name: 'Iphone',
    price: 899.00,
    discount: 0.15
}

fs.writeFile(__dirname + '/fileGenerated.json', JSON.stringify(product), err => {
    console.log(err || 'File generated successfully!')
})