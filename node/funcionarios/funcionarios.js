const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const isMulher = func => func.genero == 'F'
const isChines = func => func.pais == 'China'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    const func = funcionarios.filter(isMulher).filter(isChines).reduce(menorSalario)
    console.log(func)
})