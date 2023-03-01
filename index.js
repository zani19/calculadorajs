const somar = (valor1, valor2) => {
    console.log(`Resultado: ${valor1 + valor2}`)
}


const subtrair = (valor1, valor2) => {
    console.log(`Resultado: ${valor1 - valor2}`)
}

const multiplicar = (valor1, valor2) => {
    console.log(`Resultado: ${valor1 * valor2}`)
}

const dividir = (valor1, valor2) => {
    console.log(`Resultado: ${valor1 / valor2}`)
}
exports.calculoSoma = somar
exports.calculoSubtrair = subtrair
exports.calculoMultiplicar = multiplicar
exports.calculoDividir = dividir
