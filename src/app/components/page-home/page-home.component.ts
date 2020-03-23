import { Component, OnInit } from '@angular/core';
import { CardsService } from 'src/app/services/cards.service';
import { CardApi, Deck, Card } from '../../models/card-api';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent implements OnInit {

  deckId: string;
  myCards: Card[] = [];
  numberOfCards: number;

  constructor(private cardService: CardsService) { 
    cardService.createNewDeck().subscribe((response: CardApi) => {
      this.deckId = response.deck_id;
      console.log('New deck ID = ' + this.deckId);
      this.numberOfCards = response.remaining;
    });
  }

  ngOnInit(): void {
  }

  drawCard(): void {
    this.cardService.drawOneCard(this.deckId).subscribe((response: Deck) => {
      this.myCards.push(response.cards[0]);
      console.log(this.myCards);
      this.numberOfCards = response.remaining;
      console.log(this.numberOfCards);
    });
  }

  reshuffle() {
    this.myCards = [];
    this.cardService.createNewDeck().subscribe((response: CardApi) => {
      this.deckId = response.deck_id;
      console.log('New deck ID = ' + this.deckId);
      this.numberOfCards = response.remaining;
      console.log('New card number = ' + this.numberOfCards);
    });
  }
}
