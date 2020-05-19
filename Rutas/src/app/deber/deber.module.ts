import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeberRoutingModule } from './deber-routing.module';
import { CrearComponent } from './crear/crear.component';
import { ListarComponent } from './listar/listar.component';
import { EditarComponent } from './editar/editar.component';


@NgModule({
  declarations: [CrearComponent, ListarComponent, EditarComponent],
  imports: [
    CommonModule,
    DeberRoutingModule
  ]
})
export class DeberModule { }
