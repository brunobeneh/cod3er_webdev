const moduloA = require('../../moduloA')
console.log(moduloA.ola)

const saudacao = require('saudacao') //Essa pasta foi criada pela gente...NÃO FAÇA ISSO! NÃO CRIE PASTAS DENTRO DE NODE_MODULES
console.log(saudacao.ola)

const c = require('./pastaC') //como aqui estamos requerendo o arquivo index.js, basta especificar a pasta onde esse index esta.
console.log(c.ola2)           // ele estando dentro da mesma pasta raiz.

const http = require('http')        
http.createServer((req, res) => {   
    res.write('Bom dia !')          
    res.end()
}).listen(8080)

/**Aqui acessamos um módulo do node que já vem com ele, chamados de módulos core, 
 * como é um módulo nativo que esta dentro dele, não preciso informar o caminho relativo, 
 * basta informar o nome do módulo. Após isso, usamos o http e usamos o método .createServer 
 * (ele cria um servidor no seu computador), com um callback que recebe uma requisição e resposta (req, res)
 *(http.createServer((req, res)...) e dentro desse callback respondemos uma requisição com o res.write e
 *usamos res.end() para encerrar. .listen(cria um server que escuta a porta 8080 do seu computador.)
 *podemos ir ao Browser e acessar o localhost:8080 para confirmar.
 */