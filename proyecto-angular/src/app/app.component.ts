import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto-angular';
  esconderHola = false;
  arregloNuemros = [{ nombre: 'Bryan' }, { nombre: 'Steven' }];

  eventoClick() {
    this.esconderHola = true;
  }
}
