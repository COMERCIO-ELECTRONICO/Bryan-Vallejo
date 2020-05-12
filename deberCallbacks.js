// DEBER
/*
usar un arreglo de json (nombre, edad, fechaNacimiento, telf)
- callback crear UN USUARIO (JSON) -> buscar en si ya existe debe impirmir q ya existe y sino crearlo
- callback editar un usuario
- callback eliminar un usuario
- callback listar usuario
*/
var arregloJsons = [{
    nombre: 'Bryan',
    edad: 21,
    fechaNacimiento: new Date(),
    telf: 091883847373
}]

var usuarioNuevo = {
    nombre: 'Lol',
    edad: 24,
    fechaNacimiento: new Date(),
    telf: 222222222
}

function crearUsuario(arreglo, usuarioACrear, cb) {
    var usuarioEncontrado = arreglo
        .find(
            (item) => {
                return item.nombre === usuarioACrear.nombre
            })
    // console.log(usuarioEncontrado);
    if (usuarioEncontrado !== undefined) {
        cb({
            mensaje: 'Usuario creado',
            usuario: usuarioACrear,
            arreglo
        })
    } else {
        arreglo.push(usuarioACrear)

        cb({
            mensaje: 'Usuario existe',
            usuario: usuarioACrear,
            arreglo
        })
    }
}

crearUsuario(arregloJsons, usuarioNuevo, (respuestaCallback) => {
    console.log(`mensaje: ${respuestaCallback.mensaje}, usuario: ${respuestaCallback.usuario}`)
    console.log(respuestaCallback.arreglo)
})

function eliminarUsuario(arreglo, nombreUsuario, cb) {

    var indiceUsuario = arreglo
        .findIndex(
            (item) => {
                return item.nombre === nombreUsuario
            })
    console.log(indiceUsuario);
    if (indiceUsuario !== -1) {
        arreglo.splice(indiceUsuario, 1)
        cb({
            mensaje: 'eliminado'
        })
    } else {
        cb({
            mensaje: 'eliminado no'
        })
    }

}

eliminarUsuario(arregloJsons, 'Bryan', (resultadoCallback) => {
    console.log(resultadoCallback)
    console.log(arregloJsons)
})
console.log(arregloJsons)