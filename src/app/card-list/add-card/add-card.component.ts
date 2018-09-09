import { CardsService } from './../../cards.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'lw-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss']
})
export class AddCardComponent implements OnInit {

  profileForm = new FormGroup({
    word: new FormControl(''),
    translation: new FormControl('')
  });

  constructor(private cardsService: CardsService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.addCard(this.profileForm.value.word, this.profileForm.value.translation);
  }

  addCard(word: string, translated: string) {
    console.log('AddCard.addWord', word);
    if (word !== '' && translated !== '') {
      this.cardsService.addCard(word, translated);

    }
  }
}
