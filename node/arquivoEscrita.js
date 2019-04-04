const fs = require('fs')

const produto = {
    nome: 'Celular',
    descricao: 'Modelo asiático',
    modelo: 'Xiaomi MI9',
    preco: 2500
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!')
})