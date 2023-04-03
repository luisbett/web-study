const manufacturers = ['Mercedes', 'Audi', 'BMW', 'Porsche']

function print(name, index) {
    console.log(`${index + 1}- ${name}`)
}

manufacturers.forEach(print)