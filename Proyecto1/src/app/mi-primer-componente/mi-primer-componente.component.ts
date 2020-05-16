import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy
} from '@angular/core';
// @nombreDecorador() decorador
@Component({
  selector: 'app-mi-primer-componente',
  templateUrl: './mi-primer-componente.component.html',
  styleUrls: ['./mi-primer-componente.component.css']
})
export class MiPrimerComponenteComponent implements OnInit, OnDestroy {

  @Input() titulo: string;
  @Input() nombreBoton: string;
  @Input() imagenPath: string;
  @Input() datos: Object;

  @Output() saludoHijo = new EventEmitter();

  fecha = new Date();
  sueldo: number = 3.1416;
  nombre: string = 'kevin';


  constructor() { }

  ngOnInit() {
    console.log('datos del padre en hijo');
    console.log(this.datos);
  }

  ngOnDestroy() {

  }


  SALUDAR() {
    alert('holaaaaaa');
    this.saludoHijo.emit('saludo de tu hijo');
  }

}
