import { Component } from '@angular/core';
import { Cadastrar } from '../anuncio';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CadastrarService } from '../cadastrar.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent {

  cadastrar : Cadastrar[] = [];
  isEditing : boolean = false;
  formGroupClient: FormGroup;

  constructor(private cadastrarService : CadastrarService, private formBuilder : FormBuilder){

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
    this.cadastrarService.getAnuncios().subscribe(
      {
        next : data => this.cadastrar = data
      }
    );
  }

  save(){
    if(this.isEditing)
    {
      this.cadastrarService.update(this.formGroupClient.value).subscribe(
        {
          next: () => {
            this.loadAnuncios();
            this.formGroupClient.reset();
            this.isEditing = false;
          }
        }
      )
    }
    else{
      this.cadastrarService.save(this.formGroupClient.value).subscribe(
        {
          next: data => {
            this.cadastrar.push(data);
            this.formGroupClient.reset();
          }
        }
        );
    }
  }

  clean(){
    this.formGroupClient.reset();
    this.isEditing = false;
  }

  edit(cadastrar : Cadastrar){
    this.formGroupClient.setValue(cadastrar);
    this.isEditing = true;
  }

  delete(cadastrar : Cadastrar){
    this.cadastrarService.delete(cadastrar).subscribe({
      next: () => this.loadAnuncios()
    })
  }

}
