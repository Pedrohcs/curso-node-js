const pessoa = {
    nome: 'Pedro Henrique',
    idade: 21,
    altura: 1.74,
    peso: 68
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
});

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '29/04/1997'
})

pessoa.dataNascimento = '20/06/1971'

console.log(pessoa.dataNascimento)

const obj1 = { a: 1 }
const obj2 = { b: 2 }
const obj3 = { c: 3, a: 4 }
const obj = Object.assign(obj1, obj2, obj3)
console.log(obj)