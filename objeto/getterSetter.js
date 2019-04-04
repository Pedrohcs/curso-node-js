const sequencia = {
    _valor: 1,
    get valor() {
        return this._valor++
    },
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor, sequencia.valor, sequencia.valor)
sequencia.valor = 10
console.log(sequencia.valor)
sequencia.valor = 5 // nao foi atribuido pois o set esta sendo chamado auto
console.log(sequencia.valor)