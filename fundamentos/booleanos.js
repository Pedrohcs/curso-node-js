let isAtivo = true
console.log(isAtivo)

isAtivo = false
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

isAtivo = ''
console.log(!!isAtivo)

isAtivo = ' '
console.log(!!isAtivo)

let nome = ''
console.log(nome || 'Desconhecido')
nome = 'Pedro Henrique'
console.log(nome || 'Desconhecido')