const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()
//os parenteses são para invocar a função factory.
/**o contadorC e contadorD faz um require para o arquivo instanciaNova, queremos desse arquivo a função que ele
 * contém. Para evocar essa função de instanciaNova para o contadorC precisamos dos parenteses para evocar
 * a função de lá, que é conhecida nesse caso como função factory.
*/
contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)