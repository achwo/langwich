import { LocalStorageService } from './local-storage.service';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Card } from './card';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  private localCards: Card[];

  private readonly CARDS = [
    {
      word: 'la manzana',
      translated: 'der Apfel',
      imageUrl: 'https://images.clarin.com/2018/04/25/r1y2MdChG_930x525__1.jpg',
      opened: false,
      correct: null
    },
    {
      word: 'la leche',
      translated: 'die Milch',
      imageUrl: '',
      opened: false,
      correct: null
    },
    {
      word: 'trabajador',
      translated: 'fleißig',
      imageUrl: '',
      opened: false,
      correct: null
    },
    {
      word: 'Carlos la ha llamado.',
      translated: 'Carlos hat sie angerufen.',
      imageUrl: '',
      opened: false,
      correct: null
    },
    {
      word: 'Mejor tú lo llamas.',
      translated: 'Besser du rufst ihn an',
      imageUrl: '',
      opened: false,
      correct: null
    },
    {
      word: 'comprar',
      translated: 'kaufen',
      imageUrl: '',
      opened: false,
      correct: null
    },
    {
      word: 'probarse',
      translated: 'anprobieren',
      imageUrl: '',
      opened: false,
      correct: null
    },
    {
      word: 'dormir',
      translated: 'schlafen',
      imageUrl: '',
      opened: false,
      correct: null
    },
    {
      word: 'levantarse',
      translated: 'aufstehen',
      imageUrl: '',
      opened: false,
      correct: null
    },
    {
      word: 'despertarse',
      translated: 'aufwachen',
      imageUrl: '',
      opened: false,
      correct: null
    },
  ];

  constructor(private localStorageService: LocalStorageService) {
    // TODO: detect availability of localStorageService

    if (localStorageService.getItem('cards') === null) {
      localStorageService.addItem('cards', this.CARDS);
    }
    this.localCards = localStorageService.getItem('cards');
  }

  getCards(amount: number): Observable<Card[]> {
    return of(this.localCards);
  }

  addCard(word: string, translated: string): Observable<Card> {
    console.log('CardsService.addCard', word, translated);
    const newWord = new Card(word, translated, '', false, false);
    this.localCards.push(newWord);
    this.localStorageService.addItem('cards', this.localCards);

    return of(newWord);
  }

  deleteCard(card: Card): Observable<boolean> {
    console.log('CardsService.deleteCard', card);
    this.localCards = this.localCards.filter((c: Card) => card !== c);
    this.localStorageService.addItem('cards', this.localCards);

    return of(true);
  }

}
