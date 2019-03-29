const anonimo = process.argv.indexOf('-a') !== -1
console.log(anonimo)

if(anonimo) {
    process.stdout.write('Fala Anônimo!\n')
    process.exit()
} else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n', '')

        process.stdout.write(`Fala ${nome}!!\n`)
        process.exit()
    })
}

/**Pedimos que fosse colocado um argumento -a no terminal do node e caso isso fosse feito,
 * nós escreveríamos na tela "Fala Anônimo!", para isso usamos o process.stdout.write,
 * feito isso saímos do processo com process.exit(). Caso não coloquemos o argumento pedido
 * ou coloquemos algo diferente do argumento -a, usamos o process.stdout.write para pedir
 * que o usuário digite o nome e usamos o process.stdin.on('data'...) para pegarmos tudo
 * que ele digitou até pressionar a tecla ENTER de confirmando que terminou de escrever.
 * 
 * Após isso, fizemos uma arrow function com data (que é o ENTER), colocamos numa constante nome,
 * para transformar o data em string e no lugar da quebra de linha (\n), aparecer um espaço:
 * 
 * data => {const nome = data.toString().replace('\n', '')}
 * 
 * Em seguida, usamos o process.stdout.write para escrevermos "Fala (nome da pessoa)!!" e para
 * que isso aconteça, precisamos especificar onde entra o que o usuário escreveu e colocar no lugar
 * a constante que criamos com o nome de nome:
 * 
 *process.stdout.write(`Fala ${nome}!!\n`)
 *process.exit()
 * */