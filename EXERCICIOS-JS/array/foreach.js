const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})


aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovados => console.log(aprovado)
aprovados.forEach(exibirAprovados)

/*Fizemos 3 exemplos de usarmos o forEach, no primeiro exemplo colocamos parâmentros de nome e indice, 
para função callback, nós podemos usar até 3, o terceiro é o array, apartir do quarto é indefinido.
Exemplo: aprovados.forEach(function(nome, indice, array){
    console.log(`${indice + 1}) ${nome}`) 
    console.log(array)*/