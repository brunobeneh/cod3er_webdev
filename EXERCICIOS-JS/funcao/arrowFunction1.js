let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a //O return fica implicito dessa forma.
console.log(dobro(Math.PI))

let ola = function() {
    return 'Olá'
}

ola = () => 'Olá' //Função sem parametro e com arrow
ola = _ => 'Olá' //Função com parametro, é comum usar o _ como um parametro só para não deixar sem nenhum, depois é só ignora-lo
console.log(ola())