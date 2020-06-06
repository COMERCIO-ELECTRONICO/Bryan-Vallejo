import { LoginService } from './services/login.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { InformacionComponent } from './informacion/informacion.component';
import { InicioComponent } from './inicio/inicio.component';
import { ReservaComponent } from './reserva/reserva.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import { RegistroPeliculasComponent } from './registro-peliculas/registro-peliculas.component';
import {MatSelectModule} from '@angular/material/select';
import { MisReservasComponent } from './mis-reservas/mis-reservas.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import {TableModule} from 'primeng/table';
import { ListaPeliculasComponent } from './lista-peliculas/lista-peliculas.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    InformacionComponent,
    InicioComponent,
    ReservaComponent,
    HomeComponent,
    RegistroPeliculasComponent,
    MisReservasComponent,
    ListaUsuariosComponent,
    ListaPeliculasComponent,
  ],
  imports: [BrowserModule, 
    TableModule,
    AppRoutes,
     BrowserAnimationsModule, 
     ButtonModule, 
     FormsModule,
     HttpClientModule,
     MatSelectModule],
  providers: [CommonModule,
    
 LoginService],
  bootstrap: [AppComponent],
})
export class AppModule {}
