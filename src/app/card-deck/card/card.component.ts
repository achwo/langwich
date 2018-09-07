import { Component, OnInit, Input, Output } from '@angular/core';
import { Card } from '../../card';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'lw-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  card: Card;

  @Output() solve = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  onFlip() {
    console.log('Card.onFlip');
    this.card.opened = !this.card.opened;
  }

  onWrong(event: Event) {
    console.log('Card.onWrong');
    event.stopPropagation();
    this.solve.emit(false);
  }

  onRight(event: Event) {
    console.log('Card.onRight');
    event.stopPropagation();
    this.solve.emit(true);
  }


}
