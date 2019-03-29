const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Karen', nota: 9.2, bolsista: true },
    { nome: 'Ibsen', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true },
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
})  //Você pode inclusive colocar um valor inicial após a callback (function(acumulador, atual...)), com uma vírgula.

console.log(resultado)