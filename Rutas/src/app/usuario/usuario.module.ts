import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioCrearComponent } from './usuario-crear/usuario-crear.component';
import { UsuarioListarComponent } from './usuario-listar/usuario-listar.component';
import { UsuarioInicioComponent } from './usuario-inicio/usuario-inicio.component';
import { UsuarioEditarComponent } from './usuario-editar/usuario-editar.component';


@NgModule({
  declarations: [UsuarioCrearComponent, UsuarioListarComponent, UsuarioInicioComponent, UsuarioEditarComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModule
  ]
})
export class UsuarioModule { }
