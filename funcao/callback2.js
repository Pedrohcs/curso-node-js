const notas = [6, 5, 8, 9.9, 10, 6.6, 5.4, 4]

let notaBaixa = []

notaBaixa = notas.filter(nota => nota < 7)

console.log(notaBaixa)