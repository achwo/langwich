import { TestBed, inject } from '@angular/core/testing';

import { CardDeckResolver } from './card-deck-resolver.service';

describe('CardDeckResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardDeckResolver]
    });
  });

  it('should be created', inject([CardDeckResolver], (service: CardDeckResolver) => {
    expect(service).toBeTruthy();
  }));
});
