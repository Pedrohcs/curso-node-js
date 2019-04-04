function getNumeroAleatorio(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let num = 0

do {
    num = getNumeroAleatorio(-1, 10)
    console.log(`O número gerado foi: ${num}`)
} while (num != -1)

console.log('Acabou')