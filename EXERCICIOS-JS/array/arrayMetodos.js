const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //Massa quebrou o carro!
//A função.pop retira o último elemento do Array e retorna esse elemento.
console.log(pilotos)

pilotos.push('Verstappen') //.push acrescenta um elemento no último índice de uma Array.
console.log(pilotos)

pilotos.shift() //A função.shift retira o primeiro elemento do Array e retorna esse elemento.
console.log(pilotos)

pilotos.unshift('Hamilton') //A função.unshift acrescenta um primeiro elemento do Array e retorna um novo length.
console.log(pilotos)

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa') //Nesse caso, estamos usando o .splice para adicionar o Botta e o Massa apartir do índice 2.
console.log(pilotos)

//remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //Essa função .slice, seleciona um índice e cria um novo Array apartir daquele índice.
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) /*Usando dessa forma, o novo Array criado vai do índice 1 até o índice 4 mas o índice 4
4 não aparece no novo Array.*/
console.log(algunsPilotos2)