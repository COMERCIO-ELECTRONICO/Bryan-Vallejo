import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './inicio/home/home.component';
import {LoginComponent} from './login/login.component';
import {NgModule} from '@angular/core';
import {NoEncontradaComponent} from './inicio/no-encontrada/no-encontrada.component';

const rutas: Routes = [
  {
    path: 'Inicio',
    component: HomeComponent,
    children: [
      {
        path: 'login2',
        component: LoginComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'usuario',
    loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioModule)
  },
  {
    path: 'deber',
    loadChildren: () => import('./deber/deber.module').then(deber => deber.DeberModule)
  },
  {
    path: '',
    redirectTo: 'Inicio',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NoEncontradaComponent
  }
];

@NgModule({

  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule],

})

export class AppRoutesModule {
}
