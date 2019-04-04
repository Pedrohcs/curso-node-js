const soma = function(num1, num2) {
    return num1 + num2
}

const imprimirResultado = function(num1, num2, operacao = soma) {
    console.log(operacao(num1, num2))
}

imprimirResultado(6, 18)
imprimirResultado(5, 60, function(num1, num2) {
    return num1 * num2
})