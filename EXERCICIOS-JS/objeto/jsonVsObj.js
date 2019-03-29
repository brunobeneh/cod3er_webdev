const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c }}
console.log(JSON.stringify(obj))

/*Qualquer atributo  em JSON precisa ser delimitado por "" e não por '*/
console.log(JSON.parse('{"a":1, "b":2, "c":3}'))
console.log(JSON.parse('{"a":1, "b":"string", "c":true, "d":{}, "e":[]}'))

/*Em JSON podemos ter um objeto dentro de outro desde que o primeiro seja delimitado por "" */