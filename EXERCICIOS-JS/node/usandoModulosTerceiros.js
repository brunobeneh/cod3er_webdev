
const _ = require('lodash')
setInterval(() => console.log(_.random(1, 1000)), 2000)
/**No exemplo acima, estamos requerendo a biblioteca lodash na pasta node_modules,
 * o "_" é uma referência usada para usar a biblioteca lodash. fazendo essa procura (requerimento)
 * sem usar o caminho referencial, ele procura dentro de lodash o aquivo index.js.
 * a função setInterval serve para ser executada de tempos em tempos automáticamente,
 * .random é uma função da lodash (_) que escolhe valores aleatórios, nesse caso entre 1 e 1000, a cada
 * dois segundos (2000)*/

 /**Nós também fizemos um requerimento através de um módulo global chamado nodemon, no terminal chamamos npm i -g nodemon:
  * npm : é o responsável pela administração dos packages do node
  * i : significa que iremos instalar algum pacote
  * -g : significa que iremos instalar de forma global
  * Terminando a instalação, acessamos a pasta node pelo terminal e executamos o nodemon passando o nosso exemplo:
  * nodemon usandoModulosTerceiros.js
  *O nodemon executa o arquivo desejado em tempo real no terminal, qualquer alteração feita, após salvarmos, ele
  restarta a operação e a executa novamente com as alterações feitas.
  */