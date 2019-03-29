/*Object.preventExtensions = Prevenir que o seu objeto seja extendido, ou seja, você não consegue aumentar o número de atributos nesse objeto.
Podendo apenas excluir atributos, mas não adicionar.*/
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
/*.isExtensible, testa se o objeto é extensível, se pode ser adicionado atributos nele.*/
console.log('Extensível:', Object.isExtensible(produto))

/*Aqui fizemos 3 exemplos, o primeiro, alteramos o valor do atributo nome, como ele já existia
conseguimos fazer sem problemas. O segundo, estamos criando um novo atributo que não existia antes
que é o descricao, nesse caso ele não funcionará por conta do .preventExtensions. No terceiro caso
estamos pedindo para deletar o atributo tag, que já existe no nosso objeto e ele será apagado.
Lembrando que o .preventExtensions apenas evita acréscimos de atributos, mas não alterações de valores
de atributos já criados e nem exclusão (delete). */
produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

/*Object.seal = Prevenir que consiga adicionar novos elementos, atributos ou remover, podendo apenas modificar valores em 
atributos já existentes.*/
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)

/*.isSealed, testa pra saber se o objeto está selado, se pode ser adicionado ou removido elementos dele.*/
console.log('Selado:', Object.isSealed(pessoa))

/*Fizemos 3 exemplos como os anteriores e somente o último será feito, a alteração no atributo idade. */
pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

/*Object.freeze = selado + valores constantes, você não consegue alterar nada nesse objeto, todos os valores 
e atributos dele são constantes.*/

