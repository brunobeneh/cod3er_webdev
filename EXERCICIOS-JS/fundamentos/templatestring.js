const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template) //no nome reversado template, iniciamos com `` (crase) podemos criar um texto, quebrar linhas e interpolar o nome com ${}

//expressoes...
console.log(`1 + 1 = ${1+1}`)

const up = texto => texto.toUpperCase() //aqui criamos uma const up para deixarmos a palavra cuidado em letras maiusculas
console.log(`Ei... ${up('cuidado')}!`)