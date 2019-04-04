function getPreco(imposto = 0, moeda = `R$`) {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: `Notebook`,
    preco: 5000,
    desc: 0.15,
    getPreco
}

console.log(produto.getPreco())

global.preco = 3000
global.desc = 0.2
console.log(getPreco())

console.log(getPreco.apply(produto, [0.15, `$`]))
console.log(getPreco.call(produto, 0.50, `$$`))