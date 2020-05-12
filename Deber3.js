var arreglo=[
    
    {nombre:'Juan',edad:19,fechaNaci: new Date(1999,07,01),telefono:"0999999999"},
    {nombre:'Luis',edad:20,fechaNaci: new Date(1999,12,12),telefono:"0999999999"},
    {nombre:'Nicole',edad:24,fechaNaci: new Date(1999,9,08),telefono:"0999999999"},
    {nombre:'Emilia',edad:20,fechaNaci: new Date(1999,11,11),telefono:"0999999999"},
]
//**************************************************************************************************** */
// var nombreUsuario={nombre:'Bryan',edad:21,fechaNaci: new Date(1999,02,04),telefono:"0999999999"}
// function usuarioExiste(arreglo,nombreUsuario,error,insertarUsuario){
//     for (var index = 0; index < arreglo.length; index++) {
//         if(arreglo[index].nombre===nombreUsuario.nombre){
//             return error()
//         }    
//     }
//     insertarUsuario(arreglo,nombreUsuario) 
// }
// function error(){
//     console.error("El usuario ya existe")
// }
// function insertarUsuario(arreglo,nombreUsuario){
// arreglo.push(nombreUsuario)
// console.log(arreglo)
// console.info("El usuario se creo correctamente")
// }
// usuarioExiste(arreglo,nombreUsuario,error,insertarUsuario)
/*********************************************************************************************************** */
// var nombreUsuario={nombre:'Bryan',edad:21,fechaNaci: new Date(1999,02,04),telefono:"0999999999"}
// var nuevosDatos={nombre:'Bryan',edad:21,fechaNaci: new Date(1999,02,04),telefono:"012345678765"}
// function consulta(arreglo,nombreUsuario,nuevosDatos,error,editar){
//     for (var index = 0; index < arreglo.length; index++) {
//         if(arreglo[index].nombre===nombreUsuario.nombre){
//             return editar(arreglo,index,nuevosDatos)
//         }    
//     }
//    error()
// }
// function error(){
//     console.error("El usuario no existe")
// }
// function editar(arreglo,index,nuevosDatos){
//     arreglo[index]=nuevosDatos
//     console.log(arreglo)
//     console.log("Datos editados")
// }
// consulta(arreglo,nombreUsuario,nuevosDatos,error,editar)
/****************************************************************************************************** */
// function listar(arreglo,imprimir){
//     for (let index = 0; index < arreglo.length; index++) {
//        imprimir(arreglo[index].nombre)
//     }
// }
// function imprimir(nombre){
//     console.log(nombre)
// }
// listar(arreglo,imprimir)

/************************************************************************************************************* */
// var nombreUsuario={nombre:'Bryan',edad:21,fechaNaci: new Date(1999,02,04),telefono:"0999999999"}
// function consulta(arreglo,nombreUsuario,error,eliminar){
//     for (var index = 0; index < arreglo.length; index++) {
//         if(arreglo[index].nombre===nombreUsuario.nombre){
//             return eliminar(arreglo,index,)
//         }    
//     }
//    error()
// }
// function error(){
//     console.error("El usuario no existe")
// }
// function eliminar(arreglo,index){
//  for (let i = index; i < arreglo.length-1; i++) {
//      arreglo[i]=arreglo[i+1]
//  }
//     console.log(arreglo)
//     console.log("Datos eliminados")
// }
// consulta(arreglo,nombreUsuario,error,eliminar)