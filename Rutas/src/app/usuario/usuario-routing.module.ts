import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UsuarioCrearComponent} from './usuario-crear/usuario-crear.component';


const routes: Routes = [
  {
    path: 'crear',
    component: UsuarioCrearComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule {
}
