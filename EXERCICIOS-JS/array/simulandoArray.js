const quaseArray = { 0: 'Rafael', 1: 'Ana', 2: 'Bia' }
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this) },
    enumerable: false
})

console.log(quaseArray[0])

/*Criamos um atributo toString no método defineProperties para o objeto quaseArray, 
para simular no console uma impressão de Array. Em seguida, declaramos em value uma função para o atributo toString
para retornar o valor do objeto quaseArray, representado por (this). Para que essa função não seja enumerada, usamos
o enumerable: false, ou seja, quando executarmos Object.values(this), essa função não vai aparecer no resultado final,
fazendo com que fique com um resultado final igual a de um Array normal. 
Ao criarmos objetos apartir de valores numéricos como fizemos acima, podemos acessa-los entre [] como fazemos com Arrays.
Como no exemplo, quando fazemos um console.log, acessamos o quaseArray apartir do atributo 0 que seria como se fosse o
índice 0 de um Array.*/

const meuArray = ['Rafael', 'Ana', 'Bia']
console.log(quaseArray.toString(), meuArray)

