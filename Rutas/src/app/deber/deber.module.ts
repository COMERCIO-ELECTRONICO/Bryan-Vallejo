import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeberRoutingModule } from './deber-routing.module';
import { CrearComponent } from './crear/crear.component';
import { ListarComponent } from './listar/listar.component';
import { EditarComponent } from './editar/editar.component';
import { FormularioComponent } from './formulario/formulario.component';


@NgModule({
  declarations: [CrearComponent, ListarComponent, EditarComponent, FormularioComponent],
  imports: [
    CommonModule,
    DeberRoutingModule,
    FormsModule
  ]
})
export class DeberModule { }
