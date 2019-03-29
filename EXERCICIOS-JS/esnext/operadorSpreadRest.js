//Operador simbolizado por ... (reticências), ser para juntar(rest) e espalhar(spread)
//usar spread com um objeto
const funcionario = { nome: 'Maria', salario: 12348.99}
const clone = { ativo: true, ...funcionario }
console.log(clone)

//usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)