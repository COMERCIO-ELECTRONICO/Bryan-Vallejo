var json={
    nombre: 'Bryan',
    edad: 21,
    fech: new Date("1999-04-02")
}
json.direccion="quitumbe"
console.log(json)
console.log(json['edad'])
json.nombre="Bryan Vallejo"
delete json.direccion
console.log(json)