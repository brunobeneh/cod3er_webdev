function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Até Breve', 456)
console.log(aula1, aula2)

/*Agora mostraremos como funciona o operador new,
quando usamos o new numa função construtora e usamos o operador new,
não só o fato de criar um novo objeto, como o protótipo (__proto__) desse objeto criado 
aponta para a função.prototype que criamos, nesse caso Aula.prototype.
*/

function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Bem Vindo', 123)
const aula4 = novo(Aula, 'Até Breve', 456)
console.log(aula3, aula4)

/*Primeiro, criamos a função novo e ela vai receber uma função, já que apartir dela, 
criamos os objetos da função construtora e recebemos também os parâmetros para criação do nosso objeto.
Após isso criamos um objeto vazio e para simular o new, usaremos uma notação literal de objetos. 
O segundo passo, é fazer com o que o protótipo desse objeto aponte para a função.prototype, como
nesse exemplo criamos a função Aula, nesse caso, ele deve apontar para Aula.prototype.
*/
/*Próximo passo vai ser chamar a função que recebi como parâmetro f e chamarmos a função .apply no objeto que criamos,
Ou seja, será: f.apply(obj, params) 
f(função construtora).apply(função que vai receber como primeiro parâmetro o objeto que criamos, que será o this.)
(obj(o objeto que criamos) e o segundo parâmetro da função .apply (...params), será um Array que representa as listas de parâmetros
que queremos aplicar na função f. (As reticências ... pode ser a sintaxe para o parâmetro rest e também o operador spread),
que vai receber um conjunto de parâmetros que ele vai concatenar tudo isso em uma Array e será representado pelo params. 

spread: O operador spread permite que uma expressão seja expandido em locais onde são esperados vários argumentos (para chamadas de função)
ou vários elementos (para arrays).

rest: A sintaxe de rest parameter (parâmetros rest) nos permite representar um número indefinido de argumentos em um array.
 */