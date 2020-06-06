import { SalaInterface } from './../models/pelicula-interface';
import { DataApiService } from './../services/data-api.service';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/Router';
import { ActivatedRoute, Params } from '@angular/Router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private readonly _ActivatedRoute: ActivatedRoute,
    private readonly _router: Router,
    private dataApi: DataApiService
    ) {
      this.idUsuario = {
        idUsuario: this._ActivatedRoute.snapshot.params.idUsuario,
      };

   }
   idUsuario;
   GetSala: SalaInterface;
   id;
  ngOnInit(): void {
    this.getListPeliculas();
      
  }

  getListPeliculas(){
    this.dataApi
    .getAllPeliculas()
    .subscribe((sala: SalaInterface) => (this.GetSala = sala) );
  }
  Reservar(sala){
     this._router.navigate(['/reserva/' + this.idUsuario.idUsuario+"/"+sala])
    }
    MisReservas(){
       this._router.navigate(['/MisReservas/'+this.idUsuario.idUsuario])
       
      }
     
}