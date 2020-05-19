import { DeberModule } from './deber/deber.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './inicio/home/home.component';
import {NoEncontradaComponent} from './inicio/no-encontrada/no-encontrada.component';
import {AppRoutesModule} from './app.routes';
import {UsuarioModule} from './usuario/usuario.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    UsuarioModule,
    DeberModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
