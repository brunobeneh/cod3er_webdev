/*Nesse exemplo, nós criamos dentro de um Prototype de Array essa função forEach2 porque ela não existe.
associamos a ela uma função que percorra o Array e nesse exemplo, demos o nome de callback. Nessa função
ela deve receber como parâmetro uma função Callback/lambda. Para percorremos o Array, usaremos um laço for
com uma variavel let i = 0, esse i precisa ser menor que o Array e vai acessar através de uma instancia do 
Array através do this (this.length) e será incrementado sempre que for pedido (i++). Resumindo, esse laço
vai percorrer do primeiro até o último índice do Array apontado e depois acessamos os elementos do Array.
Dentro do for, nós chamamos a função callback passando 3 parâmetros: o primeiro é o próprio valor, o segundo 
é o índice e o teceiro é o Array completo, são os 3 parâmetros para passamos para a função callback que é passada
para o forEach.*/

Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})

/*O índice impresso começará pelo número 1 pois declaramos no console.log indice + 1 e como todo índice começa em 0,
0+1 = 1*/