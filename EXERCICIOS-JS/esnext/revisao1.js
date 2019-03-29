/**Let e const Let - não tem escopo global, por isso para chamarmos precisamos que o console.log precisa esta dentro do bloco 
 * que ele esta.*/
{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)

/**Template String - delimitar strings com as crases (``) e dentro do template você consegue colocar variáveis apartir de ${}.
 * Quando a string for interpretada, o valor da variável é interpolado, ou seja, interpretado e substitui o ${} pela variavel na
 * string final. Lembrando que template string também interpreta tab (espaço com a tecla tab), quebra de linhas (quando pula pra
 * linha debaixo com o enter) e tudo é interpretado como string.*/
const produto = 'iPad'
console.log(`${produto} é caro!`)

/**Destructuring o operador é a forma de você tirar de dentro de uma estrutura algo, seja objeto, array, string, você pode
 * desestruturar apartir do operado destructuring.*/
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

 const [x, , y] = [1, 2, 3]
console.log(x, y)

const { idade: i, nome } = { nome: 'Ana', idade: 9 }
console.log(i, nome)
