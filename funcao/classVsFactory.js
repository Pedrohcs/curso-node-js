class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const pedro = new Pessoa('Pedro')
pedro.falar()

const criarPessoa = nome => {
    return {
        falar() {
            console.log(`Meu nome é ${nome}`)
        },
        gritarNome() {
            console.log(nome.toUpperCase())
        }
    }
}

const hyago = criarPessoa('Hyago')
hyago.falar()
hyago.gritarNome()