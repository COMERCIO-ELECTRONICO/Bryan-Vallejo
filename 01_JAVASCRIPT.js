var json = {
  nombre: "Bryan",
  edad: 21,
  fech: new Date("1999-04-02"),
};
json.direccion = "quitumbe";
//console.log(json);
//console.log(json["edad"]);
json.nombre = "Bryan Vallejo";
delete json.direccion;
console.log(json);
var json2 = {
  nombre: "Bryan",
  edad: 21,
  fech: new Date("1999-04-02"),
  intereses:{
      hobby:['FUTBOL','PS4'],
      peliculas:[
          {
              nombre:"FF",
              tipo:"ACCION",
              esBuena:true,
          }
      ],
      familia:[
          {
              nombre:"ma",
              edad:"??"
          },
          {
              nombre:"hermano",
              edad:"??"
          },
      ]
  }
};
console.log(json2)
var jsonString = JSON.stringify(json2)
console.log("***************************************************")
console.log(jsonString)
console.log("***************************************************")
var stringJson= JSON.parse(jsonString)
console.log(stringJson)