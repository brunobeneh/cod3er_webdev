const moduloA = require('./moduloA') // ./ significa que estamos requerendo algo de dentro do nosso projeto que foram exportados.
const moduloB = require('./moduloB') // ./ é conhecido como caminho relativo.
/**Nós podemos navegar por pastas através do caminho relativo, se colocarmos "../" nós saímos de uma pasta e vamos para a anterior
 * se colocarmos "../../", saímos de duas pastas e assim vai...
 */
console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)