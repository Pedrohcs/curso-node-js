function imprimirResultado(num) {
    if ((typeof num) == 'number') {
        if (num >= 7) {
            console.log('Aprovado')
        } else {
            console.log('Reprovado')
        }
    } else {
        console.log('Parâmetro passado não foi um número')
    }
}

imprimirResultado(9)
imprimirResultado(7)
imprimirResultado(6)
imprimirResultado('Opa')