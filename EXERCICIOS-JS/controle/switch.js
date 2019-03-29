const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de Honra')    
            break;
        case 8: case 7:
            console.log('Aprovado')
            break;
        case 6: case 5: case 4:
            console.log('Recuperação')    
            break;
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break;
        default:
            console.log('Nota inválida')
    }
}
/* O switch é bem limitado em JS, os casos (case) são objetos e depois que é executado um, se não tiver um break; ele executa todos
os outros em sequência. Se tiver mais de um caso (case) com a mesma resposta, você pode colocar um do lado do outro como nos exemplos*/

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)
