import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cadastrar } from './anuncio';

@Injectable({
  providedIn: 'root'
})
export class CadastrarService {
  url = "http://localhost:3000/anuncio";

  constructor(private http: HttpClient) { }

  getAnuncios(): Observable<Cadastrar[]> {
    return this.http.get<Cadastrar[]>(this.url);
  }

  save(cadastrar : Cadastrar): Observable<Cadastrar>{
    return this.http.post<Cadastrar>(this.url, cadastrar);
  }

  update(cadastrar : Cadastrar): Observable<Cadastrar>{
    return this.http.put<Cadastrar>(`${this.url}/${cadastrar.id}`, cadastrar);
  }

  delete(cadastrar : Cadastrar): Observable<void>{
    return this.http.delete<void>(`${this.url}/${cadastrar.id}`);
  }
}
