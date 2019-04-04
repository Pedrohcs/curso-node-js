function soma() {
    let soma = 0
    for (param in arguments) {
        soma += arguments[param]
    }
    return soma
}

console.log(soma(10, 50, 60, 2, 3))

function soma1(a, b, c) {
    a = isNaN(a) ? 0 : a
    b = isNaN(b) ? 0 : b
    c = isNaN(c) ? 0 : c
    return a + b + c
}

console.log(soma1(9, 'a', 1))

function soma2(a = 0, b = 0, c = 0) {
    return a + b + c
}

console.log(soma2(9, 'a', 1), soma2(9))