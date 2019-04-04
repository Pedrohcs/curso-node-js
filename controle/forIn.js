const notas = [7.7, 8.9, 9.9, 10, 5, 6.8]

for (let nota in notas) {
    console.log(`Nota ${nota}: ${notas[nota]}`)
}

const pessoa = {
    nome: 'Pedro Henrique',
    sobrenome: 'Coimbra e Silva',
    idade: 21,
    peso: 68,
    altura: 1.75
}

for (let atributo in pessoa) {
    console.log(`${atributo}: ${pessoa[atributo]}`)
}