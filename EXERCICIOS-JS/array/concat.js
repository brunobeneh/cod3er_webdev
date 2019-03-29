const filhas = ['Valeskah', 'Cibalena']
const filhos = ['Uoxiton', 'Uerlei']
const filhxs = filhas.concat(filhos)
console.log(filhxs, filhas, filhos)

/*Ainda podemos adicionar mais objetos enquanto concatenamos: 
    const filhxs = filhas.concat(filhos, 'Fulano')

O Array mesmo literal, ele é um objeto e por isso ele tem a notação .algumacoisa 
sempre a disposição para chamar os métodos do Array. Nesse caso chamaremos .concat */
console.log([].concat([1, 2], [3, 4], 5, [[6, 7]]))
/*Nesse exemplo concatenamos um Array indefinido e declaramos os parametros na 
concatenação. Declaramos dois Arrays([1,2] e [3,4]), um elemento (5) e uma matriz ([[6,7]]),
que seria uma Array dentro da outra ([[]]). Após concatenar, todos os elementos vão para o mesmo
Array, cada um em um índice e a matriz se torna um Array de apenas um índice. */