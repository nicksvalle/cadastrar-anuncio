import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cadastrar } from './anuncio';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private anuncioUrl = 'http://localhost:3000/anuncio';

  constructor(private http : HttpClient) { }

  getAnuncios(): Observable<Cadastrar[]> {
    return this.http.get<Cadastrar[]>(this.anuncioUrl);
  }
}
