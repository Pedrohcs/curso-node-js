Array.prototype.reduce2 = function(callback) {
    let acumulador = this[0]
    for (let i = 0; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const alunos = [
    { nome: 'Pedro', nota: 9.9, bolsista: true },
    { nome: 'Hyago', nota: 8.5, bolsista: true },
    { nome: 'João Pedro', nota: 6.6, bolsista: false }
]

const allBolsista = alunos.map(aluno => aluno.bolsista).reduce2((acumulador, atual) => {
    return acumulador && atual
})

const isBolsista = alunos.map(aluno => aluno.bolsista).reduce2((acumulador, atual) => {
    return acumulador || atual
})

console.log(allBolsista)
console.log(isBolsista)