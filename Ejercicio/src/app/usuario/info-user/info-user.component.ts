import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.css'],
})
export class InfoUserComponent implements OnInit {
  constructor(
    private readonly _activatedRoute: ActivatedRoute
    ) {} //public  ruta: ActivatedRoute
  nombre1 = '';
  nombre2 = '';
  apellido1 = '';
  apellido2 = '';
  email = '';
  telefono = '';
  pass = '';
  confimarPassword = '';

  ngOnInit(): void {
    this._activatedRoute
    .params
    .subscribe((resultadoParametros) => {
      console.log(resultadoParametros);
    });
  }

  crearOEditar() {
    if (this.pass === this.confimarPassword) {
      alert('Contraseñas validas');
    } else {
      alert('Contraseñas no validas');
    }
  }
}
