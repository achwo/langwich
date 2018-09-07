import { CardsService } from './../cards.service';
import { Component, OnInit } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'lw-card-deck',
  templateUrl: './card-deck.component.html',
  styleUrls: ['./card-deck.component.scss']
})
export class CardDeckComponent implements OnInit {
  currentCard: Card;
  cards: Card[];
  currentCardIdx = 0;

  constructor(private cardsService: CardsService) { }

  ngOnInit() {
    this.fetchCards();
  }

  fetchCards() {
    console.log('CardDeck.fetchCards');
    this.cardsService.getCards(5).subscribe((cards) => {
      console.log('CardDeck.fetchCards result');
      this.cards = cards;
      this.currentCard = this.cards[0];
    });
  }

  onSolve(result: boolean) {
    console.log('CardDeck.onSolve', result);
    this.currentCard.correct = result;
    this.nextCard();
  }

  onMore() {
    console.log('CardDeck.onMore');
    event.stopPropagation();

    this.fetchCards();
    this.currentCardIdx = 0;
  }

  onDone() {
    console.log('CardDeck.onDone');
    event.stopPropagation();
  }

  cardsLeft() {
    return this.currentCardIdx < this.cards.length;
  }

  private nextCard() {
    this.currentCard = this.cards[Math.min(++this.currentCardIdx, this.cards.length - 1)];
  }
}
