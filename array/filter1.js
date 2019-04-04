const produtos = [
    { nome: 'Notebbok', preco: 3299, fragil: true },
    { nome: 'iPad Pro', preco: 4500, fragil: true },
    { nome: 'Copo plastico', preco: 2.99, fragil: true }
]

console.log(produtos.filter(produto => produto.fragil).filter(produto => produto.preco > 1000))