import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor( private http: HttpClient) { }

  getAllPeliculas(){
    const url_api= 'http://localhost:1337/Sala';
    return this.http.get(url_api);
  }
}
