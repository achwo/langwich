export class Card {
    constructor(
      public word: string,
      public translated: string,
      public imageUrl: string,
      public opened: boolean,
      public correct: boolean
    ) {}
}
