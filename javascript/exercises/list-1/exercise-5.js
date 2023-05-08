function rounding(number) {

    return 'R$' + (number.toFixed(2).replace('.',','))

}

console.log(rounding(0.30000004))