console.log('1)', '1' == 1)
console.log('2)', '1' === 1)

const d1 = new Date(0)
const d2 = new Date(0)

console.log('3)', d1 == d2)
console.log('4)', d1 === d2)
console.log('5)', d1.getTime() == d2.getTime())

console.log('6)', undefined == null)
console.log('7)', undefined === null)