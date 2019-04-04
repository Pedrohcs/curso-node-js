// Função retornando função
function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}

soma(1, 8)(2)

// Função passada como parametro
function s(a, b) {
    return a + b
}

function s1(a, b) {
    return console.log(a + b)
}

s1(s(5, 5), 9)