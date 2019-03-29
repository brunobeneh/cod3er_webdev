console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

/*String.prototype.reverse, serve para reverter uma string, 
this.split separa os elementos da String(inclusive os espaços em branco), 
ou seja, gera um Array, o Array por sua vez tem a função reverse, que coloca 
os elementos de trás pra frente e o join junta todos os elementos na String de novo.
Esse return fez o seguinte: pegou a String e separou(.split), transformando-a em Array, após 
se tornar uma Array, ele reverteu(.reverse) os elementos do Array e após isso ele juntou(.join) os elementos 
retornando assim uma String novamente.*/
String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}

/*Aqui nós criamos um objeto gerado dentro de String (Escola Cod3r) e só por isso ele 
consegue acessar o método prototipo .reverse porque colocamos ele no prototype */
console.log('Escola Cod3r'.reverse())


/*Nesse caso, fazemos um exemplo similar com Array, mostrando que podemos acrescentar 
métodos prototipos que uma função não tem, através do .prototype, nesse caso foi o first. 
Importante lembrar que você acessa um Array ou uma string dentro de um método prototipo através do this.  */
Array.prototype.first = function() {
    return this [0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())

/*OBS!!!! Não sobrescreva funções já presentes em .prototype . 
Exemplo:
String.prototype.toString = function() {
    return 'Lascou tudo'
}
toString é uma função já existente em .prototype, altera-la
pode causar um efeito catastrófico no seu código pois 
outras APIs e outras funções esperam receber a função toString padrão,
por exemplo, então fazer isso é um risco para a aplicação de um modo Global.*/