import { Component, OnInit } from '@angular/core';
import { LoginService } from './../services/login.service';
import { Router, RouterModule } from '@angular/Router';
import { ActivatedRoute, Params } from '@angular/Router';

@Component({
  selector: 'app-mis-reservas',
  templateUrl: './mis-reservas.component.html',
  styleUrls: ['./mis-reservas.component.css']
})
export class MisReservasComponent implements OnInit {

  constructor(
    private readonly _ActivatedRoute: ActivatedRoute,
    private readonly _router: Router,
    private readonly _loginService: LoginService,
  ) { 
    this.idUsuario = {
      id: this._ActivatedRoute.snapshot.params.idUsuario,
    };
this._loginService.metodoGet('http://localhost:1337/Reservas?id_Usuario='+this.idUsuario.id)
.subscribe((resultadoMetodoGet) => {
  this.reservas = (resultadoMetodoGet)
});



  }
  reservas;
  idUsuario;
  ngOnInit(): void {
  }
  eliminar(id,idSala){
    console.log(idSala)
    this._loginService.metodoDelete('http://localhost:1337/Reservas/'+id)
    .subscribe((resultadoMetodoDelete) => {

      this._loginService.metodoPut('http://localhost:1337/SalaPuestos/'+idSala,{
        estado:"Disponible"
      }).subscribe((resultadoPut)=>{
        this._router.navigate(['/home/' + this.idUsuario.id])

      })
      
    });

  }

}
