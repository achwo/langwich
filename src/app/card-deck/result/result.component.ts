import { Card } from './../../card';
import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'lw-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {

  @Input() cards: Card[];
  @Output() done = new EventEmitter();
  @Output() more = new EventEmitter();


  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.key === '1') {
      this.done.emit();
    }

    if (event.key === '2') {
      this.more.emit();
    }
  }

}
