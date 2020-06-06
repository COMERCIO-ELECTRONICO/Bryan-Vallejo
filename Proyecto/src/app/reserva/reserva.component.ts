import { Component, OnInit } from '@angular/core';
import { LoginService } from './../services/login.service';
import { Router, RouterModule } from '@angular/Router';
import { ActivatedRoute, Params } from '@angular/Router';
@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {
  idUsuario;
  idSala;
  sala;
  reserva;
  select = 0;
  idReserva;
  EditSala;
  constructor(
    private readonly _ActivatedRoute: ActivatedRoute,
    private readonly _router: Router,
    private readonly _loginService: LoginService,
  ) {
    this.idUsuario = {
      id: this._ActivatedRoute.snapshot.params.idUsuario,
    };
    this.idSala = {
      id: this._ActivatedRoute.snapshot.params.idSala,
    };
    console.log(this.idSala)

    this._loginService
      .metodoGet('http://localhost:1337/SalaPuestos?id_Sala='+this.idSala.id+'&&estado=Disponible')
      .subscribe((resultadoMetodoGet) => {
        this.sala = (resultadoMetodoGet)
      });
  }
  camposelec(event) {
    console.log(event)
  }
  ngOnInit(): void {
   
  }
  reservar() {
    if (this.select === 0) {
      alert("Datos Nulo")
    } else {
      this._loginService.metodoPost('http://localhost:1337/Reservas', {
        id_Usuario: this.idUsuario.id, id_SalaPuestos: this.select
      }).subscribe((resultadoMetodoGet: any) => {
        this.idReserva = resultadoMetodoGet.id
        alert(this.idReserva)
          this._loginService.metodoPut('http://localhost:1337/SalaPuestos/' + this.select, {
            estado: "Reservado"
          }).subscribe((resultadoMetodoPut: any) => {
            this.EditSala = resultadoMetodoPut.id
              this._router.navigate(['/home/' + this.idUsuario.id])
          })
      })
}
  }
}
