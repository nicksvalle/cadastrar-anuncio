import { Component, OnInit } from '@angular/core';
import { Cadastrar } from '../anuncio';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  anuncios: Cadastrar[] = [];

  constructor(private homeService : HomeService) { }

  ngOnInit(): void{
    this.loadAnuncios();
  }

  loadAnuncios(){
    this.homeService.getAnuncios().subscribe(
      {
        next : data => this.anuncios = data
      }
    );
  }
}
