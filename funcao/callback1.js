const fabricantes = ['Mercedes', 'Audi', 'BMW', 'Lexus']

const imprimir = function(nome, indice) {
    console.log(`${indice + 1}: ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))