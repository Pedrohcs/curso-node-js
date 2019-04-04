function MeuObjeto() {}

const obj1 = new MeuObjeto

MeuObjeto.prototype.nome = 'Ana'
MeuObjeto.prototype.falar = function() {
    console.log(`Meu nome é ${this.nome}`)
}

console.log(obj1.nome)
obj1.falar()

obj1.nome = 'Pedro'
console.log(obj1.nome)
obj1.falar()