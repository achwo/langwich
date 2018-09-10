import { Component, OnInit, Input, Output, HostListener } from '@angular/core';
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
    this.card.opened = !this.card.opened;
  }

  onWrong(event: Event) {
    event.stopPropagation();
    this.solve.emit(false);
  }

  onRight(event: Event) {
    event.stopPropagation();
    this.solve.emit(true);
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    console.log(event);
    if (event.key === 'w' || event.key === '1') {
      this.onWrong(event);
    }

    if (event.key === 'r' || event.key === '2') {
      this.onRight(event);
    }

    if (event.key === ' ') {
      this.onFlip();
    }
  }

}
