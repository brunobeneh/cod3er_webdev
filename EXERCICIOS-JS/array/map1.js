const nums = [1, 2, 3, 4, 5]

/*For com propósito, cria um novo Array apartir de um Array já existente permitindo
fazer alterações nos elementos do Array criado sem interferir no Array existente.
Nesse caso abaixo, o resultado é o Array [2, 4, 6, 8, 10] e o nums continua sendo o Array [1, 2, 3, 4, 5]*/

let resultado = nums.map(function(e) {
    return e * 2
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)          
console.log(resultado)                                                                            

//no resultado fizemos um map para cada alteração que queríamos mas como fizemos todas de uma vez ele faz num novo Array só.

//A função .parseFloat analisa um argumento string e retorna um número de ponto flutuante.
//A função .toFixed fixa em duas casas decimais nesse exemplo (toFixed(2)).
//A função .replace altera a string atual por outra indicada, no exemplo mudamos de . para , .