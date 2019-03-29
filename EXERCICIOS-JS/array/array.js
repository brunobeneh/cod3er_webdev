/*Se você pedir um new antes de uma função, ela se torna um objeto, assim como nesse caso um Array literal (Array [])
assim como um objeto literal é usado com {}.*/
//Array é uma estrutura indexada.
console.log(typeof Array, typeof new Array, typeof [])

//Existem duas formas de definir um Array, a mais recomendada é a segunda forma, com colchetes []
let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

/*Como Array é indexado, você pode acessar seus elementos através de indice, lembrando que o primeiro é sempre 0 e por aí vai.
Caso você tente acessar um indice que ainda não tem um elemento atribuido, o JavaScript não dá erro! Ele apenas diz que 
aquele indice está indefinido (undefined).*/
aprovados = [ 'Bia', 'Carlos', 'Ana' ]
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

/*A melhor forma para se substituir um elemento do Array é da seguinte forma abaixo, você também pode acrescentar outro elemento
mas existe uma forma mais recomendada para isso. */
aprovados[3] = 'Paulo'

/*A forma recomendada para se acrescentar um elemento a um Array é usando a função .push, como vemos abaixo. */
aprovados.push('Abia')

/*Para sabermos a quantidade de elementos de um Array, podemos usar o .length*/
console.log(aprovados.length)

/*Em Array, você inclusive pode indexar um elemento em qualquer posição que desejar, lembrando que, para chegar até o indice
desse elemento, ele vai indefinir(undefined) todos os outros até chegar no que você acrescentou.*/
aprovados[9] = 'Rafael'
/*Nesse caso acima, acrescentamos um elemento no indice 9 que não existia até então. Como em nosso Array possui 5 elementos de index
de 0 à 4, os indices de 5 à 9 serão "definidos" como indefinidos (undefined) e a String Rafael ficará no indice 10.*/

/*Se pedirmos para exibir o tamanho do Array, ele vai nos dizer que ele possui 10 elementos, por conta do acréscimo do elemento
String Rafael no index 9.*/
console.log(aprovados.length)

console.log(aprovados [8] === undefined)
console.log(aprovados)
//.sort é a função que organiza o elementos nos indices.
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']

/*A função .splice adiciona/remove elementos do/para um Array e retorna os elementos removidos. 
O prmeiro número se refere ao índice que começa a remover, o segundo é a quantidade de elementos removidos,
ou seja, (1, 2) apartir do índice 1, apague 2 elementos. Serão apagados os elementos do índice 1 e índice 2.
Para acrescentar elementos, basta escreve-los, nesse exemplo serão os elementos 1 e 2.*/
aprovados.splice(1, 2, 'Elemento1', 'Elemento2')
console.log(aprovados)