function gritarNome(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (TypeError) {
        console.log('Tentando acessar uma variavel no obj que não existe')
    }
}

const obj = { nome: 'Pedro' }

gritarNome(obj)