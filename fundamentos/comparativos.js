function comparacao(trab1, trab2) {
    if (trab1 && trab2) return 'Comprar tv de 50'
    else if (trab1 || trab2) return 'Comprar tv de 32'
    else return 'Não comprar tv'
}

const [trab1, trab2] = [false, false]

console.log(comparacao(trab1, trab2))