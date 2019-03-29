class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

/*Aqui estamos criando a classe Pai e dizendo que ela terá heranças da classe Avo.
O extends, faz essa relação, informando que o protótipo da classe Pai é o protótipo da classe 
Avo. Fazemos uma função constructor com sobrenome também, caso ele receba ao invés do 
Avo para que ele passe para Avo ao invés do contrário. A função super faz essa relação de
herança através do sobrenome, ou seja, o atributo sobrenome da classe Pai será o mesmo que da 
classe Avo.
 */
class Pai extends Avo {
    constructor(sobrenome, profissao = 'Desenvolvedor') {
        super(sobrenome)
        this.profissao = profissao
    }
}

/*Aqui criamos a classe Filho fazendo um extends a classe Pai e dizendo que a relação de herança
através da função super (que é o parâmetro sobrenome) esta atribuído a string Silva, ou seja, o 
sobrenome da família nesse caso. Como passamos apenas um parâmetro através do constructor, ele
subentende que o outro é o que já foi definido. (no constructor da classe Pai temos um primeiro
parâmetro sobrenome e o segundo é profissao e atribuimos a ele a string Desenvolvedor.)*/
class Filho extends Pai {
    constructor() {
        super('Dantas')
    }
}

const filho = new Filho
console.log(filho)
