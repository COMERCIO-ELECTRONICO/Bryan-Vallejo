var nombre = 'Bryan'

console.log(nombre.length)
//Busca caracter
console.log(nombre.indexOf('n'))
//Busca caracter
console.log(nombre.search('i'));
//Divide el string no toma la ultima posicion
console.log(nombre.slice(1,3))
//Divide el string incluyendo la ultima posicion
console.log(nombre.substr(1,3))
//Minuscula
console.log(nombre.toLowerCase())
//Mayuscula
console.log(nombre.toUpperCase())
//
var texto = "Hola Hola Mundo :v"

console.log(texto.replace(/Hola/g,"HELLO"))
console.log(texto.replace("Hola", "hello"))
//concatenar string
console.log(texto.concat(' ', nombre))
console.log(`${texto} Mas mi nombre: ${nombre}`)
//quita espacios al final
console.log(texto.trim())
console.log(texto.split(' '))
console.log(nombre.charAt(0))
//la primera, la ultima y la intermedia en mayuscula 
// sumar todos los puntos
//sumar todos las comas