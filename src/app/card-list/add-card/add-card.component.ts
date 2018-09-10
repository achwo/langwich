import { CardsService } from './../../cards.service';
import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Card } from '../../card';

@Component({
  selector: 'lw-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss']
})
export class AddCardComponent {

  @ViewChild('wordField') wordField;

  @Output()
  add = new EventEmitter<Card>();

  profileForm = new FormGroup({
    word: new FormControl(''),
    translation: new FormControl('')
  });

  constructor(private cardsService: CardsService) { }

  onSubmit() {
    this.addCard(this.profileForm.value.word, this.profileForm.value.translation);
  }

  addCard(word: string, translated: string) {
    console.log('AddCard.addWord', word);
    if (word !== '' && translated !== '') {
      this.cardsService.addCard(word, translated).subscribe((card: Card) => {
        this.add.emit(card);
        this.profileForm.reset();
        this.wordField.nativeElement.focus();
      });
    }
  }
}
