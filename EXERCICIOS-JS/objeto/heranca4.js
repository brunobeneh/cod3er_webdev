function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}

obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()

//Resumindo a loucura...
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype) 
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

/* MeuObjeto é uma função que tem um atributo prototype e esse atributo que aponta para MeuObjeto.prototype.
MeuObjeto.prototype é um objeto, que pode ter qualquer atributo, enquanto uma função pode ter um atributo 
prototype, e tem um protótipo que é apartir do __proto__. Esse protótipo (__proto__) aponta para um Object.prototype.
A função MeuObjeto, além de ter um atributo prototype, tem também um protótipo __proto__, que aponta pra Function.prototype
que também tem um protótipo (__proto__) que aponta para o Object.prototype. O Object.prototype, o seu protótipo (__proto__)
aponta para um null, ou seja, vazio e não indefinido. */