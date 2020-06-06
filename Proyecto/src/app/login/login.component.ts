import { Component, OnInit } from '@angular/core';
import { LoginService } from './../services/login.service';
import { Router, RouterModule } from '@angular/Router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private readonly _router: Router,
    private readonly _loginService: LoginService, ) { }
  user = "";
  clave = "";
  id;
  role;
  ngOnInit(): void {
  }
  ObtenerFormulario() {

  }
  Login() {
    this._loginService
      .metodoGet('http://localhost:1337/User?usuario=' + this.user + '&&clave=' + this.clave)
      .subscribe((resultadoMetodoGet: any) => {

        this.id = resultadoMetodoGet[0].id
        this.role = resultadoMetodoGet[0].id_role.id

        if (this.role === 1) {
          
          this._router.navigate(['/ListUser/' + this.id])
        } else {

          this._router.navigate(['/home/' + this.id])
        }


      });
  }

}
