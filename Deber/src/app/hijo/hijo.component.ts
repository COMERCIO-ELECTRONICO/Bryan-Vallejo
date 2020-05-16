import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  constructor() { }
  edad:number;
  @Input() nombreBoton: string;
  @Input() años: number;
  @Output() calcular= new EventEmitter
  ngOnInit() {

  }
  
  CalcularEdad(){
   this.edad=2020-this.años
   this.calcular.emit(this.edad)
  }


}
