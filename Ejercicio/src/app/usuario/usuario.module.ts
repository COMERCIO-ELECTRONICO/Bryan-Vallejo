import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoUserComponent } from './info-user/info-user.component';
import { UsuarioRoutes } from './usuario.routes';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    InfoUserComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutes,
    MatInputModule,
    FormsModule,
  ]
})
export class UsuarioModule { }
