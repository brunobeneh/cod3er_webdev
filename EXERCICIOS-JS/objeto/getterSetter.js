const sequencia = {
    _valor: 1, //convenção
    get valor() { return this._valor++ },
    set valor(valor) {
        if(valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900 //Como atribuimos lá em cima com o set que o valor só seria válido se fosse maior, nesse caso ele vai ignorar o 900 porque veio depois do 1000
console.log(sequencia.valor, sequencia.valor)
