import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginGuard implements CanActivate {
constructor(){}

canActivate(): boolean{
    // aqui logica
    const valorLocal = JSON
    .parse(localStorage.getItem('nombre'));
    if(valorLocal.nombre === 'kevin'){
        return true;
    } else {
        return false;
    }

}
}