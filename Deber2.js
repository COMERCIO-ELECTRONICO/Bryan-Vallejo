var palabra ='COMERCIO ELECTRONICO'
var arrayPalabras= palabra.split("")
var Palabra2=""
 
for (var i = arrayPalabras.length-1; i >= 0; i--) {
 Palabra2=Palabra2+arrayPalabras[i]
}
var arrayPalabras2=Palabra2.split(" ")
var Palabra3=""
for (var j = arrayPalabras2.length-1; j >= 0; j--) {
 Palabra3=Palabra3+arrayPalabras2[j]+" "
}

console.log("Palabra")
console.log(palabra)
console.log("Palabra Invertida")
console.log(Palabra2)
console.log("***************************")
console.log("Palabra Invertida Nº2")
console.log(Palabra3)
console.log("*******************************************************************")
console.log("-Primera palabra en mayuscula \n-La palabra de la mitad en mayuscula \n-Ultima palabra  en mayuscula \n-Sumar todos los punto \n-Sumar todos las comas")

var texto="Realiza fotografías de 20 megapíxeles y puede utilizar un perfil de color Dlog-M de 10 bits, con el que se obtiene un rango dinámico más amplio al registrar hasta mil millones de colores. Esto queda bastante por encima de los 16 millones de colores de los perfiles de 8 bits, pudiendo dejar más margen y libertad en la edición posterior del material. Por su parte, el Mavic 2 Zoom cuenta con un sensor CMOS de 1/2,3 pulgadas y zoom óptico, lo cual da nombre al propio producto. En este caso es capaz de realizar capturas de 12 megapíxeles, disponiendo un zoom automático híbrido (que combina detección de fase y contraste) de una función de 'Superresolución' que recurre al zoom óptico para realizar nueve fotografías y componer una sola con todas ellas de 48 megapíxeles (con más detalle)."

var contadorComas = (texto)=>{
    var cantidadComas=texto.split(",").length-1
    return cantidadComas
}
console.log("La cantidad de comas en el texto es:")
console.log(contadorComas(texto))
var contadorPuntos = (texto)=>{
    var cantidadPuntos=texto.split(".").length-1
    return cantidadPuntos
}
console.log("La cantidad de puntos en el texto es:")
console.log(contadorPuntos(texto))
var mayusculas = (texto)=>{
    var textoArray= texto.split(" ")
    textoArray[0]=textoArray[0].toUpperCase()
    textoArray[textoArray.length-1]=textoArray[textoArray.length-1].toUpperCase()
    textoArray[Math.floor((textoArray.length-1)/2)]=textoArray[Math.floor((textoArray.length-1)/2)].toUpperCase()
    if((textoArray.length-1)%2 != 0){
        textoArray[Math.floor((textoArray.length-1)/2)+1]=textoArray[Math.floor((textoArray.length-1)/2)+1].toUpperCase()

    }
    var texto2=""
    for (var k = 0; k < textoArray.length; k++) {
        texto2=texto2+" "+textoArray[k]
    }
    return texto2
}
console.log(mayusculas(texto))

