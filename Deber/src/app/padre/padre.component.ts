import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  constructor() { }
  edad:number;
  boton: string;
  yyyy: number;
  ngOnInit() {
  }
  

  obtenerRespuestaHijo(evento){
    this.edad=evento
    console.log(evento)
  }
}
