const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}, ${nome}`)
}

/* fabricantes.forEach(imprimir)
   fabricantes.forEach(function(a) {  //Existem essa forma de fazer e a de baixo.
    console.log(a)
}) */

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricantes => console.log(fabricantes))