const valores = [7.7, 9.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)

valores.push('pedro', null, { id: 8 })
console.log(valores)

console.log(valores.pop())
console.log(valores)

delete valores[0]
console.log(valores)