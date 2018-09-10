import { CardsService } from './../cards.service';
import { Component, OnInit } from '@angular/core';
import { Card } from '../card';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'lw-card-deck',
  templateUrl: './card-deck.component.html',
  styleUrls: ['./card-deck.component.scss']
})
export class CardDeckComponent implements OnInit {
  currentCard: Card;
  cards: Card[];
  currentCardIdx = 0;

  constructor(private cardsService: CardsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data: { cards: Card[] }) => {
      this.cards = data.cards;
      this.currentCard = this.cards[0];
    });
  }

  onSolve(result: boolean) {
    this.currentCard.correct = result;
    this.nextCard();
  }

  onMore() {
    event.stopPropagation();

    this.cardsService.getCards(5).subscribe((cards) => {
      this.cards = cards;
      this.currentCard = this.cards[0];
      this.currentCardIdx = 0;
    });
  }

  onDone() {
    event.stopPropagation();
    this.router.navigate(['/']);
  }

  cardsLeft() {
    return this.currentCardIdx < this.cards.length;
  }

  private nextCard() {
    this.currentCard = this.cards[Math.min(++this.currentCardIdx, this.cards.length - 1)];
  }
}
