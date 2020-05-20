import { FormularioComponent } from './formulario/formulario.component';
import { EditarComponent } from './editar/editar.component';
import { CrearComponent } from './crear/crear.component';
import { ListarComponent } from './../deber/listar/listar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
path: 'listar',
component: ListarComponent
  },
  {
path: 'crear',
component: CrearComponent
  },
  {
path: 'editar',
component: EditarComponent
  },
  {
path: 'Form',
component: FormularioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeberRoutingModule { }
