const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado')
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa!') //Por JS ser uma linguagem fracamente tipada, temos que ter cuidado para que não aconteca esse tipo de coisa.
