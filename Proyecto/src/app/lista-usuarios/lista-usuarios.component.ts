import { Component, OnInit } from '@angular/core';
import { LoginService } from './../services/login.service';
import { Router, RouterModule } from '@angular/Router';
import { ActivatedRoute, Params } from '@angular/Router';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {
  usuarios;
  idUsuario;
  Role;
  select;
  camposelec(event){
    console.log(event)
  }
  constructor(
    private readonly _ActivatedRoute: ActivatedRoute,
    private readonly _router: Router,
    private readonly _loginService: LoginService,
  ) {
    this.idUsuario = {
      id: this._ActivatedRoute.snapshot.params.idUsuario,
    };
this._loginService.metodoGet('http://localhost:1337/User').subscribe((resultadoMetodoGet) => {
  this.usuarios = (resultadoMetodoGet)
console.log(this.usuarios)
});
this._loginService.metodoGet('http://localhost:1337/Role').subscribe((resultadoMetodoGet) => {
  this.Role = (resultadoMetodoGet)
});

   }

  ngOnInit(): void {
  }
  eliminar(datos){
    console.log(datos)
    this._loginService.metodoDelete('http://localhost:1337/User/'+datos.id).subscribe((resultadoMetodoDelete) => {
      
        this._router.navigate(['/ListUser/'+this.idUsuario.id])
       });
    }
    guardar(datos){
      this._loginService.metodoPut('http://localhost:1337/User/'+datos.id,
      {
        nombre:datos.nombre,
        apellido:datos.apellido,
        cedula:datos.cedula,
        telefono:datos.telefono,
        usuario:datos.usuario,
        id_role:datos.role,
      }
      ).subscribe((resultadoMetodoPut)=>{
        this._router.navigate(['/ListUser/'+this.idUsuario.id])
      }
      
      ) 
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
