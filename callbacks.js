//import { func } from "joi"

//API, rest API
//Programación Funcional
//function programacion(numero1, ()=>{ }, 1){
//}
/*function primeraFuncion(){
    setTimeout(()=>{
        console.log("Primera")
},5000
)
}
function segundaFuncion(){
    console.log("Segunda")
}
*/
//primeraFuncion()
//segundaFuncion()
function saluda(nombre, callbacks){
    console.log('Saludo a', nombre)
    callbacks()
}
function functionCallback(){
console.log("ya salude")
}
saluda('Bryan', functionCallback)
function saludar(nombre){
    console.log(`ejecuto saludo a ${nombre}`)
    return nombre
}
function peticionUsuario(nombre,callbacks){
    callbacks(nombre)
}
peticionUsuario("Bryan",saludar)
peticionUsuario("Bryan",(saludar)=>{
    console.log(saludar)

})*/
var arreglo=[]
var nombreUsuario="Bryan"
function agregarNombre(arreglo,nombreUsuario,cd){
    arreglo.push(nombreUsuario)
    cd({
        mensaje:"exito",
        arreglo
    })
}
agregarNombre(arreglo,nombreUsuario,(mensaje)=>{
    console.log(mensaje)
})
var arregloUsuario = [1, 2, 3, 4, 5]

function listarUsuario(arreglo, cb) {
    arreglo
        .forEach(
            usuario => {
                console.log(usuario);
            });
    cb({
        mensaje: 'lista de usuario'
    })
}

listarUsuario(arregloUsuario, (respuestaMensaje) => {
    console.log(respuestaMensaje);
})