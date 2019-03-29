const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) //Pega a letra ou número através da tabela ASCII, 51 é o 3 na tabela
console.log(escola.indexOf('3')) //Pega o terceiro digito de escola, que esta alocado no terceiro indice que nesse caso é Cod3r

console.log(escola.substring(1)) //ele começa apartir do indice 1 da palavra cod3r. Começa pelo 0(c) e assim por diante
console.log(escola.substring(0, 3)) // vai do indice zero até o final indice 3 sem mostrar o final

console.log('Escola '.concat(escola).concat("!")) //Para concatenar um literal('Escola') com uma constante(escola) e outra literal("!")
console.log('Escola ' + escola + "!")
console.log(escola.replace(3, 'e'))

console.log('Ana,Maria,Pedro'.split(',')) //Para agrupar como Array através da vírgula. podemos fazer também assim /./