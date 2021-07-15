import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CardsService } from 'src/app/cards.service';
import { Card } from 'src/app/user.models';

@Component({
  selector: 'app-cards-form',
  templateUrl: './cards-form.component.html',
  styleUrls: ['./cards-form.component.scss']
})
export class CardsFormComponent implements OnInit {

  public cards! : Card;
  cardId = new FormControl('');

  constructor(
    private cardsService: CardsService
  ) { }

  ngOnInit(): void {
  }

  getCard(){

    this.cardsService.getById(this.cardId.value)
   .subscribe((dados) => console.log(this.cards = dados));

  }

}
