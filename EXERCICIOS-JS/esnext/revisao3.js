/**ES8: Object.values/Object.entries: são novos recursos para objetos, .values pega todos os valores dos objetos e entries
 * pega chave (keys) e valores, ou seja, todas as entradas. Criando um conjunto de array, um array com outros arrays. Essa função
 * vai nos dar uma matriz.*/
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj))
console.log(Object.entries(obj))

/**Melhorias na Notação Literal */
const nome = 'Carla'
const pessoa = {
    nome,
    ola() {
        return 'Oi gente!'
    }
}

console.log(pessoa.nome, pessoa.ola())

/**Class */
class Animal {} //Classe vazia
class Cachorro extends Animal {
    falar() {
        return 'Au au!'
    }
}
/**Pegamos a herança da classe Animal para a classe Cachorro, mesmo que Animal seja uma classe vazia. Dentro da class Cachorro
 * criamos uma função falar, não colocamos parametros e dentro dela retornamos uma string "Au au!"
 * Para criar objetos apartir de uma classe, usamos a palavra reservada NEW, da mesma forma que apartir de uma função construtora
 * você pode criar novas instâncias usando o operador NEW.  */
console.log(new Cachorro().falar())

