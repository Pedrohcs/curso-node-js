// usando notação literal
const obj1 = {}

// usando a função Object
const obj2 = new Object

// função construtora
function Obj3(nome, desconto, preco) {
    this.nome = nome
    this.getPreco = () => {
        return preco
    }
    this.getPrecoComDescont = () => {
        return preco * (1 - desconto)
    }
}

const prod1 = new Obj3('Notebook', 0.1, 3200)
const prod2 = new Obj3('Caneta', 0.25, 8)


console.log(`${prod1.nome}, de R$${prod1.getPreco()} por R$${prod1.getPrecoComDescont()}`)
console.log(`${prod2.nome}, de R$${prod2.getPreco()} por R$${prod2.getPrecoComDescont()}`)

// função factory
function criarFuncionario(firstName, lastName, idade, salarioBase, faltas) {
    return {
        firstName,
        lastName,
        idade,
        salarioBase,
        faltas,
        getSalarioMes() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const func1 = criarFuncionario('Pedro', 'Coimbra', 21, 1000, 5)
console.log(func1.getSalarioMes().toFixed(2))

// função JSONparse
const fromJSON = JSON.parse('{"info": "teste da função JSONparse"}')
console.log(fromJSON.info)