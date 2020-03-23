import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private http: HttpClient) { }

  createNewDeck() {
    return this.http.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
  }

  drawOneCard(deckId: string) {
    return this.http.get("https://deckofcardsapi.com/api/deck/" + deckId + "/draw/?count=1");
  }
}
