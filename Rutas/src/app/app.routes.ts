import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './inicio/home/home.component';
import { NgModule } from '@angular/core';
import { NoEncontradoComponent } from './inicio/no-encontrado/no-encontrado.component';

const rutas: Routes = [
  {
    path: 'inicio',
    component: HomeComponent,
  },
  {
    path: ':id/inicio',
    component: HomeComponent,
  },
  {
    path: 'inicio/:id',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'usuario',
    loadChildren: () =>
      import('./usuario/usuario.module').then(
        (usuario) => usuario.UsuarioModule
      ),
  },
  {
    path: 'deber',
    loadChildren: () =>
      import('./deber/deber.module').then(
        deber => deber.DeberModule
      ),
  },
  {
    path: '',
    redirectTo: '/deber/Form',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NoEncontradoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  providers: [],
  declarations: [],
  exports: [RouterModule],
})
export class AppRoutesComponent {}
