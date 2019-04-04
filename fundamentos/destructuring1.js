const pessoa = {
    nome: 'Pedro',
    idade: 21,
    altura: 1.75,
    endereco: {
        rua: 75,
        numero: 340
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { rua, numero, cep } } = pessoa
console.log(rua, numero, cep)