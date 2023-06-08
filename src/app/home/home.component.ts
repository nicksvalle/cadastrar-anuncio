import { Component, OnInit } from '@angular/core';
import { Cadastrar } from '../anuncio';
import { HomeService } from '../home.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  anuncios: Cadastrar[] = [];
  formGroupClient: FormGroup;

  constructor(private homeService : HomeService, private formBuilder : FormBuilder) { 

    this.formGroupClient = formBuilder.group({
      id : [''],
      titulo : [''],
      descricao : [''],
      preco : [''],
      date : [''],
      img: [''],
      status: ['']
    })

  }

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
