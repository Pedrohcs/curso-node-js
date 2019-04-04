Array.prototype.filter2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    { nome: 'Notebbok', preco: 3299, fragil: true },
    { nome: 'iPad Pro', preco: 4500, fragil: true },
    { nome: 'Copo plastico', preco: 2.99, fragil: true }
]

const isFragil = produto => produto.fragil
const isCaro = produto => produto.preco >= 500

console.log(produtos.filter2(isFragil).filter2(isCaro))