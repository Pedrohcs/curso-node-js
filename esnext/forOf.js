const nomes = ['Pedro', 'Hyago', 'Joao Pedro', 'Estevao']
const palavra = 'Pedro'
for (let letra of palavra) {
    console.log(letra)
}

console.log(`For In`)
for (let indice in nomes) {
    console.log(nomes[indice])
}

console.log(`-------------`)

console.log(`Foreach`)
nomes.forEach(nome => {
    console.log(nome)
})

console.log(`-------------`)

console.log(`For of`)
for (let nome of nomes) {
    console.log(nome)
}