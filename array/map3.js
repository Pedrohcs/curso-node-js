Array.prototype.map2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    ' { "nome": "borracha", "preco": 3.45 }',
    ' { "nome": "lapis", "preco": 5.50 }',
    ' { "nome": "estojo", "preco": 15 }',
    ' { "nome": "regua", "preco": 3.60 }'
]

const criarObjeto = posicao => {
    const obj = JSON.parse(posicao)
    return obj.preco
}

const precos = carrinho.map2(criarObjeto)
console.log(precos)