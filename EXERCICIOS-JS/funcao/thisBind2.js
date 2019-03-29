/*Exemplo 1
function Pessoa() {
    this.idade = 0 

    setInterval(function() {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000) //1000 = 1000 milisegundos = 1 segundo. .bind chama a função this certa. 
}

new Pessoa */

/*Exemplo 2
function Pessoa() {
    this.idade = 0

    const self = this //Nesse caso não precisamos usar o .bind porque aqui associamos a constante self com o this.idade.
    setInterval(function() {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa */

//Exemplo 3
function Pessoa() {
    this.idade = 0

    const self = this //Nesse caso não precisamos usar o .bind porque aqui associamos a constante self com o this.idade.
    setInterval(function() {
        self.idade++            //É muito comum  vermos esse tipo de coisa acontecer, criarmos uma constante contendo this e chama-la ao invés de chamarmos o this direto.
        console.log(self.idade)
    }, 1000)
}

new Pessoa