export interface PeliculaInterface {
    id?:string;
    nombre?: string;
    clas?: string;
    imgPath: string
  }
  export interface SalaInterface{
    id?: String;
    nombre?: String;
    id_Pelicula?: String;
  } 