import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cadastrar } from './anuncio';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private anuncioUrl = 'anuncio.json';

  constructor(private http : HttpClient) { }

  getAnuncios(): Observable<Cadastrar[]> {
    return this.http.get<Cadastrar[]>(this.anuncioUrl);
  }
}
