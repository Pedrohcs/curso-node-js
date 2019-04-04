const x = 'Global'

function func() {
    let x = 'Local'

    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = func()
console.log(minhaFuncao())