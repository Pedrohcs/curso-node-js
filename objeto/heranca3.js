const pai = {
    nome: 'Pedro',
    corCabelo: 'preto',
    corOlhos: 'verde',
    nariz: 'pontiagudo'
}

const filha = Object.create(pai)
filha.nome = 'Ana'

console.log(filha.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true },
    idade: { value: 21, writable: false, enumerable: true }
})

for (let key in filha2) {
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Atribuido por herança: ${key}`)
}