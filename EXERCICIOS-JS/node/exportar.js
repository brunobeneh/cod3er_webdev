console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null                  //Depois que você declara exports, você não consegue alterar mais o seu valor, a menos que voce 
console.log(module.exports)     //mude o module.exports. o this. e o exports. são só duas referências para o mesmo objeto que o module.exports aponta.

exports = {
    nome: 'Teste'
}

console.log(module.exports)

module.exports = { publico: true }