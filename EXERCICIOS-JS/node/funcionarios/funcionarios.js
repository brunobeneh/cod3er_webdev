//axios é um client http, ele faz requisições pra obter informações de algo que esta remoto.
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)

/**usamos o método .get para pegar informações na url que passamos e em seguida o .then para fazermos uma função response.
 * Dentro dessa função criamos um objeto funcionarios e colocamos o valor response.data, ou seja, pegaremos todos os dados
 * da url com o .get e colocamos esses dados na constante funcionarios.
 */

 //Mulheres com menor salário?
    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)
    
    console.log(func)
})

