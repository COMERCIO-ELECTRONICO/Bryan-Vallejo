import { LoginService } from './../services/login.service';
import { ActivatedRoute } from '@angular/Router';
import { Component, OnInit, ViewChild} from '@angular/core';
import { Router, RouterModule } from '@angular/Router';

@Component({
  selector: 'app-lista-peliculas',
  templateUrl: './lista-peliculas.component.html',
  styleUrls: ['./lista-peliculas.component.css']
})
export class ListaPeliculasComponent implements OnInit {

  constructor(
    private readonly _ActivatedRoute: ActivatedRoute,
    private readonly _router: Router,
    private readonly _loginService: LoginService,
  ) {
    this.idUsuario = {
      id: this._ActivatedRoute.snapshot.params.idUsuario,
    };
  
    this._loginService.metodoGet('http://localhost:1337/Peliculas')
    .subscribe((resultadoMetodoGet) => {
      this.peliculas = (resultadoMetodoGet)
    });
   }

   idUsuario;
   peliculas;
  ngOnInit(): void {
  }

  eliminar(datos){
    this._loginService.metodoDelete('http://localhost:1337/Peliculas/'+datos.id)
    .subscribe((resultadoMetodoDelete) => {
      this.peliculas = (resultadoMetodoDelete)
      this._router.navigate(['/listadopeliculas/' + this.idUsuario.id])
    });

  }
  guardar(datos){
this._loginService.metodoPut('http://localhost:1337/Peliculas/'+datos.id,
{
nombre:datos.nombre,
clas:datos.clas,
imgPath:datos.imgPath
}).subscribe((resultadoMetodoPut)=>{
  this._router.navigate(['/listadopeliculas/' + this.idUsuario.id])
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
