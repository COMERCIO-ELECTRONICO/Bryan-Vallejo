/*var arregloNumero = [1, 2, 3, 4]
// console.log(arregloNumero)
// indexOf, encuntra el indice del elemento
// console.log(arregloNumero.indexOf(0))
// añadir elementos, Push
//console.log(arregloNumero.push(10))
// console.log(arregloNumero)
// acceder elementos
// console.log(arregloNumero[2])
// slice y splice

// slice => dicidir el vector original;
var arregloSlice = arregloNumero.slice(0, 1)
//console.log(arregloSlice);
//console.log(arregloNumero);
// splice => dicidir el vector original;
//var arregloSplice = arregloNumero.splice(2, 1)
//console.log(arregloSplice);
//console.log(arregloNumero);

// Pop => elimina ultimo elemento

//console.log(arregloNumero.pop())
//console.log(arregloNumero)

var arreglo2 = [1, 2, 3, 4];
/*arreglo2
    .forEach(
        function (item, indice, arreglo) {
            console.log('item: ' + item);
            console.log('indice: ' + indice);
            console.log('arreglo: ' + arreglo);
        }
    )*/

// map => returno arreglo, muta al arreglo o lo modifica
/*var arregloMutado = arreglo2
    .map(
        (item, indice, arreglo) => {
            console.log(item)
            if (item === 2) {
                return item + 2;
            }
            return item + 1;
        }
    )
console.log(arregloMutado);*/

// filter => retorna arreglor dependien de la condicion

/*var arregloFilter = arreglo2
    .filter(
        (item, valor, arreglo) => {
            return item < 3
        }
    )
console.log(arregloFilter);*/

// find => retorn un valor
/*var valorFind = arreglo2
    .find(
        (item, indice, arreglo) => {
            return item === 1
        }
    )
    console.log(valorFind);*/

// every y some
// every verifica si todo los valores cumplen una condicion 
// true, false
// some verifica si almenos uno cumplen una condicion 

/*
var operadoresMapyFilter = arreglo2
    .map(
        (item) => {
            return item * 2;
        }
    ).filter(
        (item) => {
            return item == 4
        }
    )

//arreglo uno, multiplique * 2, y me filtrar los pares, usar map y filter
//arreglo dos, filter los los impares , sumar + 2

var a = {
    arreglos: {
        uno: [2, 4, 5, 8, 6, 9, 10],
        dos: [
            {valor: 1},
            {valor: 4},
            {valor: 2},
            {valor: 24},
            {valor: 100},
            {valor: 23},
            {valor: 45},
            {valor: 23}
        ],
    }

}*/
var arregloReduce = [2,1,11,3,45]
var valorSumaArreglo = arregloReduce
.reduce(
    (acumulador, item, indice, arreglo)=>{
  console.log(acumulador)
return acumulador + item
    }, 0 //el valor inicial del acumulador
)
console.log(valorSumaArreglo)