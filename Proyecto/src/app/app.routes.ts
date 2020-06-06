import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { MisReservasComponent } from './mis-reservas/mis-reservas.component';
import { RegistroPeliculasComponent } from './registro-peliculas/registro-peliculas.component';
import { ReservaComponent } from './reserva/reserva.component';
import { HomeComponent } from './home/home.component';
import { InicioComponent } from './inicio/inicio.component';
import { InformacionComponent } from './informacion/informacion.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { ListaPeliculasComponent } from './lista-peliculas/lista-peliculas.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/Router';


const rutas: Routes = [
  
  {
    path: 'inicio',
    component: InicioComponent,
  },
  {
    path: 'home/:idUsuario',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registro',
    component: RegistroComponent,
  },
  {
    path: 'pelicula/:idUsuario',
    component: RegistroPeliculasComponent,
  },
  {
    path: 'info',
    component: InformacionComponent,
  },
  {
    path: 'reserva/:idUsuario/:idSala',
    component: ReservaComponent,
  },
  {
path: 'MisReservas/:idUsuario',
component: MisReservasComponent
  },
  {
path: 'ListUser/:idUsuario',
component: ListaUsuariosComponent
  },
  {
path:'listadopeliculas/:idUsuario',
component: ListaPeliculasComponent
  },
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '',
  }


 
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  providers: [],
  exports: [RouterModule],
})
export class AppRoutes {}
