//Factory simples
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())

//função factory criar produto (nome do produto, preço do produto)/novo obj usando os parametros da função factory que ira receber nome e preço e ira retonar um novo produto com nome e preço e desconto com valor fixo.

function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2450.79))
console.log(criarProduto('Celular', 1050.39))
