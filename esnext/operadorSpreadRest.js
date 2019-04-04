const funcionario = {
    nome: 'Pedro',
    salario: 1000
}

const clone = {
    cp: true,
    ...funcionario
}

console.log(clone)