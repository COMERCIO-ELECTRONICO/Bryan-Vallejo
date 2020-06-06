import { LoginService } from './../services/login.service';
import { Router, RouterModule } from '@angular/Router';
import { Component, OnInit } from '@angular/core';
import { isUndefined } from 'util';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  constructor(
    private readonly _router: Router,
    private readonly _loginService: LoginService,

  ) { }

  user;
  nombre;
  apellido;
  cedula;
  email;
  telefono;
  clave1;
  clave2;
id;
  ngOnInit(): void {
  }
  Registrar() {
    if(this.user!=="" || 
    this.nombre!=="" ||
    this.telefono!=="" ||
    this.cedula!=="" ||
    this.email!=="" ||
    this.telefono!=="" ||
    this.clave1!=="" ||
    this.clave2!=="" 
    ){
      this._loginService
      .metodoPost('http://localhost:1337/User', {
        nombre: this.nombre,
        apellido: this.apellido,
        cedula: this.cedula,
        telefono: this.telefono,
        usuario: this.user,
        clave: this.clave1,
        id_role: 2
      }).subscribe((resultadoPost:any) => {
        console.log(resultadoPost)
        this.id=resultadoPost.id
        if(this.id===""){
          alert("Datos no Guardado")
        }else{
          this._router.navigate(['/home/'+this.id])
        }
      }
    
      )}

}
}