import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  id: number;
  constructor(
    private readonly _router: Router,
    private readonly _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // observable son asyn
    this._activatedRoute
    .params
    .subscribe(
      (resultado) => {
        console.log('resultado observable');
        console.log(resultado);
        this.id = resultado.id;
        console.log('valor de id', this.id);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  irAUsuarioListar() {
    this._router.navigate(['/usuario', 'listar']);
  }
}
