Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Pedro',
        nota: 9.9
    }, {
        nome: 'Hyago',
        nota: 8.5
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Estevão',
        nota: 6.6
    }, {
        nome: 'Vinícius',
        nota: 7.5
    }]
}]

const getNotaAluno = aluno => aluno.nota
const getNotasTurma = turma => turma.alunos.map(getNotaAluno)
const notas1 = escola.flatMap(getNotasTurma)
console.log(notas1)