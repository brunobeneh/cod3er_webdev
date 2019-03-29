console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function logThis() {
    console.log('Dentro de uma função')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)

//  this.perigo = '...' 
/**Temos que ter cuidado de fazer isso pois nesse cenário o this. está apontando para um objeto global 
 * e isso alteraria tudo que esse objeto esta relacionado, inclusive ele mesmo.*/
}
// this.perigo = '...'
/**Nesse caso, colocando fora da função, estamos relacionando com o module.exports. */
logThis()