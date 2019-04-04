const alunos = [
    { nome: 'Pedro', nota: 9.9, bolsista: true },
    { nome: 'Hyago', nota: 8.5, bolsista: true },
    { nome: 'João Pedro', nota: 6.6, bolsista: false }
]

const allNotas = alunos.map(aluno => aluno.nota)

const resultado = allNotas.reduce((acumulador, atual) => {
    return acumulador + atual
})
console.log(resultado)