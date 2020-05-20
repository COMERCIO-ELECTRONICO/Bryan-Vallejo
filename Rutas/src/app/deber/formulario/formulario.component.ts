import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor() { }
  nombre='';
  apellido='';
  email = '';
  telefono='';
  clave1='';
  clave2='';

  ngOnInit(): void {
  }
  FormDeber(formulario){
    alert(
      'Nombre: ' +
        formulario.controls.nombre.value +
        '\nApellido: ' +
        formulario.controls.apellido.value+
        '\nEmail: ' +
        formulario.controls.email.value +
        '\nTelefono: ' +
        formulario.controls.telefono.value+
        '\nClave: '+
        formulario.controls.clave1.value
    );

  }

}
