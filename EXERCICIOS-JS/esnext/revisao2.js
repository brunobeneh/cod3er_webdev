/**Arrow Function - sintaxe reduzido, funções de uma mesma linha. Funções arrows são sempre anônimas, você apenas atribui ela a
 * uma variável. Os parenteses só são necessários caso tenha mais de um parâmetros e caso coloque o corpo entre {}, você precisa
 * chamar o return.*/
const soma = (a, b) => a + b
console.log(soma(2,3))

const soma2 = (a, b) => { 
    return a + b
}
console.log(soma2(4,5))

/**Arrow Function (this): Fica associado ao local onde foi requisitado. Nesse caso, se estiver dentro do Node, ele vai sempre 
 * apontar para Global: */
const lexico1 = () => console.log(this === exports)
/**Nesse segundo caso, quando voce tem uma função tradicional em Javascript o this pode variar de acordo com a chamada da função,
 * ou pode mudar o contexto através de um bind, de um call ou de um apply, é possível mudar o contexto de uam função tradicional,
 * já com uma função arrow, isso não é possível.*/
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

/**parametro default: É a capacidade de em cima de um atributo e de uma função, definir um valor padrão pra ele. Caso ele seja undefined,
 * ele vai assumir um valor padrão.*/
function log(texto = 'Node') {
    console.log(texto)
}

log()
log('Sou mais forte');

/**Operador spread/rest: No contexto da função usamos o termo rest, porque a ideia dele é voce ter parâmetros variados, você colocar vários
 *parâmetros na chamada da função e esses parâmetros, serão agrupados em um array internamente dentro da função.
 *se você estiver trabalhando com objeto ou com array, o termo mais correto é spread.*/
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5))