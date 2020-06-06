import { NgModule } from '@angular/core';
import { InfoUserComponent } from './info-user/info-user.component';
import { Routes, RouterModule } from '@angular/router';


const rutas: Routes = [
  {
    path: ':id/:nombre/info',
    component: InfoUserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(rutas)],
  providers: [],
  exports: [RouterModule],
})

export class UsuarioRoutes{}
