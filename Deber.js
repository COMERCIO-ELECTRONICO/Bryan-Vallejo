var json = {
  arreglos: {
    uno: [2, 4, 5, 8, 6, 9, 10],
    dos: [
      { valor: 1 },
      { valor: 4 },
      { valor: 2 },
      { valor: 24 },
      { valor: 100 },
      { valor: 23 },
      { valor: 45 },
      { valor: 23 },
    ],
  },
};
//Arreglo uno, multiplique * 2, y me filtrar los pares, usar map y filter
var json1 = json.arreglos.uno.map((item, index, arreglos) => {
  return item * 2;
});
console.log("Multiplicación * 2")
console.log(json1)
var json2 = json.arreglos.uno.filter((item, valor, arreglos) => {
  return valor%2 === 0
});
console.log("Posiciones pares")
console.log(json2)
var json2 = json.arreglos.uno.filter((item, valor, arreglos) => {
  return item%2 === 0
});
console.log("Valores pares")
console.log(json2)

//Arreglo dos, filter los los impares , sumar + 2
var json3 = json.arreglos.dos.filter((item, valor, arreglos) => {
  return valor%2 != 0
});
console.log("Posiciones inpares")
console.log(json3)

var json3 = json.arreglos.dos.filter((item, valor, arreglos) => {
    return item.valor%2 != 0
  });
  console.log("Valores inpares")
  console.log(json3)

var json4 = json.arreglos.dos.map((item, index, arreglos) => {
  return item.valor + 2;
});
console.log("Suma + 2");
console.log(json4);
