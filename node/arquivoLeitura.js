const fs = require('fs')

const caminhoArquivo = __dirname + '/arquivo.json'

// sincrono..
const conteudo = fs.readFileSync(caminhoArquivo, 'utf-8')
console.log(conteudo)

// assincrono
fs.readFile(caminhoArquivo, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (err, conteudo) => {
    conteudo.forEach(arq => {
        console.log(arq)
    })
})