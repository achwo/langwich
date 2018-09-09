import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Card } from './card';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
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

  constructor() { }

  getCards(amount: number): Observable<Card[]> {
    return of(this.CARDS);
  }

  addCard(word: string, translated: string): Observable<Card> {
    console.log('CardsService.addCard', word, translated);
    const newWord = new Card(word, translated, '', false, false);
    this.CARDS.push(newWord);

    return of(newWord);
  }

}
