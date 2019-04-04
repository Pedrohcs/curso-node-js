class Lancamento {
    constructor(nome = 'Generico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) {
        lancamentos.forEach(lancamento => this.lancamentos.push(lancamento))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(lancamento => {
            valorConsolidado += lancamento.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('salario', 1000)
const unimed = new Lancamento('unimed', -160)
const vivo = new Lancamento('internet', -128)

const ciclo = new CicloFinanceiro(4, 2019)
ciclo.addLancamentos(salario, unimed, vivo)

console.log(ciclo.sumario())