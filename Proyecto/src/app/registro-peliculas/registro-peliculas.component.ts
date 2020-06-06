
import { Router } from '@angular/Router';
import { Component, OnInit } from '@angular/core';
import { LoginService } from './../services/login.service';
import { ActivatedRoute, Params } from '@angular/Router';
@Component({
  selector: 'app-registro-peliculas',
  templateUrl: './registro-peliculas.component.html',
  styleUrls: ['./registro-peliculas.component.css']
})
export class RegistroPeliculasComponent implements OnInit {
  idUsuario;
  constructor(
    private readonly _ActivatedRoute: ActivatedRoute,
     private readonly _router: Router,
    private readonly _loginService: LoginService,    
  ) {
    this.idUsuario = {
      id: this._ActivatedRoute.snapshot.params.idUsuario,
    };


    this._loginService
    .metodoGet('http://localhost:1337/Sala')
    .subscribe((resultadoMetodoGet) => {
      console.log('Respuest de Get');
      console.log(resultadoMetodoGet);
    this.salas=(resultadoMetodoGet)
    });

  }
  camposelec(event){
    console.log(event)
  }
  salas;
nombre:'';
categoria:'';
imagen:'';
sala:0;
select;
id:null;
  ngOnInit(): void {
  }
  registrarPeli(){
    this._loginService
    .metodoPost('http://localhost:1337/Peliculas', {
      nombre:this.nombre,
    clas:this.categoria,
    imgPath:this.imagen
  }).subscribe(
      (resultadoPost:any)=>{ console.log('Respuest de Post'); 
      this.id=resultadoPost.id
      this._loginService
      .metodoPut('http://localhost:1337/Sala/'+this.select,
      {id_Pelicula:this.id}).subscribe((resultadoPost:any)=>{ 

      }
        )
       }
    )
this._loginService
.metodoPut('http://localhost:1337/SalaPuestos?id_sala='+this.select,{estado:"Disponible"})
.subscribe((resultado:any)=>{

})
   
  }
  ListUser(){
    this._router.navigate(['/ListUser/'+this.idUsuario.id])
    
  }
  Peliculas(){
    console.log(this.idUsuario.id)
    this._router.navigate(['/pelicula/'+this.idUsuario.id])
    
  }
  ListPeliculas(){
    this._router.navigate(['/listadopeliculas/'+this.idUsuario.id])

}
}
