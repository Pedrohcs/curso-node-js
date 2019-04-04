const avo = { at1: 'A' }
const pai = { __proto__: avo, at2: 'B' }
const filho = { __proto__: pai, at3: 'C' }

console.log(filho.at1)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerar(delta) {
        if ((this.velAtual + delta) <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 350
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

ferrari.acelerar(20)
console.log(ferrari.velAtual)

volvo.acelerar(50)
console.log(volvo.status())