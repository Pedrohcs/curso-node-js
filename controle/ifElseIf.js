Number.prototype.entre = function(inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function(nota) {
    if (nota.entre(9, 10)) {
        console.log('Quado de Honra!')
    } else if (nota.entre(7, 8.99)) {
        console.log('Aprovado regular')
    } else if (nota.entre(4, 6.99)) {
        console.log('Recuperação')
    } else if (nota.entre(0, 3.99)) {
        console.log('Reprovado')
    } else {
        console.log('Nota invalida')
    }
}

imprimirResultado(7)