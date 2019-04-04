const nums = [1, 2, 3, 4, 5, 6]

let numsDobro = nums.map(num => num * 2)

console.log(numsDobro)

const soma = num => num + 10
const triplo = num => num * 3
const paraDinheiro = num => `R$ ${parseFloat(num).toFixed(2).replace('.', ',')}`

let dinheiro = nums.map(soma).map(triplo).map(paraDinheiro)
console.log(dinheiro)