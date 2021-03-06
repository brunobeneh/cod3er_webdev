const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media)
console.log(media.toFixed(2))
// O toString(2) tranforma a média(7.87) em número binário, antes do ponto é o 7, após é o 87.
console.log(media.toString(2))
console.log(typeof Number)