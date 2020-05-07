function saludar () {
    return 'hola' 
}
console.log(saludar())
var functionAnonima= function () {
    return 'funcion Anonima' 
    
}
console.log(functionAnonima()) 

var funcionFechaGorda = (a,b)=>{
    return a + b 
}
var a=1
var b=2
console.log(funcionFechaGorda(a,b))

var json = {
    suma: (a,b) =>{
        return (a+b)
    }
}
console.log(json.suma(3,1))
var arreglo2=[1,2,3,4,5]
var arregloFiltro=arreglo2
.filter(
    (item, valor, arreglo)=>{
        return item===3
    }
)
console.log(arregloFiltro)
//find retorna un valor
var valorFind = arreglo2
.find((item,valor,arreglo)=>{
    return item ===1
})
console.log(valorFind)