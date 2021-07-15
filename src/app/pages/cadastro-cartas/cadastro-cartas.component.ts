import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CardsService } from 'src/app/cards.service';
import { Card } from 'src/app/user.models';


@Component({
  selector: 'app-cadastro-cartas',
  templateUrl: './cadastro-cartas.component.html',
  styleUrls: ['./cadastro-cartas.component.scss']
})
export class CadastroCartasComponent implements OnInit {

  public cardForm = new FormGroup({
    id : new FormControl(''),
    name : new FormControl(''),
    atk : new FormControl(''),
    def : new FormControl(''),
    img : new FormControl('')
  })

  constructor(
    private cardsService: CardsService,
    ) { }

  ngOnInit(): void {
  }

  submit() {
    debugger;
    const card: Card = this.cardForm.value;
    this.cardsService.save(card).subscribe((login)=> {
      alert(login.id +' Salvo com login ' + login.name)
    });
  }

  delete() {
    const user: Card = this.cardForm.value;
    this.cardsService
      .delete(user.id).subscribe();
  }



}
