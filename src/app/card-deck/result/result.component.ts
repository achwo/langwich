import { Card } from './../../card';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lw-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  @Input() cards: Card[];
  @Output() done = new EventEmitter();
  @Output() more = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
